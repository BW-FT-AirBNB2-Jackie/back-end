const db = require('../database/dbConfig.js');
module.exports = {
  get,
  getById,
  add,
  update,
  remove
};

function get() {
  return db('listings');
}

function getById(id) {
  return db('listings')
    .where({ id })
    .first();
}

function add(post) {
  return db('listings')
    .insert(post)
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
