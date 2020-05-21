import React from 'react';

import Typography from '@material-ui/core/Typography';
import {Link,Fab,AppBar,Toolbar,Grid,Button} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

const Navbar = () => {

    const StyledButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button);
    const preventDefault = (e) => {
        alert("Đăng nhập thất bại");
    }
    return (
        <div>
            <AppBar position="static">
  <Toolbar>
    <Grid
      justify="space-between" // Add it here :)
      container 
      
      spacing={24}
    >
      <Grid item>
        <Typography type="title" color="inherit">
          Title
        </Typography>
      </Grid>

      
      <Grid item>
        <div>
        <StyledButton>classes shorthand</StyledButton>
        </div>
      </Grid>
      
      <Grid item>
        <div>
          <Button raised color="accent">
            Login
          </Button>
        </div>
      </Grid>
    </Grid>
  </Toolbar>
</AppBar>
        </div>
    );
};

export default Navbar;