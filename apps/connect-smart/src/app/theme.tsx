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
      color: '#39464e',
    },
    h5: {
      fontFamily: 'Montserrat',
      fontSize: '0.9rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: '#39464e',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 800,
    },
    body1: {
      fontFamily: 'Open Sans',
    },
    button: {
      fontFamily: 'Montserrat',
      fontSize: '0.8rem',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 0,
  },
  // Customisable props for each components
  // Eg: https://material-ui.com/api/button/
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
    MuiButtonBase: {
      disableRipple: true,
      color: 'contrastText',
    },
    MuiButton: {
      disableElevation: true,
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiIconButton: {
      size: 'small',
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
  // Overrides for each components, CSS section in doc.
  // Eg: https://material-ui.com/api/button/#css
  // .MuiButton-root, .MuiButton-containedPrimary
  // <Base>-<Rule-name>
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'uppercase',
      },
      containedPrimary: {
        textAlign: 'center',
      },
    },
    // MuiTextField: {
    //   root: {
    //     boxSizing: 'border-box',
    //     border: '1px solid #889095',
    //     padding: '0.5rem',
    //     borderRadius: '0.5rem',
    //   },
    // },
    // MuiFilledInput: {
    //   root: {
    //     backgroundColor: 'none',
    //   },
    // },
    MuiAlert: {
      root: {
        boxShadow:
          '0px 2px 4px rgba(0, 0, 0, 0.16), 0px 4px 8px rgba(0, 0, 0, 0.12), 0px 1px 16px rgba(0, 0, 0, 0.08)',
        borderRadius: '2px',
      },
      standardInfo: {
        backgroundColor: '#fff',
        color: ' #39464e',
        borderLeft: '4px solid #2D9CDB',
      },
      standardSuccess: {
        backgroundColor: '#fff',
        color: ' #39464e',
        borderLeft: '4px solid #27AE60',
      },
    },
    MuiTableHead: {
      root: {
        background: '#f6f6f6',
      },
    },
    MuiTableCell: {
      head: {
        fontWeight: 'bold',
      },
    },
    MuiCard: {
      root: {
        padding: '1rem 0.5rem 0.5rem 0.5rem',
        borderRadius: '0.5rem',
        border: '1px solid #889095',
      },
    },
    MuiDivider: {
      root: {
        margin: '2rem 0',
        borderTop: '3px dotted #97bb3a',
        backgroundColor: 'none',
      },
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
