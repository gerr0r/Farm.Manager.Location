const table = 'Country'
const date = new Date()
const data = [{
    code: '276',
    name: 'Germany',
    createdAt: date,
    updatedAt: date
  }, {
    code: '100',
    name: 'Bulgaria',
    createdAt: date,
    updatedAt: date
  }, {
    code: '076',
    name: 'Brazil',
    createdAt: date,
    updatedAt: date
  }, {
    code: '840',
    name: 'USA',
    createdAt: date,
    updatedAt: date
  }, {
    code: '036',
    name: 'Australia',
    createdAt: date,
    updatedAt: date
}]

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return await queryInterface.bulkInsert(table, data, {})
  },
  down: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkDelete(table, null, {})
  }
}
