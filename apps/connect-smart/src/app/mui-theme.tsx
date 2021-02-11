import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles } from '@material-ui/core/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#97bb3a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#5b6288',
    },
    background: {
      default: '#e5e5e5',
    },
    text: {
      primary: '#39464e',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    fontWeightRegular: 400,
    h1: {
      fontFamily: 'Montserrat',
      fontSize: '2rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: '#39464e',
    },
    h2: {
      fontFamily: 'Montserrat',
      fontSize: '1.7rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: '#39464e',
    },
    h3: {
      fontFamily: 'Montserrat',
      fontSize: '1.4rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: '#39464e',
    },
    h4: {
      fontFamily: 'Montserrat',
      fontSize: '1.2rem',
      fontWeight: 800,
      textTransform: 'uppercase',
    },
    body1: {
      fontFamily: 'Open Sans',
    },
    button: {
      fontFamily: 'Montserrat',
      fontSize: '1rem',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 0,
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
    MuiButtonBase: {
      disableRipple: true,
      color: '#fff',
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
  },
};

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuIcons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '7rem',
  },
}));
