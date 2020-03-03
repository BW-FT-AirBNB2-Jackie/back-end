const db = require('../database/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findListings,
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

function findListings(id) {
  return db('listings as l')
    .select(
      'l.id',
      'l.location',
      'l.description',
      'l.price',
      'l.image',
      'l.start_date',
      'l.end_date'
    )
    .join('landowners as ld', 'ld.id', 'l.landowners_id')
    .where('l.landowners_id', id);
}
