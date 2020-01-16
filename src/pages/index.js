import React, { Fragment, useState, useEffect } from 'react';
import { graphql } from "gatsby"
//import ProTip from '../src/ProTip';
//import Link from '../src/Link';
//import { withAuthSync, logout } from '../utils/auth';
//import getHost from '../utils/get-host'
import Layout from '../components/Layout';
//import Body from '../components/Body';

import fetch from 'isomorphic-unfetch'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  mainPaper: {
      padding: theme.spacing(0.5, 0.5),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      height: 400,
      overflowY: 'auto'
  },
  paper: {
      padding: theme.spacing(1, 1),
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
      backgroundColor: theme.palette.secondary.main
  },
}));

function Index(props) {

  console.log(props);
  /**
    allPlatterInnolas2005LcmL17L18Csv: {edges: Array(23)}
    allPlatterInnolas2006LcmL19L20Csv: {edges: Array(23)}
    allPlatterInnolas3012LcmL222Csv: {edges: Array(23)}
    allPlatterInnolas4019LcmL17Csv: {edges: Array(23)}
    allPlatterInnolas4020LcmL18Csv: {edges: Array(23)}
    allPlatterInnolas4021LcmL19Csv: {edges: Array(23)}
    allPlatterInnolas4022LcmL20Csv: {edges: Array(23)}
    allPlatterInnolas4023LcmL21Csv: {edges: Array(23)}
    allPlatterInnolas4024LcmL22Csv: {edges: Array(23)}
   */
  
  const classes = useStyles();
  const [ lcm17, setLcm17 ] = useState([]);
  const [ lcm18, setLcm18 ] = useState([]);
  const [ lcm19, setLcm19 ] = useState([]);
  const [ lcm20, setLcm20 ] = useState([]);
  const [ lcm21, setLcm21 ] = useState([]);
  const [ lcm22, setLcm22 ] = useState([]);
  const [ lcm1718, setLcm1718 ] = useState([]);
  const [ lcm1920, setLcm1920 ] = useState([]);
  const [ lcm222, setLcm222 ] = useState([]);
  const [ backdrop, setBackdrop ] = useState(false);

  useEffect(() => {
    if(typeof props.data.allPlatterInnolas4019LcmL17Csv.edges !== 'undefined' && props.data.allPlatterInnolas4019LcmL17Csv.edges !== null && props.data.allPlatterInnolas4019LcmL17Csv.edges.length > 0){
        setLcm17(props.data.allPlatterInnolas4019LcmL17Csv.edges)
        setBackdrop(false)

    } else {
      setBackdrop(true)
    }
    
    if(typeof props.data.allPlatterInnolas4020LcmL18Csv.edges !== 'undefined' && props.data.allPlatterInnolas4020LcmL18Csv.edges !== null && props.data.allPlatterInnolas4020LcmL18Csv.edges.length > 0){
        setLcm18(props.data.allPlatterInnolas4020LcmL18Csv.edges)
        setBackdrop(false)

    } else {
      setBackdrop(true)
    }
    
    if(typeof props.data.allPlatterInnolas4021LcmL19Csv.edges !== 'undefined' && props.data.allPlatterInnolas4021LcmL19Csv.edges !== null && props.data.allPlatterInnolas4021LcmL19Csv.edges.length > 0){
        setLcm19(props.data.allPlatterInnolas4021LcmL19Csv.edges)
        setBackdrop(false)
        
    } else {
      setBackdrop(true)
    }
    
    if(typeof props.data.allPlatterInnolas4022LcmL20Csv.edges !== 'undefined' && props.data.allPlatterInnolas4022LcmL20Csv.edges !== null && props.data.allPlatterInnolas4022LcmL20Csv.edges.length > 0){
        setLcm20(props.data.allPlatterInnolas4022LcmL20Csv.edges)
        setBackdrop(false)
        
    } else {
      setBackdrop(true)
    }
    
    if(typeof props.data.allPlatterInnolas4023LcmL21Csv.edges !== 'undefined' && props.data.allPlatterInnolas4023LcmL21Csv.edges !== null && props.data.allPlatterInnolas4023LcmL21Csv.edges.length > 0){
        setLcm21(props.data.allPlatterInnolas4023LcmL21Csv.edges)
        setBackdrop(false)
        
    } else {
      setBackdrop(true)
    }
    
    if(typeof props.data.allPlatterInnolas4024LcmL22Csv.edges !== 'undefined' && props.data.allPlatterInnolas4024LcmL22Csv.edges !== null && props.data.allPlatterInnolas4024LcmL22Csv.edges.length > 0){
        setLcm22(props.data.allPlatterInnolas4024LcmL22Csv.edges)
        setBackdrop(false)
      
    } else {
      setBackdrop(true)
    }
    
    if(typeof props.data.allPlatterInnolas2005LcmL17L18Csv.edges !== 'undefined' && props.data.allPlatterInnolas2005LcmL17L18Csv.edges !== null && props.data.allPlatterInnolas2005LcmL17L18Csv.edges.length > 0){
        setLcm1718(props.data.allPlatterInnolas2005LcmL17L18Csv.edges)
        setBackdrop(false)
      
    } else {
      setBackdrop(true)
    }
    
    if(typeof props.data.allPlatterInnolas2006LcmL19L20Csv.edges !== 'undefined' && props.data.allPlatterInnolas2006LcmL19L20Csv.edges !== null && props.data.allPlatterInnolas2006LcmL19L20Csv.edges.length > 0){
        setLcm1920(props.data.allPlatterInnolas2006LcmL19L20Csv.edges)
        setBackdrop(false)
      
    } else {
      setBackdrop(true)
    }
    
    if(typeof props.data.allPlatterInnolas3012LcmL222Csv.edges !== 'undefined' && props.data.allPlatterInnolas3012LcmL222Csv.edges !== null && props.data.allPlatterInnolas3012LcmL222Csv.edges.length > 0){
        setLcm222(props.data.allPlatterInnolas3012LcmL222Csv.edges)
        setBackdrop(false)
    } else {
      setBackdrop(true)
    }

  });

  console.log(lcm17);
  console.log(lcm18);
  console.log(lcm19);
  console.log(lcm20);
  console.log(lcm21);
  console.log(lcm22);
  console.log(lcm1718);
  console.log(lcm1920);
  console.log(lcm222);

  return (
    <Fragment>
      <Backdrop
        className={classes.backdrop}
        open={backdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Layout lcm17={lcm17} />
      <Container maxWidth="xl" >
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L17
              </Typography>
            {
              lcm17.map(data => (
                data.node.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.node.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.node.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data.node._FAIL}/{data.node.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data.node.UL_LL} • {data.node.n}
                      </Typography>
                    </Paper>
                  </Fragment>
                :
                <></>
              ))
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L17L18
              </Typography>
            {
              lcm1718.map(data => (
                data.node.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.node.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.node.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data.node._FAIL}/{data.node.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data.node.UL_LL} • {data.node.n}
                      </Typography>
                    </Paper>
                  </Fragment>
                :
                <></>
              ))
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L18
              </Typography>
            {
              lcm18.map(data => (
                data.node.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.node.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.node.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data.node._FAIL}/{data.node.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data.node.UL_LL} • {data.node.n}
                      </Typography>
                    </Paper>
                  </Fragment>
                :
                <></>
              ))
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L19
              </Typography>
            {
              lcm19.map(data => (
                data.node.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.node.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.node.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data.node._FAIL}/{data.node.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data.node.UL_LL} • {data.node.n}
                      </Typography>
                    </Paper>
                  </Fragment>
                :
                <></>
              ))
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L19L20
              </Typography>
            {
              lcm1920.map(data => (
                data.node.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.node.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.node.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data.node._FAIL}/{data.node.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data.node.UL_LL} • {data.node.n}
                      </Typography>
                    </Paper>
                  </Fragment>
                :
                <></>
              ))
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM20
              </Typography>
            {
              lcm20.map(data => (
                data.node.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.node.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.node.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data.node._FAIL}/{data.node.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data.node.UL_LL} • {data.node.n}
                      </Typography>
                    </Paper>
                  </Fragment>
                :
                <></>
              ))
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L21
              </Typography>
            {
              lcm21.map(data => (
                data.node.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.node.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.node.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data.node._FAIL}/{data.node.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data.node.UL_LL} • {data.node.n}
                      </Typography>
                    </Paper>
                  </Fragment>
                :
                <></>
              ))
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L22
              </Typography>
            {
              lcm22.map(data => (
                data.node.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.node.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.node.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data.node._FAIL}/{data.node.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data.node.UL_LL} • {data.node.n}
                      </Typography>
                    </Paper>
                  </Fragment>
                :
                <></>
              ))
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L22-2
              </Typography>
            {
              lcm222.map(data => (
                data.node.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.node.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.node.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data.node._FAIL}/{data.node.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data.node.UL_LL} • {data.node.n}
                      </Typography>
                    </Paper>
                  </Fragment>
                :
                <></>
              ))
            }
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}


export default Index;
export const IndexQuery = graphql`
  query {
    allPlatterInnolas2005LcmL17L18Csv {
      edges {
        node {
          Tool
          _FAIL
          Limit
          UL_LL
          Code
          n
          TimeStamp
          _FAIL_UL
          _FAIL_LL
        }
      }
    }
    allPlatterInnolas2006LcmL19L20Csv {
      edges {
        node {
          Tool
          _FAIL
          Limit
          UL_LL
          Code
          n
          TimeStamp
          _FAIL_UL
          _FAIL_LL
        }
      }
    }
    allPlatterInnolas3012LcmL222Csv {
      edges {
        node {
          Tool
          _FAIL
          Limit
          UL_LL
          Code
          n
          TimeStamp
          _FAIL_UL
          _FAIL_LL
        }
      }
    }
    allPlatterInnolas4019LcmL17Csv {
      edges {
        node {
          Tool
          _FAIL
          Limit
          UL_LL
          Code
          n
          TimeStamp
          _FAIL_UL
          _FAIL_LL
        }
      }
    }
    allPlatterInnolas4020LcmL18Csv {
      edges {
        node {
          Tool
          _FAIL
          Limit
          UL_LL
          Code
          n
          TimeStamp
          _FAIL_UL
          _FAIL_LL
        }
      }
    }
    allPlatterInnolas4021LcmL19Csv {
      edges {
        node {
          Tool
          _FAIL
          Limit
          UL_LL
          Code
          n
          TimeStamp
          _FAIL_UL
          _FAIL_LL
        }
      }
    }
    allPlatterInnolas4022LcmL20Csv {
      edges {
        node {
          Tool
          _FAIL
          Limit
          UL_LL
          Code
          n
          TimeStamp
          _FAIL_UL
          _FAIL_LL
        }
      }
    }
    allPlatterInnolas4023LcmL21Csv {
      edges {
        node {
          Tool
          _FAIL
          Limit
          UL_LL
          Code
          n
          TimeStamp
          _FAIL_UL
          _FAIL_LL
        }
      }
    }
    allPlatterInnolas4024LcmL22Csv {
      edges {
        node {
          Tool
          _FAIL
          Limit
          UL_LL
          Code
          n
          TimeStamp
          _FAIL_UL
          _FAIL_LL
        }
      }
    }
  }
`