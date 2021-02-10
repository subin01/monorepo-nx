import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';

import styles from './app.module.scss';

import { themeOptions, useStyles } from './mui-theme';

import Blog from './Blog/Blog';
const client = new ApolloClient({
  uri: 'https://fakeql.com/graphql/73d05b0dfa68b3bcd440a20f5ae2d929',
  // uri: 'https://graphqlzero.almansi.me/api',
  // uri: 'http://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

const theme = createMuiTheme(themeOptions);

export function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className={styles.app}>
          <AppBar position="fixed" color="secondary">
            <Toolbar className={classes.toolbar}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">Connect Smart</Typography>
              <div className={classes.menuIcons}>
                <SearchIcon />
                <NotificationsIcon />
                <PersonIcon />
              </div>
            </Toolbar>
          </AppBar>

          <main>
            <div style={{ marginTop: 80 }}>
              <Typography variant="h1">Welcome to connect-smart!</Typography>
              <Button color="primary" variant="contained" disableElevation>
                Primary
              </Button>
              <Button color="secondary" variant="contained" disableElevation>
                Secondary
              </Button>
            </div>
            <Blog></Blog>
          </main>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
