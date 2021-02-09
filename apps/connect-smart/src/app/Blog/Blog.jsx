import React, { useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_POSTS, ADD_POST } from '../graphql/queries';

export default function Blog() {
  const [createPost, { createData }] = useMutation(ADD_POST);
  const { loading, error, data } = useQuery(GET_POSTS, {});

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    createPost({
      variables: {
        input: {
          title: inputRef.current.value,
          user_id: '1',
          date: '2019-10-10',
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
      {data?.posts?.map((l) => (
        <article key={l.id}>
          <em>{l.id}</em>
          <h2>{l.title}</h2>
          <p>{l.date}</p>
        </article>
      ))}
      {/* <pre>{JSON.stringify(data)}</pre> */}
    </>
  );
}
