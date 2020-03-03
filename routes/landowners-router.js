const router = require('express').Router();

const Landowners = require('../models/landowners-model');

router.get('/', (req, res) => {
  Landowners.find()
    .then(landowners => {
      res.status(200).json(landowners);
    })
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  if (!id) {
    res
      .status(404)
      .json({ message: 'The landowner with the specified id does not exist.' });
  } else {
    Landowners.findById(id)
      .then(landowner => {
        res.status(200).json(landowner);
      })
      .catch(err => {
        res.status(500).json({
          message: 'The landowner information could not be retrieved.'
        });
      });
  }
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  if (!id) {
    res
      .status(404)
      .json({ message: 'The landowner with the specified ID does not exist.' });
  }
  Landowners.remove(id)
    .then(landowner => {
      res.json(landowner);
    })
    .catch(err => {
      res.status(500).json({ message: 'The landowner could not be removed' });
    });
});

router.get('/:id/listings', (req, res) => {
  const { id } = req.params;

  Landowners.findListings(id)
    .then(listings => {
      if (listings.length) {
        res.json(listings);
      } else {
        res.status(404).json({ message: 'Could not find listings' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get listings' });
    });
});

module.exports = router;
