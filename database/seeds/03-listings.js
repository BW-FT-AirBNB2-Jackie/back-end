exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('listings').insert([
        {
          location: '123 Happy Lane, Sacramento, CA 91911',
          description: ' 5 acres of beautiful land waiting for you',
          price: 75,
          image:
            'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          start_date: '08/23/20',
          end_date: '08/27/20',
          landowners_id: 1
        },

        {
          location: '121 Mountain Lane, Raleigh, NC, 23254',
          description: ' 7 acres of beautiful land waiting for you',
          price: 75,
          image:
            'https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
          start_date: '09/15/20',
          end_date: '09/21/20',
          landowners_id: 2
        },

        {
          location: '456 Beach Ave, Pensacola, FL 32525',
          description: ' 5 acres of ocean view property waiting for you',
          price: 75,
          image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
          start_date: '04/23/20',
          end_date: '04/27/20',
          landowners_id: 3
        }
      ]);
    });
};
