import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        username
        password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $company: String!) {
    addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, company: $company) {
      token
      user {
        firstName
        lastName
        username
        email
        password
        company 
      }
    }
  }
`;

export const VERIFY_CONPANY_CODE = gql`
  mutation verifyCompanyCode($name: String!, $code: String!) {
    verifyCompanyCode(name: $name, code: $code) {
      name
      code
    }
  }
`;
