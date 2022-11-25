---
title: 'Renombrar campos cuando se usa Object Destructuring'
description: 'Como Renombrar campos cuando se usa Object Destructuring.'
date: '2022/11/24'
modified_date: '2022/11/24'
image: /assets/images/posts/js.png
subtitle: 'js'
tags: 'javascript'
---

Como renombrar campos cuando se usa Object Destructuring :

```js
const person = {
  name: 'John',
  lastName: 'Doe'
};

const { name: firstName, lastName } = person;

// 👇️ 'John'
console.log(firstName);
// 👇️ 'Doe'
console.log(lastName);
```
