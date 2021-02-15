import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
import { themeOptions, useStyles } from './theme';
import Orders from './Orders/orders';
import Blog from './Blog/Blog';
import { Maps } from '@primary-connect/maps';

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
              <img src="../assets/pc-logo.png" />
              <div className={classes.menuIcons}>
                <SearchIcon />
                <NotificationsIcon />
                <PersonIcon />
              </div>
            </Toolbar>
          </AppBar>

          <main>
            <div style={{ marginTop: 80, width: '100%' }}>
              <Grid container>
                <Grid item xs={12}>
                  <Orders></Orders>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h1">Heading 1</Typography>
                  <Typography variant="h2">Heading 2</Typography>
                  <Typography variant="h3">Heading 3</Typography>
                  <Typography variant="h4">Heading 4</Typography>
                  <Typography variant="h5">Heading 5</Typography>
                  <Typography variant="h6">Heading 6</Typography>
                </Grid>

                <Grid item xs={12}>
                  <Blog></Blog>
                </Grid>

                <Grid item xs={12}>
                  <Maps location="Perth" />
                </Grid>
              </Grid>
            </div>
          </main>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
