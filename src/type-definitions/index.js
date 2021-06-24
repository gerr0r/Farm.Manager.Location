const { gql } = require('apollo-server')

module.exports = gql`
  extend type Query {
    getCountries: [Country]
    getRegions(countryId: ID): [Region]
  }

  type Country @key(fields: "code") {
    code: ID!
    name: String!
  }

  type Region @key(fields: "id") {
    id: ID!
    name: String!
    countryId: ID!
  }
`