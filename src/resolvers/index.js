const db = require("../db/models");
const { hasRights } = require("../helpers/auth");

module.exports = {
  Query: {
    async getCountries(parent, args, context) {
      const { token } = context;
      if (!hasRights(token, "master")) throw new Error("Unauthorized");
      return await db.Country.findAll();
    },

    async getRegions(parent, args, context) {
      const { token } = context;
      if (!hasRights(token, "master")) throw new Error("Unauthorized");
      return await db.Region.findAll({ where: { countryId: args.countryId } });
    },
  },

  Mutation: {
    async addCountry(parent, args, context) {
      const { token } = context;
      if (!hasRights(token, "master")) throw new Error("Unauthorized");

      const { code, name } = args;
      try {
        const country = await db.Country.create({
          code,
          name,
        });
        return country;
      } catch (error) {
        console.log(error);
        if (error.name === "SequelizeValidationError")
          throw new Error("Validation failed");
        else if (error.name === "SequelizeUniqueConstraintError")
          throw new Error("Code/Name already exists");
        else throw new Error(error.message);
      }
    },

    async addRegion(parent, args, context) {
      const { token } = context;
      if (!hasRights(token, "master")) throw new Error("Unauthorized");

      const { countryId, name } = args;
      try {
        const country = await db.Country.findByPk(countryId);
        if (!country)
          throw new Error(`Country with code ${countryId} not found`);

        // check uniqness of region name for the given country
        const uniqueCheck = await db.Region.findOne({
          where: {
            name,
            countryId,
          },
        });

        if (uniqueCheck) throw new Error("Region already exist");

        const region = await db.Region.create({
          countryId,
          name,
        });
        return region;
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }
    },
  },

  Country: {
    async __resolveReference(country) {
      return await db.Country.findByPk(country.code);
    },
  },

  Region: {
    async __resolveReference(region) {
      return await db.Region.findByPk(region.id);
    },
  },
};
