import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_USER = gql`
  query {
    user(id: 1) {
      id
      firstname
      age
    }
  }
`;

export default function Blog() {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: 1 },
  });
  if (loading) return <p>Loading ...</p>;
  return (
    <>
      <h1>Hello {data.user.firstname}!</h1>
      <pre>{JSON.stringify(data)}</pre>
      <p>from https://www.fakeql.com/</p>
    </>
  );
}
