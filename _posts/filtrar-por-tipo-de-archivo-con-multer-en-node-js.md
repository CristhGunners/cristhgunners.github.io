---
title: 'Filtrar por tipo de archivo con Multer en Node JS'
description: 'Como Filtrar por tipo de archivo con Multer en Node JS.'
date: '2024/05/14'
modified_date: '2024/05/14'
image: /assets/images/posts/js.png
subtitle: 'js'
tags: 'javascript'
---

Como filtrar por tipo de archivo con Multer en Node JS:

```ts
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback
): void => {
  if (file.mimetype === "image/svg") {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

multer({
  ...,
  fileFilter: fileFilter,
});
```
