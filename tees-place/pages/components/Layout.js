import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'

export default function Layout({children}) {
  return (
    <div>
        <Head>
            <title>Tees-Place</title>
        </Head>
        <AppBar position = "static">
            <Toolbar>
                <Typography>Tees-Place</Typography>
            </Toolbar>
        </AppBar>
        <Container>
            {children}
        </Container>
        <footer>
            <Typography>All rights reserved. Tees-Place.</Typography>
        </footer>
    </div>
  )
}
