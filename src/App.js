import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faHeart,faUserPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faHeart,faUserPlus)


class App extends Component {
  render() {
    return (	
		<Layout />     
    );
  }
}

export default App;
