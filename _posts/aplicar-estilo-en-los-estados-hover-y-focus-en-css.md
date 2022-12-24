---
title: 'Aplicar estilo en los estados hover y focus en CSS'
description: 'Aplicar estilo en los estados hover y focus en CSS'
date: '2022/12/24'
modified_date: '2022/12/24'
image: /assets/images/posts/css.png
subtitle: 'css'
tags: 'css'
---

Aplicar estilo en los estados hover y focus en CSS:

```css
button {
  background-color: #00aced;
}

button:is(:hover, :focus) {
  background-color: #0074a1;
}
```
