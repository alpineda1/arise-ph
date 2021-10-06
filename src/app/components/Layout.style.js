// Material
import { makeStyles } from '@mui/styles';

const componentStyles = makeStyles((theme) => ({
  childrenContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  box: {
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`
  },
  link: {
    marginRight: theme.spacing(2)
  }
}));

export { componentStyles };
