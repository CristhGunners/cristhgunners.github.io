---
title: 'Eliminar espacios en blanco de un string en Javascript'
description: 'Como eliminar espacios en blanco de un string en Javascript.'
date: '2022/09/30'
modified_date: '2022/09/30'
image: /assets/images/posts/js.png
subtitle: 'js'
tags: 'javascript'
---

```js
const hello = "     Hello World!    ";

hello.trim();       // return "Hello World!"
hello.trimStart();  // return "Hello World!    "
hello.trimEnd();    // return "     Hello World!"
```
