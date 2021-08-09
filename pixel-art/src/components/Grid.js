
import { useState } from 'react';
import useStyles from './Grid.styles';

const Grid = () => {
    const cells = useState(Array.from({ lenght: 40 }))
    const classes = useStyles();
    return (
        <div className={classes.grid}>
           {cells.map(() => <div className={classes.cell}>a</div>)}
        </div>
    )
};

export default Grid;