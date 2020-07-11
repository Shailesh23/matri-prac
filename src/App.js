import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="container">
      <img className = "background_image" src='./landing_image.jpg' />
      <Typography className = "logo" variant="h3" component="h2" color="secondary">Saathi</Typography>
      <Button className="btn_login" variant="contained" color="secondary">Sign Up</Button>
    </div>
  );
}

export default App;
