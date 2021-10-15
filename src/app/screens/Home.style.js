// Material
import { makeStyles } from "@mui/styles";

const HomeStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: theme.spacing(2),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "1fr 1fr"
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "1fr 1fr 1fr"
    }
  },
  componentContainer: {
    outline: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2)
  },
  memberFeedContainer: {
    gridRow: "1 / 3",
    gridColumn: "1 / 2"
  }
}));

export default HomeStyles;
