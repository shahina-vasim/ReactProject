import React, { Component } from 'react'
import Child3 from './Child3'
import {MainContext,UserContext} from '../ContextApi'
export default class Child2 extends Component {
  render() {
    return (
      <div>child2,
          <hr/>
          <h1>Data in Child2</h1>
          <MainContext.Consumer>    
            {
              value=>(
                <p>{value}</p>
              )
            }   
         </MainContext.Consumer>  
            <hr/>
          <Child3 pqr={this.props.abc}/>
      </div>
    )
  }
}
