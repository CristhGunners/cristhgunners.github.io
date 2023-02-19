---
title: 'Ordenar Array de Objectos con valor Booleano en Javascript'
description: 'Como ordenar Array de Objectos con valor Booleano en Javascript.'
date: '2023/02/19'
modified_date: '2023/02/19'
image: /assets/images/posts/js.png
subtitle: 'js'
tags: 'javascript'
---

Como ordenar Array de Objectos con valor Booleano en Javascript:

```js
const users = [
  { "name": "john", "subscribed": false },
  { "name": "jane", "subscribed": true },
  { "name": "jean", "subscribed": false },
  { "name": "george", "subscribed": true },
  { "name": "jelly", "subscribed": true },
  { "name": "john", "subscribed": false }
];
const subscribedUsersFirst = users.sort((a, b) => Number(b.subscribed) - Number(a.subscribed));

// Output
console.log(subscribedUsersFirst);
/*
[{
  name: "jane",
  subscribed: true
}, {
  name: "george",
  subscribed: true
}, {
  name: "jelly",
  subscribed: true
}, {
  name: "john",
  subscribed: false
}, {
  name: "jean",
  subscribed: false
}, {
  name: "john",
  subscribed: false
}]
*/
```
