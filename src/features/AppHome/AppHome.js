import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '80%',
        height: '50vh',
        margin: '30px auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    message: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

}));

const AppHome = ({ fbUser }) => {
    const classes = useStyles();
    return (
        <Container className={classes.mainContainer}>
            <Paper elevation={5} className={classes.message}>
                {fbUser.idToken ? <Typography color='primary'>{`Welcome, ${fbUser.email}`}</Typography>
                    :
                    <Typography>User is not logged in, Please login.</Typography>
                }
            </Paper>
        </Container>
    )
};

export default AppHome;
