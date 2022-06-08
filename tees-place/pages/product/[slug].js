import React from 'react'
import data from '../../utils/data';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import { AppBar, Toolbar, Typography, Link, Grid } from '@mui/material'
import useStyles from '../../utils/styles';

export default function ProductScreen() {
    const classes = useStyles
    const router = useRouter()
    const { slug } = router.query;
    const product = data.products.find(p => p.slug === slug);
    if (!product) {
        return <div>Product not found</div>
    }
  return (
    <Layout title={product.name}>
        <div className={classes.section}>
            <NextLink href="/" passHref>
                <Link>back to products</Link>
            </NextLink>
        </div>
        <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
                <Image src={product.image} alt={product.name} width={640} height={640} layout="responsive"/>
            </Grid>
        </Grid>
    </Layout>
  )
}
