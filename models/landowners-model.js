const db = require('../database/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function find() {
  return db('landowners').select('id', 'username', 'email');
}

function findBy(filter) {
  return db('landowners').where(filter);
}

async function add(user) {
  const [id] = await db('landowners').insert(user, 'id');
  return findById(id);
}

function findById(id) {
  return db('landowners')
    .select('id', 'username')
    .where({ id })
    .first();
}

function update(id, user) {
  return db('landowners')
    .where('id', Number(id))
    .update(user);
}

function remove(id) {
  return db('landowners')
    .where('id', Number(id))
    .del();
}
