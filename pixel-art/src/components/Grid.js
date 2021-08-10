
import { useState } from 'react';
import useStyles from './Grid.styles';

const Grid = () => {
    // const [cells] = useState(Array.from({ lenght: 40 }));
    // const [cells] = useState(Array.from(Array(40).keys()));
    const [cells] = useState(Array.from({ length: 40 }));
    const classes = useStyles();
    return (
        <div className={classes.grid}>
           {cells.map(() => <div className={classes.cell}></div>)}
        </div>
    )
};

export default Grid;