import { createUseStyles } from 'react-jss';

export default createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateRows: 'repeat(20, 1fr)',
    gridTemplateColumns: 'repeat(30, 1fr)',
    width: '80vw',
    height: '80vh',
    outline: '2px solid black',
},

  cell: {
      outline: '1px solid black',
    }
});