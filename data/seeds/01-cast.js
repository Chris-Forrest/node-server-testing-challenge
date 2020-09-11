
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ventureBros').del()
    .then(function () {
      // Inserts seed entries
      return knex('ventureBros').insert([
        {name: "Thaddeus Venture"},
        {name: "Brock Sampson"},
        {name: "Dean Venture"},
        {name: "Hank Venture"},
        {name: "H.E.L.P.eR."}
      ]);
    });
};
