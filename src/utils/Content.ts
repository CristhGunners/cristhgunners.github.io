import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

import projects from '../data/projects.json';

const postsDirectory = join(process.cwd(), '_posts');

export type PostItems = {
  [key: string]: string;
};

export type TagItem = {
  tag: string;
  count: number;
};

export type ProjectItem = {
  title: string;
  description: string;
  url: string;
  logo: string;
  company: string;
  role: string;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'is_project') {
      items[field] = data[field] ? data[field] : 'false';
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllTags(): TagItem[] {
  const posts = getAllPosts(['tags']);

  const allTags = posts.reduce<any>((group, post) => {
    const { tags } = post;

    if (group.some((tag: TagItem) => tag.tag === tags)) {
      const tagFind = group.find((tag: TagItem) => tag.tag === tags);

      if (tagFind) {
        const index = group.indexOf(tagFind);

        // eslint-disable-next-line no-param-reassign
        group[index].count += 1;
      }
    } else {
      group.push({
        tag: tags,
        count: 1,
      });
    }

    return group;
  }, []);

  const sortedAllTags = allTags.sort(
    (a: TagItem, b: TagItem) => b.count - a.count
  );

  return sortedAllTags;
}

export function getTagBySlug(slug: string) {
  const tags = getAllTags();

  const currentTag = tags.find((tag) => {
    return tag.tag === slug;
  });

  return currentTag;
}

export function getPostsByTag(tag: string, fields: string[] = []) {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  const filteredPosts = posts.filter((post) => {
    return post.tags === tag;
  });

  return filteredPosts;
}

export function getAllProjects(): ProjectItem[] {
  return projects.projects;
}
