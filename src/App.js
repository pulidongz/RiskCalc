import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { CookiesProvider } from "react-cookie";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// TODO LandingPage
// TODO ConstDelays
// TODO WorkmansDefects
// TODO ResultPage

import './App.css';
import LandingPage from './components/LandingPage';
import CriteriaPage from './components/CriteriaPage';
import ConstDelays from './components/ConstDelays';
import WorkmanDefects from './components/WorkmanDefects';
import ResultPage from './components/ResultPage';

const theme = createMuiTheme({
  overrides: {
    MuiFab: {
      primary: {
        backgroundColor: '#18516c'
      },
      secondary: {
        backgroundColor: '#f9961f'
      }
    },
  },
});

function App() {
  //Magic bura console 
  console.log = () => {};
  return (
    <ThemeProvider theme={theme}>
    {/* <CookiesProvider> */}
      <BrowserRouter>
        <Switch>
        {/* PDRRMO SECTION */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/criteria" component={CriteriaPage} />
        <Route path="/const-delays" component={ConstDelays} />
        <Route path="/workman-defects" component={WorkmanDefects} />
        <Route path="/result-page" component={ResultPage} />
        {/* <Route component={PageNotFound} /> */}
      </Switch>
      </BrowserRouter>
    {/* </CookiesProvider> */}
    </ThemeProvider>
  );
}

export default App;
