import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home';
import { Grid } from '@material-ui/core';

function App() {

  return (
    <>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <Home />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Home />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Home />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Home />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Home />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Home />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Home />
      </Grid>

    </Grid>

    </>
     
  )
}

export default App;
