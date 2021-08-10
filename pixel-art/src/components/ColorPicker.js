
import useStyles from './ColorPicker.styles';


const ColorPicker = () => {
    const classes = useStyles();
    return (
        <input className={classes.colorPicker} type="color" />
    )
};

export default ColorPicker;