---
title: 'Usar Omit en Typescript'
description: 'Como usar Omit en Typescript.'
date: '2022/09/29'
modified_date: '2022/09/29'
image: /assets/images/posts/ts.png
subtitle: 'ts'
tags: 'typescript'
---

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UpdateUser = Omit<User, 'id'>;

const updateUser: UpdateUser = {
  name: "Cristh",
  email: "user@email.com"
}

```
