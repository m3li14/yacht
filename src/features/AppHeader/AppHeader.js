import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    links: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    link: {
        color: 'white',
        textDecoration: 'none'
    }
}));

const AppHeader = ({ user, onSignOut }) => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <div className={classes.links}>
                    {(user && user.idToken) && <Link to="/yachts" className={classes.link}><Typography variant="button">Yachts</Typography></Link>}
                </div>
                {
                    (!user || !user.idToken) && <Link to="/signin" className={classes.link}><Typography variant="button">Login</Typography></Link>
                }
                {
                    (user && user.idToken) && <Button className={classes.link} onClick={onSignOut}><Typography variant="button">Logout</Typography></Button>
                }

            </Toolbar>
        </AppBar>
    )
}

export default AppHeader;