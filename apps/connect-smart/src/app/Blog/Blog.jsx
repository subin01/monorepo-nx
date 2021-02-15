import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { useQuery, useMutation } from '@apollo/client';
import { GET_POSTS, ADD_POST } from '../graphql/queries';

const useStyles = makeStyles((theme) => ({
  nowrap: {
    whiteSpace: 'nowrap',
  },
  searchBar: {
    display: 'flex',
    justifyContent: 'left',
    marginBottom: theme.spacing(3),
    width: '50%',

    '& > *': {
      marginRight: theme.spacing(3),
    },
  },
}));

export default function Blog() {
  const classes = useStyles();
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
        borderTop={4}
        borderColor="secondary.main"
        bgcolor="primary.contrastText"
        my={2}
        p={2}
        width="100%"
      >
        <Typography variant="h3">Loading ...</Typography>
      </Box>
    );
  return (
    <Box
      borderTop={4}
      borderColor="primary.main"
      bgcolor="primary.contrastText"
      my={2}
      p={2}
      width="100%"
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <Box my={2} width="100%" className={classes.searchBar}>
          <Typography variant="h3">Posts</Typography>
          <Input ref={inputRef} placeholder="Enter title" />
          <Button color="primary" variant="contained" type="submit">
            Add
          </Button>
        </Box>
      </form>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>User</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.posts?.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.id}</TableCell>
              <TableCell>{p.title}</TableCell>
              <TableCell className={classes.nowrap}>{p.date}</TableCell>
              <TableCell>{p.user.firstname}</TableCell>
              <TableCell align="right">{p.user.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
