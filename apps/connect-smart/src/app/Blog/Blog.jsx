import React, { useRef } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

const GET_LAUNCHES = gql`
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
const GET_POSTS = gql`
  query($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        user {
          name
        }
      }
    }
  }
`;

const ADD_POST = gql`
  mutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

export default function Blog() {
  const [createPost, { createData }] = useMutation(ADD_POST);
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: {
      options: {
        sort: {
          field: 'id',
          order: 'DESC',
        },
        paginate: {
          page: 1,
          limit: 5,
        },
      },
    },
  });

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    createPost({
      variables: {
        input: {
          title: inputRef.current.value,
          body: 'Some interesting content.',
        },
      },
    });
  };

  if (loading)
    return (
      <article style={{ width: '100%' }}>
        <h1>Loading ...</h1>
      </article>
    );
  return (
    <>
      <h1 style={{ width: '100%' }}>Posts</h1>
      <article>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>
            <input ref={inputRef} />
            <button type="submit">Add</button>
          </h2>
        </form>
      </article>
      {data.posts.data.map((l) => (
        <article key={l.id}>
          <h2>{l.title}</h2>
          <em>By {l.user.name}</em>
        </article>
      ))}
      {/* <pre>{JSON.stringify(data)}</pre> */}
    </>
  );
}
