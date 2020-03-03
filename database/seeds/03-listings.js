exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('listings').insert([
        {
          location: '123 Happy Lane, Sacramento, CA 91911',
          description: ' 5 acres of beautiful land waiting for you',
          price: 75,
          image: 'https://unsplash.com/photos/TcgASSD5G04',
          start_date: '08/23/20',
          end_date: '08/27/20',
          landowners_id: 1
        },

        {
          location: '121 Mountain Lane, Raleigh, NC, 23254',
          description: ' 7 acres of beautiful land waiting for you',
          price: 75,
          image: 'https://unsplash.com/photos/NhU0nUR7920',
          start_date: '09/15/20',
          end_date: '09/21/20',
          landowners_id: 2
        },

        {
          location: '456 Beach Ave, Pensacola, FL 32525',
          description: ' 5 acres of ocean view property waiting for you',
          price: 75,
          image: 'https://unsplash.com/photos/KMn4VEeEPR8',
          start_date: '04/23/20',
          end_date: '04/27/20',
          landowners_id: 3
        }
      ]);
    });
};
