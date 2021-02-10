import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles } from '@material-ui/core/styles';

export const themeOptions: ThemeOptions = {
  themeName: 'Primary Connect',
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
      fontSize: '4rem',
      fontWeight: 800,
    },
    h3: {
      fontFamily: 'Open Sans',
    },
    body1: {
      fontFamily: 'Open Sans',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#689f38',
        color: '#fff',
      },
    },
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
    MuiButton: {
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
