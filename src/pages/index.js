import React, { Fragment, useState, useEffect, useRef  } from 'react';
import { graphql, useStaticQuery } from "gatsby"
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
  
  let [delay, setDelay] = useState(10000);
  
  function handleDelayChange(e) {
    setDelay(Number(e.target.value));
  }

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
    useEffect(() => {
    })
      useInterval(() => {
        async function GetLCMData(){
          let response = await fetch(`http://dev-metaspf401.sunpowercorp.com:8080/api/metadash/lcm`);

          if(response.status === 200){
            let data = await response.json();
            console.log(data.lcm17);
            setLcm17(data.lcm17)
            setLcm1718(data.lcm1718)
            setLcm18(data.lcm18)
            setLcm19(data.lcm19)
            setLcm1920(data.lcm1920)
            setLcm20(data.lcm20)
            setLcm21(data.lcm21)
            setLcm22(data.lcm22)
            setLcm222(data.lcm222)
          }
        }
        GetLCMData();
      }, delay)
  
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

   */
  return (
    <Fragment>
      <Backdrop
        className={classes.backdrop}
        open={backdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Layout />
      <Container maxWidth="xl" >
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L17
              </Typography>
            {
              lcm17.map(data => (
                data.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data['#FAIL']}/{data.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data['UL/LL']} • {data.n}
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
                data.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data['#FAIL']}/{data.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data['UL/LL']} • {data.n}
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
                data.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data['#FAIL']}/{data.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data['UL/LL']} • {data.n}
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
                data.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data['#FAIL']}/{data.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data['UL/LL']} • {data.n}
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
                data.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data['#FAIL']}/{data.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data['UL/LL']} • {data.n}
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
                data.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data['#FAIL']}/{data.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data['UL/LL']} • {data.n}
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
                data.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data['#FAIL']}/{data.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data['UL/LL']} • {data.n}
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
                data.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data['#FAIL']}/{data.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data['UL/LL']} • {data.n}
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
                data.Code !== 'OK' ?
                  <Fragment>
                    <Paper className={classes.paper} style={{backgroundColor:`${data.Code}`}}>
                      <Typography color="primary" variant="h6" style={{fontFamily: 'Roboto Condensed'}}>
                        {data.Tool}
                        <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar'}} style={{float: 'right'}}>
                          {data['#FAIL']}/{data.Limit}
                        </Typography>
                      </Typography>
                      <Typography color="primary" variant="overline" style={{fontFamily: 'Eczar', fontWeight: 500}}>
                        {data['UL/LL']} • {data.n}
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