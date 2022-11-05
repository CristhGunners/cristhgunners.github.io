---
title: 'Convertir String con comas en Array en Javascript'
description: 'Como Convertir String con comas en Array en Javascript.'
date: '2022/11/04'
modified_date: '2022/11/04'
image: /assets/images/posts/js.png
subtitle: 'js'
tags: 'javascript'
---

Como convertir String con comas en Array en Javascript :

```js
const str = 'javascript,typescript,html,css,python,ruby';

const arr = str.split(',');

// 👇️ ['javascript', 'typescript', 'html', 'css', 'python', 'ruby']
console.log(arr);
```
