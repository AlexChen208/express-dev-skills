const skills = [
    {id: 125223, todo: 'Learn HTML', done: true},
    {id: 127904, todo: 'Learn CSS', done: true},
    {id: 129608, todo: 'Learn JavaScript', done: true},
    {id: 131464, todo: 'Learn Express', done: false},
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }