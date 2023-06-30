const { User, Review } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find({});
        },
        reviews: async () => {
            return Review.find({});
        },
        
    },
}
module.exports = resolvers;