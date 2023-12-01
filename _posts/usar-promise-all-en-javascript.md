---
title: 'Usar Promise.all en Javascript'
description: 'Usar Promise.all en Javascript.'
date: '2023/12/01'
modified_date: '2023/12/01'
image: /assets/images/posts/js.png
subtitle: 'js'
tags: 'javascript'
---

Usar Promise.all en Javascript:

```js
// Slower
const users = await getUsers();
const books = await getBooks();

// Faster
const [users, books] = await Promise.all([
  getUsers(), getBooks()
]);
```
