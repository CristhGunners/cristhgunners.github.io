---
title: 'Generar un String aleatorio en Javascript'
description: 'Generar un String aleatorio en Javascript.'
date: '2023/03/06'
modified_date: '2023/03/06'
image: /assets/images/posts/js.png
subtitle: 'js'
tags: 'javascript'
---

Generar un string aleatorio en Javascript:

```js
const randomString = () => Math.random().toString(36).slice(2)

randomString() // f4rqtdegpi9
randomString() // vbnixv40rfv
randomString() // yuilv1pm4y5
```
