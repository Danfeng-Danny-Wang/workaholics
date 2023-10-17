import { gql } from '@apollo/client';

export const QUERY_USER = gql`

`;

export const QUERY_COMPANIES = gql`
query companies {
  companies {
    name
    chatRooms
  }
}
`;

export const QUERY_COMPANY_ROOMS = gql`
query companies {
  companies {
    name
    rooms
  }
}
`;