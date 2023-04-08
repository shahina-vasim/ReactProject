import React, { Component } from 'react'
import axios from 'axios';
export default class Category extends Component {
    constructor(){
        super();
        this.state = {
            categories:[]
        }
    }

    componentDidMount(){
        axios.get('https://fakestoreapi.com/products/categories').then(res=>{
            this.setState({
                categories:res.data
            })
        })
    }
  render() {
    console.log('RENDER CAT');
    console.log(this.state.categories);
    const API=this.state.categories;
    return (
      <>
        <h2>Category</h2>
        <div class="panel-group category-products" id="accordian">
            
            {
                API && API.length>0  && API.map(val=>
                    
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title"><a href="#">{val}</a></h4>
                        </div>
                    </div>
                    
                )
            }
            
        </div>
      </>
    )
  }
}
