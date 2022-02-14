import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { HashRouter , Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Project from './components/Project'
import Resume from './components/Resume'


class App extends Component{
  render() {
  return (
    <div className='base'>
      <HashRouter basename='sabrina-professional-portfolio/'>
        <Header></Header>
        <main className='container my-5'>
          <Switch>
            <Route exact path={"/"} component={About} />
            <Route path={"/project"} component={Project} />
            <Route path={"/contact"} component={Contact} />
            <Route path={"/resume"} component={Resume} />
          </Switch>
        </main>
        <Footer></Footer>
        </HashRouter>
        </div>
  );
}
}

export default App;