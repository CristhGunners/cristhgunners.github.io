---
title: 'Convertir un Enum en Array en Typescript'
description: 'Como convertir un Enum en Array en Typescript.'
date: '2022/12/07'
modified_date: '2022/12/07'
image: /assets/images/posts/ts.png
subtitle: 'ts'
tags: 'typescript'
---

```ts
enum StringEnum {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
}

const keys = Object.keys(StringEnum);
// 👇️ ['Small', 'Medium', 'Large']
console.log(keys);

const values = Object.values(StringEnum);
// 👇️ ['S', 'M', 'L']
console.log(values);
```
