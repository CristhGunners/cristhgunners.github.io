---
title: 'Ordenar Array de string Alfabéticamente en Javascript'
description: 'Como ordenar Array de string Alfabéticamente en Javascript.'
date: '2023/02/17'
modified_date: '2023/02/17'
image: /assets/images/posts/js.png
subtitle: 'js'
tags: 'javascript'
---

Como ordenar Array de string Alfabéticamente en Javascript:

```js
const words = ["javascript", "typescript", "python", "ruby", "swift", "go", "clojure"];
const sorted = words.sort((a, b) => a.localeCompare(b));

// Output
console.log(sorted); // ['clojure', 'go', 'javascript', 'python', 'ruby', 'swift', 'typescript']
```
