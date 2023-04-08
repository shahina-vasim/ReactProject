import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Category from './Category';

class Home extends React.Component {
    constructor() {
        // console.log('CONST');
        super();
        this.state = {
            apidata: [],
            catname:''
        }
        this.record='';
        this.x1=React.createRef();
    }
    myfunc1(){
        console.log('mousemove', Math.random());
    }
    componentWillUnmount(){
        console.log('will unmount cycle called');
        // document.body.removeEventListener('mousemove', this.myfunc1);
        // clearInterval(this.record);
        this.state({apidata:[]});
    }
    componentDidUpdate(prevProps,PrevState){
        console.log('did update', this.state.catname);
        // https://fakestoreapi.com/products/category/jewelery'
        console.log(this.state.catname);
        console.log(PrevState.catname);
        if(this.state.catname!=PrevState.catname){
            console.log('hhhhh')
        axios
            .get("https://fakestoreapi.com/products/category/"+this.state.catname)
            .then((res)=>{
                console.log(res.data);
                //state update
                this.setState({apidata:res.data
                });
            });
        }
        else{
            console.log('hhhh')
        }
    }
    myfunc2(){
        console.log(this.x1);
        console.log(this.x1.current.value);
        this.setState({
            catname:this.x1.current.value
        })
    }
    componentDidMount() {
        // console.log('DID MOUNT');
        // document.body.addEventListener('mousemove', this.myfunc1);
    //    this.record= setInterval(() => {
    //         console.log('interval called', Math.random());
    //     }, 3000);
        axios
            .get("https://fakestoreapi.com/products")
            .then(res => {
                console.log(res.data);
                this.setState({
                    apidata: res.data
                })
            })
    }

    render() {
        console.log('RENDER');
        console.log(this.state.apidata);
        const API = this.state.apidata;
        return (
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="left-sidebar">
                                
                                <Category />

                                <div class="brands_products">
                                    <h2>Brands</h2>
                                    <div class="brands-name">
                                        <ul class="nav nav-pills nav-stacked">
                                            <li><a href="#"> <span class="pull-right">(50)</span>Acne</a></li>
                                            <li><a href="#"> <span class="pull-right">(56)</span>Grüne Erde</a></li>
                                            <li><a href="#"> <span class="pull-right">(27)</span>Albiro</a></li>
                                            <li><a href="#"> <span class="pull-right">(32)</span>Ronhill</a></li>
                                            <li><a href="#"> <span class="pull-right">(5)</span>Oddmolly</a></li>
                                            <li><a href="#"> <span class="pull-right">(9)</span>Boudestijn</a></li>
                                            <li><a href="#"> <span class="pull-right">(4)</span>Rösch creative culture</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="price-range">
                                    <h2>Price Range</h2>
                                    <div class="well text-center">
                                        <input type="text" class="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br />
                                        <b class="pull-left">$ 0</b> <b class="pull-right">$ 600</b>
                                    </div>
                                </div>

                                <div class="shipping text-center">
                                    <img src="images/home/shipping.jpg" alt="" />
                                </div>

                            </div>
                        </div>

                        <div class="col-sm-9 padding-right">
                             <div>
                                <input type='text' ref={this.x1} class='form-control'/>
                                <button onClick={()=>{this.myfunc2()}}>search</button>

                                </div>

                            <div class="features_items">
                                <h2 class="title text-center">Features Items</h2>

                                {
                                    API && API.length > 0 && API.map(val =>

                                        <div class="col-sm-4">
                                            <div class="product-image-wrapper">
                                                <div class="single-products">
                                                    <div class="productinfo text-center">
                                                        <img src={val.image} className="img-responsive" alt="" />
                                                        <h2>{val.price}</h2>
                                                        <p>{val.title}</p>
                                                        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                    <div class="product-overlay">
                                                        <div class="overlay-content">
                                                            <h2>{val.price}</h2>
                                                            <p>{val.title}</p>
                                                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="choose">
                                                    <ul class="nav nav-pills nav-justified">
                                                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                                                        <li><Link to={'/singlePage/'+val.id}><i class="fa fa-plus-square"></i>Add to compare</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    )

                                }



                            </div>



                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;
