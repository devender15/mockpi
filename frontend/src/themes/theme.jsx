import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'Roboto',
      'Noto Sans',
      'Nexa Heading',
      'Nexa Light',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Nexa Heading',
      fontSize: '40pt',
    },
    body1: {
      fontFamily: 'Open Sans',
      fontSize: '24pt',
    },
    button: {
      fontFamily: 'Nexa Light',
      fontSize: '24pt',
      textTransform: 'none',
    },
  },
  overrides: {
    MuiAppHeader: {
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white',
    },
    MuiButton: {
      root: {
        margin: '10px',
      },
      text: {
        backgroundColor: '#F2F2F2',
        fontSize: '24px',
        color: '#000000',
        padding: '16px 30px',
        border: 'none',
        boxShadow: '6px 0px 6px 0px rgba(0,0,0,0.16)',
        borderRadius: '10px 10px 0 0',
        marginLeft: '10px',
        cursor: 'pointer',
      },
      containedPrimary: {
        backgroundColor: '#4500F4',
        color: '#fff',
      },
    },
    MuiTab: {
      root: {
        minWidth: '100px',
        '&:hover': {
          backgroundColor: '#F2F2F2',
        },
      },
      wrapper: {
        textTransform: 'none',
        fontSize: '24px',
        fontWeight: 600,
      },
      selected: {
        backgroundColor: '#4500F4',
        color: '#fff',
      },
    },
    MuiTabs: {
      root: {
        flexGrow: 1,
      },
    },
    MuiBox: {
      root: {
        backgroundColor: '#fff',
        border: 'solid 5px #4500F4',
        borderRadius: '40px',
        minHeight: '400px',
        boxShadow: '6px 0px 6px 0px rgba(0,0,0,0.16)',
        padding: '30px',
        minHeight: '300px',
      },
    },
  }    
});

export default customTheme;