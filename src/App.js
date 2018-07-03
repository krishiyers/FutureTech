import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faHeart,faUser,faArrowUp ,faArrowDown,faMedal} from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faHeart,faUser,faArrowUp,faArrowDown,faMedal)


class App extends Component {
  render() {
    return (	
		<Layout />     
    );
  }
}

export default App;
