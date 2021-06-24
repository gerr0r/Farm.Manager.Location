const db = require('../db/models')
const { hasRights } = require('../helpers/auth')

module.exports = {
    Query: {
        async getCountries(parent, args, context) {
            const { token } = context
            if (!hasRights(token, 'master')) throw new Error('Unauthorized')
            return await db.Country.findAll()
        },
        async getRegions(parent, args, context) {
            const { token } = context
            if (!hasRights(token, 'master')) throw new Error('Unauthorized')
            return await db.Region.findAll({where: {countryId: args.countryId}})
        }
    },

    Country: {
        async __resolveReference(country) {
            return await db.Country.findByPk(country.code)
        }
    },

    Region: {
        async __resolveReference(region) {
            return await db.Region.findByPk(region.id)
        }
    }
}