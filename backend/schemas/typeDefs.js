const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
_id: ID!
username: String!
email: String!
password: String!
reviews: [Review]!
role: String!
focus: String!
}

type Review {
    _id: ID
    reviewText: String
    reviewAuthor: String
    createdAt: String
  }

type Auth {
    token: ID!
    user: User
  }

type Query {
users: [User]
reviews: [Review]
roles(role: String!): [User]
focuses(focus: String!): [User]

}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReview(reviewText: String!): User
    removeReview(reviewId: ID!): User
  }
`;
module.exports = typeDefs;