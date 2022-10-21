---
title: 'Usar union type en Typescript'
description: 'Como usar union type en Typescript.'
date: '2022/10/20'
modified_date: '2022/10/20'
image: /assets/images/posts/ts.png
subtitle: 'ts'
tags: 'typescript'
---

```ts
type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

function example(method: HttpMethod, url: string): void {
  console.log(`${method}: ${url}`);
}
```
