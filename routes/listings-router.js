const express = require('express');

const Listings = require('../models/listings-model');

const router = express.Router();

//Global GET
router.get('/', (req, res) => {
  Listings.get()
    .then(listings => {
      res.json(listings);
    })
    .catch(() => {
      res.status(500).json({ message: 'failed to get listings' });
    });
});

//GET by id
router.get('/:id', (req, res) => {
  Listings.getById
    .then(listing => {
      if (listing) {
        res.json(listing);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find listing with given id.' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get listings' });
    });
});

//POST
router.post('/', (req, res) => {
  listingData = req.body;

  Listings.add(listingData)
    .then(listing => {
      res.status(201).json(listing, id);
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to create new listing' });
    });
});

//PUT by id
router.put('/:id', (req, res) => {
  Listings.update(req.params.id, req.body)
    .then(update => {
      res.status(201).json(update, id);
    })
    .catch(() => {
      res.status(500).json({ message: 'failed to update listing' });
    });
});

//DELETE by id
router.delete('/:id', (req, res) => {
  Listings.delete(req.params.id)
    .then(deleted => {
      res.status(200).json({ message: 'listing deleted' });
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to delete listing' });
    });
});

module.exports = router;
