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

  type Message {
    username: String
    text: String
    timeStamp: String
  }

  input MessageInput {
    username: String
    text: String
    timeStamp: String
  }

  type Room {
    _id: ID
    name: String
    messages: [Message]
  }

  type Company {
    _id: ID
    name: String
    code: String
    chatRooms: [Room]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    company(chatRooms: String): Company
    room(messages: String): Room
    message: [Message]
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!, company: String!): Auth
    getCompany(name: String!, code: String!): Company
    addMessage(messageData: MessageInput!): Room
  }

`;

module.exports = typeDefs;