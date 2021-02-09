import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      rocket {
        rocket_name
      }
    }
  }
`;

export const GET_POSTS = gql`
  query {
    posts(sort: "id", dir: "desc") {
      id
      title
      date
    }
  }
`;

export const ADD_POST = gql`
  mutation($input: CreatePostInput!) {
    createPost(input: $input) {
      title
      date
    }
  }
`;
