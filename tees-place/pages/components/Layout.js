import React from 'react'
import Head from 'next/head'
import { AppBar, Toolbar, Typography, Link } from '@mui/material'
import { Container } from '@mui/system'
import useStyles from '../../utils/styles'
import NextLink from 'next/link';

export default function Layout({title, description, children}) {
    const classes = useStyles();
  return (
    <div>
        <Head>
            <title>{title? `${title} - Tees-Place` : 'Tees-Place'}</title>
            {description && <meta name="description" content={description} />}
        </Head>
        <AppBar position = "static" className ={classes.navigator}>
            <Toolbar>
                <NextLink href="/" passHref>
                    <Link>                
                        <Typography className={classes.brand}>Tees-Place</Typography>
                    </Link>
                </NextLink>
                <div className={classes.grow}></div>
                <div>
                    <NextLink href="/cart" passHref>
                        <Link>Cart  </Link>
                    </NextLink>
                    <NextLink href="/login" passHref>
                        <Link>  Login</Link>
                    </NextLink>
                </div>
            </Toolbar>
      </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
            <Typography>All rights reserved. Tees-Place.</Typography>
        </footer>
    </div>
  )
}
