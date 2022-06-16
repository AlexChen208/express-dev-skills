const skills = [
    {id: 125223, skill: 'Learn HTML', done: true},
    {id: 127904, skill: 'Learn CSS', done: true},
    {id: 129608, skill: 'Learn JavaScript', done: true},
    {id: 131464, skill: 'Learn Express', done: false},
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
  }

  function create(skill) {
    skill.id = Date.now() % 1000000
    skill.done = false
    skills.push(skill)
  }
  
  function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }

  function update(editContent, id) {
    id = parseInt(id)
    const skillUpdate = skills.find(skill => skill.id === id)
    skillUpdate.skill = editContent.skill
  }