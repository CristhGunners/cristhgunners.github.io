---
title: 'Selección de elementos con valores de atributos separados por guiones en CSS'
description: 'Selección de elementos con valores de atributos separados por guiones en CSS.'
date: '2023/04/24'
modified_date: '2023/04/24'
image: /assets/images/posts/css.png
subtitle: 'css'
tags: 'css'
---

Selección de elementos con valores de atributos separados por guiones en CSS:

```html
<div lang="en-US">Hello, world!</div>
```

```css
div[lang|="en"] {
    /* Styles for elements with lang attribute starting with "en" followed by a hyphen */
}
```
