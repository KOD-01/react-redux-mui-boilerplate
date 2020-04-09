import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        height: '80vh',
    },
    img: {
        width: '50%',
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <img className={classes.img} src="/images/logo.svg" />
        </section>
    );
};
