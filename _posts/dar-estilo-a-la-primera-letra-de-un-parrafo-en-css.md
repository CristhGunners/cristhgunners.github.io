---
title: 'Dar estilo a la primera letra del primer párrafo de un texto en CSS'
description: 'Dar estilo a la primera letra del primer párrafo de un texto en CSS.'
date: '2022/11/21'
modified_date: '2022/11/21'
image: /assets/images/posts/css.png
subtitle: 'css'
tags: 'css'
---

Dar estilo a la primera letra del primer párrafo de un texto en CSS :

```css
p:first-child::first-letter {
  font-size: 26px;
  font-weight: bold;
  font-style: italic;
}
```
