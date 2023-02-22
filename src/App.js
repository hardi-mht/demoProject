import StepperForm from './components/StepperForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 30,
    minHeight: '50vh',
    height: '100%',
    border: '1px solid black'
  },

}));

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <StepperForm />
    </div>
  );
}

export default App;
