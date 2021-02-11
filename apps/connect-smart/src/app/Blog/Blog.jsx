import React, { useRef } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
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
      <Box
        border={1}
        borderColor="secondary.main"
        bgcolor="primary.contrastText"
        borderRadius={4}
        my={2}
        p={2}
        style={{ width: '100%' }}
      >
        <Typography variant="h1">Loading ...</Typography>
      </Box>
    );
  return (
    <>
      <Typography variant="h1" style={{ width: '100%' }}>
        Posts
      </Typography>
      <Box
        border={1}
        borderColor="secondary.main"
        bgcolor="primary.contrastText"
        borderRadius={4}
        my={2}
        p={2}
        width={1 / 4}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>
            <input ref={inputRef} />
            <button type="submit">Add</button>
          </h2>
        </form>
      </Box>
      {data?.posts?.map((l) => (
        <Box
          border={1}
          borderColor="secondary.main"
          bgcolor="primary.contrastText"
          borderRadius={4}
          my={2}
          p={2}
          width={1 / 4}
          key={l.id}
        >
          <em>{l.id}</em>
          <h2>{l.title}</h2>
          <p>{l.date}</p>
        </Box>
      ))}
      {/* <pre>{JSON.stringify(data)}</pre> */}
    </>
  );
}
