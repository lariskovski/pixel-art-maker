
import Grid from './components/Grid';
import ColorPicker from './components/ColorPicker';
import useStyles from './App.styles';
import { useState } from 'react';


function App() {
  const [currentColor, setCurrentColor] = useState('#56BC58');
  const classes = useStyles();
  return (
    <div className={classes.app}>
        <ColorPicker currentColor={currentColor} setCurrentColor={setCurrentColor} />
        <Grid currentColor={currentColor} />
    </div>
  );
}

export default App;
