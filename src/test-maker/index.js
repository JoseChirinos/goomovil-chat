import React, {Component} from 'react';

import {db} from '../database/firebase';

class TestMaker extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log("componente montado",db);
  }
  render(){
    return(
      <div>
        soy el test maker
      </div>
    )
  }
}

export default TestMaker;