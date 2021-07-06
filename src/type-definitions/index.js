const { gql } = require('apollo-server')

module.exports = gql`
  extend type Query {
    getCountries: [Country]
    getRegions(countryId: ID): [Region]
  }

  extend type Mutation {
    addCountry(code: String!, name: String!): Country
    addRegion(countryId: String!, name: String!): Region
  }

  type Country @key(fields: "code") {
    code: ID
    name: String
  }

  type Region @key(fields: "id") {
    id: ID!
    name: String!
    countryId: ID!
  }
`