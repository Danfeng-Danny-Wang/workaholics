const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    company: Company
  }

  type Company {
    _id: ID
    name: String
    code: String
    chatRooms: [Room]
  }

  type Room {
    _id: _id
    name: String
    messages: [Message]
  }

  type Message {
    _id: _id
    username: String
    text: String
    timeStamp: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    company(chatRooms: [Room]): Company
    room(messages: [Message]): Room
    message: Message
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!, company: String!): Auth
    getCompany(name: String!, code: String!): Company
    addMessage(name: String!, text: String, timeStamp: String): Message
  }

`;

module.exports = typeDefs;