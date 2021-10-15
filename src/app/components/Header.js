import React from "react";
import {Button} from '@material-ui/core';
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
    header: {
        backgroundColor: "#FAFAFA",
        color: "#005395",
        boxShadow: "0px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
      },
})

function Header(){
    const classes = useStyles()

    return (
        <div>
            <AppBar 
                className={classes.header}
                position='sticky'>           
            <Toolbar 
                className={classes.toolbar}>     
                {/* <div>
                    <img src="./img/arise-logo.png" alt="arise-logo"/>
                </div>         */}
                <Typography App-header> ARISE.PH </Typography>
                
                <Button variant="text" color="inherit">Home</Button>
                <Button variant="text" color="inherit">Calendar</Button>
                <Button variant="text" color="inherit">Archive</Button>
            
                <Button variant="outlined" color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;