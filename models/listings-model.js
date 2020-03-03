const db = require('../database/dbConfig.js');
module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db('listings');
}

function findById(id) {
  return db('listings')
    .where({ id })
    .first();
}

function add(post) {
  return db('listings')
    .insert(post, 'id')
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('listings')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('listings')
    .where({ id })
    .del();
}
