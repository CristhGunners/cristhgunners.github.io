---
title: 'Compacta números en Javascript'
description: 'Compacta números en Javascript.'
date: '2023/05/14'
modified_date: '2023/05/14'
image: /assets/images/posts/js.png
subtitle: 'js'
tags: 'javascript'
---

Compacta números en Javascript:

```js
const formatter = Intl.NumberFormat('en', {
	notation: 'compact'
});

console.log(formatter.format(123)); // 123
console.log(formatter.format(1234)); // 1.2K
console.log(formatter.format(1234567)); // 1.2M
console.log(formatter.format(12345678901)); // 12B
```
