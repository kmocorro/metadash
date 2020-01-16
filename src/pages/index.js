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
  
  const classes = useStyles();
  const [ backdrop, setBackdrop ] = useState(true);
  
  // LCM state
  const [ lcm17, setLcm17 ] = useState([]);
  const [ lcm18, setLcm18 ] = useState([]);
  const [ lcm19, setLcm19 ] = useState([]);
  const [ lcm20, setLcm20 ] = useState([]);
  const [ lcm21, setLcm21 ] = useState([]);
  const [ lcm22, setLcm22 ] = useState([]);
  const [ lcm1718, setLcm1718 ] = useState([]);
  const [ lcm1920, setLcm1920 ] = useState([]);
  const [ lcm222, setLcm222 ] = useState([]);

  // Custom Hook
  const [ delay, setDelay ] = useState(10000);
  useInterval(() => { // custom hook
    async function GetLCMData(){
      let response = await fetch(`http://dev-metaspf401.sunpowercorp.com:8080/api/metadash/lcm`);

      if(response.status === 200){

        let data = await response.json();
        setLcm17(data.lcm17)
        setLcm1718(data.lcm1718)
        setLcm18(data.lcm18)
        setLcm19(data.lcm19)
        setLcm1920(data.lcm1920)
        setLcm20(data.lcm20)
        setLcm21(data.lcm21)
        setLcm22(data.lcm22)
        setLcm222(data.lcm222)

        // Turn off Backdrop Loading screen
        setBackdrop(false);
      }
    }
    GetLCMData();
  }, delay)

  // Functon Custom Hook for Dynamic Delay setInterval -> useInterval
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
        <Grid container spacing={2} justify="left">
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L17
              </Typography>
            {
              lcm17.length > 0 ?
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
              :
              <Typography variant="h1" align="center">😊</Typography>
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L17L18
              </Typography>
            {
              lcm1718.length > 0 ?
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
              :
              <Typography variant="h1" align="center">😊</Typography>
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L18
              </Typography>
            {
              lcm18.length > 0 ?
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
              :
              <Typography variant="h1" align="center">😊</Typography>
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L19
              </Typography>
            {
              lcm19.length > 0 ?
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
              :
              <Typography variant="h1" align="center">😊</Typography>
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L19L20
              </Typography>
            {
              lcm1920.length > 0 ?
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
              :
              <Typography variant="h1" align="center">😊</Typography>
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM20
              </Typography>
            {
              lcm20.length > 0 ?
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
              :
              <Typography variant="h1" align="center">😊</Typography>
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L21
              </Typography>
            {
              lcm21.length > 0 ?
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
              :
              <Typography variant="h1" align="center">😊</Typography>
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L22
              </Typography>
            {
              lcm22.length > 0 ?
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
              :
              <Typography variant="h1" align="center">😊</Typography>
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                LCM L22-2
              </Typography>
            {
              lcm222.length > 0 ?
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
              :
              <Typography variant="h1" align="center">😊</Typography>
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                
              </Typography>
            {
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                
              </Typography>
            {
            }
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Paper className={classes.mainPaper}>
              <Typography color="primary" variant="h5" style={{fontFamily: 'Roboto Condensed'}} gutterBottom>
                
              </Typography>
            {
            }
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}


export default Index;