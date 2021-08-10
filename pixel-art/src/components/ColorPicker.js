
import useStyles from './ColorPicker.styles';


const ColorPicker = ({ currentColor, setCurrentColor}) => {
    const classes = useStyles( {currentColor} );
    const colorChange = (event) => {
        setCurrentColor(event.target.value);
    };
    return (
        <input
            className={classes.colorPicker}
            type="color"
            value={currentColor}
            onChange={colorChange}
        />
    );
};

export default ColorPicker;