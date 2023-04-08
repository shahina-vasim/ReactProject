import React, { Component } from 'react'
import {MainContext,UserContext} from '../ContextApi';

export default class Child3 extends Component {
  render() {
    
    return (
      <div>child3, from main {this.props.pqr}
      <br/>
<h2>Data from Provider</h2>
<MainContext.Consumer>
  {
    value1=>(
      <UserContext.Consumer>
        {
          value2=>(
            <div>
              <p>{value1}</p>
              <p>{value2}</p>
            </div>
          )
        }
       </UserContext.Consumer>
    )
  }
</MainContext.Consumer>

      </div>
    )
  }
}
