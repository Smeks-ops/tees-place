import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import useStyles from '../../utils/styles'

export default function Layout({children}) {
    const classes = useStyles();
  return (
    <div>
        <Head>
            <title>Tees-Place</title>
        </Head>
        <AppBar position = "static" className ={classes.navigator}>
            <Toolbar>
                <Typography>Tees-Place</Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
            <Typography>All rights reserved. Tees-Place.</Typography>
        </footer>
    </div>
  )
}
