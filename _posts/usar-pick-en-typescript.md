---
title: 'Usar Pick en Typescript'
description: 'Como usar Pick en Typescript.'
date: '2022/09/20'
modified_date: '2022/09/20'
image: /assets/images/posts/ts.png
subtitle: 'ts'
tags: 'typescript'
---

```ts
interface Credentials {
  name: string;
  email: string;
  password: string;
}

type LoginUser = Pick<Credentials, 'email' | 'password'>;
type ResetUser = Pick<Credentials, 'email'>;
```
