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
    "user": "$user-id-1"
  },
  {
    "user": "$user-id-2"
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
