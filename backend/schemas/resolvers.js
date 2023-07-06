const { User, Review } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find({});
        },
        reviews: async () => {
            return Review.find({});
        },
        roles: async (parent, args) => {
            return User.find({
                role: args.role
            });
        },

    },
}
module.exports = resolvers;