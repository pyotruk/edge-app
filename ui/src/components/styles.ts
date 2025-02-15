import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  note: {
    '& i': {
      cursor: 'pointer',
      marginLeft: '1em',
    }
  },
  form: {
    display: 'block',
    maxWidth: '60vw',
    margin: '2em auto',
    '& input': {
      minWidth: '60%',
    },
    '& button, & input': {
      height: '1.5em',
      fontSize: '1em',
      boxSizing: 'content-box',
      marginRight: '1em',
    }
  }
});

export default useStyles;
