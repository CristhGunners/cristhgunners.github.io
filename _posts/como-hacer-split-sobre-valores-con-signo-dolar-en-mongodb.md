---
title: 'Como hacer split sobre valores con signo dólar en MongoDB'
description: 'Como hacer split sobre valores con signo dólar en MongoDB.'
date: '2022/12/09'
modified_date: '2022/12/09'
image: /assets/images/posts/mongodb.png
subtitle: 'mongodb'
tags: 'mongodb'
---

Como hacer split sobre valores con signo dólar en MongoDB.

Data:

```json
[
  {
    "user": "user_id$user-id-1"
  },
  {
    "user": "user_$user-id-2"
  }
]
```

Query :

```js
db.collection.aggregate([
  {
    $addFields: {
      user_id: {
        $arrayElemAt: [
          {
            $split: [
              "$user",
              {
                $literal: "$",
              },
            ],
          },
          1,
        ],
      }
    }
  }
])
```

Resultado:

```json
[
  {
    "user_id": "user-id-1"
  },
  {
    "user_id": "user-id-2"
  }
]
```
