import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query User {
  user {
    username
  }
}
`;

export const QUERY_COMPANIES = gql`
query Companies {
  companies {
    name
    chatRooms {
      name
    }
  }
}
`;