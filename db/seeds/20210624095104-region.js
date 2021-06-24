const table = 'Region'
const createdAt = new Date()
const updatedAt = new Date()
const data = [
  { id: '508b24b4-0aa2-4cf8-b84b-ef1592bfae1c', name: 'Saxony', countryId: '276', createdAt, updatedAt },
  { id: '6dabacc4-b020-4b77-8386-dbccc48ed4ef', name: 'Westphalia', countryId: '276', createdAt, updatedAt },
  { id: '6b40499d-2a8a-4281-a242-2b1c0f3e3012', name: 'Bavaria', countryId: '276', createdAt, updatedAt},
  { id: '865fdd9f-f892-4985-aa2a-2e3a3c36caf1', name: 'Dobrudja', countryId: '100', createdAt, updatedAt},
  { id: 'c0726f5f-666f-4eac-944b-4e0abe46ce4f', name: 'Northern Trache', countryId: '100', createdAt, updatedAt},
  { id: 'd9423a9d-ff8d-4e81-8247-7baa88a8dd3c', name: 'The Rhodopes', countryId: '100', createdAt, updatedAt},
  { id: '4b80a0ba-54b7-4e05-8da2-595659f28990', name: 'Amazon', countryId: '076', createdAt, updatedAt},
  { id: '3090a826-3226-4547-bc7a-8052f196e862', name: 'Cerrado', countryId: '076', createdAt, updatedAt},
  { id: '51acc4d6-5307-434a-99a1-4e3b41caf624', name: 'Atlantic forest', countryId: '076', createdAt, updatedAt},
  { id: '8fe8e66d-197d-4fb1-a513-7db262200454', name: 'Pacific', countryId: '840', createdAt, updatedAt},
  { id: 'e9513ad4-04a7-4c54-9178-c781d9d8385b', name: 'Mountain', countryId: '840', createdAt, updatedAt},
  { id: '53ca03f9-a229-4de2-aef4-7d3bea7c34e3', name: 'Southeast', countryId: '840', createdAt, updatedAt},
  { id: '5decf6e6-2a2a-4ecb-827f-e4616dd8cbfb', name: 'Queensland', countryId: '036', createdAt, updatedAt},
  { id: '6da8d1a1-4c02-4464-9900-4fca4b96b536', name: 'Western Australia', countryId: '036', createdAt, updatedAt},
  { id: '68c56c41-86a2-498f-9279-bc8712c21352', name: 'New South Wales', countryId: '036', createdAt, updatedAt},
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(table, data, {})
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete(table, null, {})
  }
}
