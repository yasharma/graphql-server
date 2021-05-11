const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
      orders(status: String): [Order]
      order(id: String): Order
  }

  type Order {
      id: ID!
      deliveryAddress: String!
      items: [String!]!
      total: Float!
      discountCode: String
      comment: String
      status: Status!
  }

  type Mutation {
      updateStatus(id: ID, status: Status): Order
  }

  enum Status{
      PENDING
      PAID
      IN_PROGESS
      IN_DELIVERY
      DELIVERED
  }
`;

module.exports = typeDefs;
