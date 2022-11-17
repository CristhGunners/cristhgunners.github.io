---
title: 'Eliminar duplicados en un Array en Javascript'
description: 'Como eliminar duplicados en un Array en Javascript.'
date: '2022/11/16'
modified_date: '2022/11/16'
image: /assets/images/posts/js.png
subtitle: 'js'
tags: 'javascript'
---

```js
const numbers = [5, 10, 5, 20];
const withoutDuplicates = Array.from(new Set(numbers));

// [5, 10, 20] 👇
console.log(withoutDuplicates);
```
