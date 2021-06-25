import {makeStyles} from '@material-ui/core';

/** Hoja de estilos transversal*/
const useStyles = makeStyles (theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    '& > *': {
      margin: theme.spacing (1),
    },
  },
  paper: {
    padding: theme.spacing (2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontSize: 30,
    textAlign: 'left',
  },
  subtitle: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontSize: 15,
    textAlign: 'left',
  },
  msg: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontSize: 12,
    textAlign: 'center',
  },
  buttonUp: {
    background: '#FBBD4A',
    margin: 5,
  },
  buttonDown: {
    background: 'rgba(60, 187, 180, 0.8)',
    margin: 5,
  },
  voteButton: {
    background: 'rgba(0, 0, 0, 0.6)',
    border: '1px solid #FFFFFF',
    boxSizing: 'border-box',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  whiteColor: {
    color: '#ffffff',
  },
}));

export default useStyles;
