
import { useState } from 'react';
import useStyles from './Grid.styles';

const initialCells = Array.from({ length:600 }, () => ({
    on: false,
    color: '#000000',
}));

const Grid = ( {currentColor}) => {
    const [cells, setCells] = useState(initialCells);
    const classes = useStyles();
    const updateCell = (i) => () => {
        setCells(cells.map((cell, cellIndex) => {
            if (cellIndex === i) {
                // set to current color
                return {
                    on:  true,
                    color: currentColor,
                };
            }
            return cell;
        }))
    };
    return (
        <div className={classes.grid}>
           {cells.map((cell, i) => (
                <div key={i}
                    style={{ backgroud: cell.on ? cell.color : '#fffff' }}
                    className={classes.cell}
                    onClick={updateCell(i)}
                ></div>
            ))}
        </div>
    )
};

export default Grid;