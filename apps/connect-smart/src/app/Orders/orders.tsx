import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date', headerName: 'date', width: 160 },
  { field: 'name', headerName: 'First name', width: 230 },
  { field: 'shipTo', headerName: 'Last name', width: 230 },
  {
    field: 'paymentMethod',
    headerName: 'Payment Method',
    type: 'number',
    width: 190,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 190,
  },
];

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99
  ),
  createData(
    2,
    '16 Mar, 2019',
    'Tom Scholz',
    'Boston, MA',
    'MC ⠀•••• 1253',
    100.81
  ),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
    width: '30%',
    display: 'flex',
    justifyContent: 'space-between',
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

export default function Orders() {
  const classes = useStyles();
  return (
    <Box
      borderTop={4}
      borderColor="primary.main"
      bgcolor="primary.contrastText"
      my={2}
      p={2}
      width="100%"
    >
      <div className={classes.searchBar}>
        <Typography variant="h3">Search</Typography>
        <Select defaultValue="Orders">
          <MenuItem value="Orders">Orders</MenuItem>
          <MenuItem value="Quotes">Quotes</MenuItem>
        </Select>
        <Input
          type="search"
          placeholder="Order number..."
          fullWidth
          margin="none"
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Button color="primary" variant="contained" onClick={preventDefault}>
          Primary
        </Button>
        <Button color="secondary" variant="contained" disableElevation>
          Secondary
        </Button>
        <Button color="secondary" variant="outlined" disableElevation>
          Tertiary
        </Button>
      </div>
    </Box>
  );
}
