
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ventureBros').del()
    .then(function () {
      // Inserts seed entries
      return knex('ventureBros').insert([
        {id:1 ,name: "Thaddeus Venture"},
        {id:2 ,name: "Brock Sampson"},
        {id:3 ,name: "Dean Venture"},
        {id:4 ,name: "Hank Venture"},
        {id:5 ,name: "H.E.L.P.eR."}
      ]);
    });
};
