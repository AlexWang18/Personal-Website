import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

import axios from 'axios'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      resumeData: {}
    };

   // ReactGA.initialize('UA-110570651-1');
    //ReactGA.pageview(window.location.pathname);
  }

  componentDidMount() {
    //loaded in
    axios.get('/data')
      .then(result => {
        this.setState({
          isLoaded: true,
          resumeData: result.data
        });
      })
      .catch(err => {
        console.log(err)
        this.setState({
          isLoaded: true,
          error: err
        });
      })
  }

  render() {
    const { error, isLoaded, resumeData } = this.state
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading site...</div>;
    }
    return (
      <div className="App" >
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
       
      </div>
    );
  }
}

export default App;
