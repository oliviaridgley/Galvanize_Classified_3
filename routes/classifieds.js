'use strict';
const knex = require('../knex');
const express = require('express');
const router = express.Router();


//     1) GET /classifieds should return the id,title, description, price and item_image of all classifieds.

router.get('/', (req, res, next) => {
  knex('classifieds')
    .select("id", "title", "description", "price", "item_image")
    .then(results => {
      if (results.length === 0) {
        return res.send(404);
      }
      return res.status(200).send(results);
    })
    .catch(err => {
      next(err);
    });
});

//     2) GET /classifieds/:id should return the id,title, description, price and item_image of a single ad.

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  knex('classifieds')
    .where('classifieds.id', id)
    .select("id", "title", "description", "price", "item_image")
    .first()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      next(err);
    });
});

//     3) POST /classifieds should create a new ad and return the id, title, description, price and item_image that were created.

router.post("/", (req, res, next) => {
  const { title, description, price, item_image } = req.body;
  const newPost = { title, description, price, item_image };

  knex('classifieds')
    .insert(newPost, ['id', 'title', 'description', 'price', 'item_image'])
    .then(result => {
      res.status(200).send(result[0]);
    })
    .catch(err => {
      next(err);
    });
});

//     4) PATCH /classifieds/:id should update an ad and return the id, title, description, price and item_image that were updated.

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const { title, description, price, item_image } = req.body;
  const updatedPost = { title, description, price, item_image };

  knex('classifieds')
    .where("classifieds.id", id)
    .update(updatedPost, ['id', 'title', 'description', 'price', 'item_image'])
    .then(result => {
      res.status(200).send(result[0]);
    })
    .catch(err => {
      next(err);
    });
});

//     5) DELETE /classifieds/:id should delete an ad and return the id,title, description, price, and item_image that were deleted.

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  knex('classifieds')
    .where("classifieds.id", id)
    .del(['id', 'title', 'description', 'price', 'item_image'])
    .then(result => {
      res.status(200).send(result[0]);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
