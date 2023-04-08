import axios  from 'axios';
import React, { Component, useEffect, useState } from 'react';

import { useParams } from 'react-router';

export default function Productdetail(){
  const [rec,setRec]=useState({});
  let {productId}=useParams();//object {product:"1"}
  console.log("ins single product  comp");
  console.log(productId);

  useEffect(()=>{
    axios.get('http://localhost:3004/product/'+productId)
    .then(res=>{
      console.log(res);
      console.log(res.data);
      setRec(res.data)
    })
  },[]); 

    return (

      <div class="container product-details">
      <div class="col-sm-5">
        <div class="view-product">
          <img src={rec.image} alt="" />
        </div>
      

      </div>
      <div class="col-sm-7">
        <div class="product-information">
          <img src="images/product-details/new.jpg" class="newarrival" alt="" />
          <h2>{rec.title}</h2>
          <p>Web ID: 1089772</p>
          <img src="images/product-details/rating.png" alt="" />
          <span>
            <span>US {rec.price}</span>
            <label>Quantity:</label>
            <input type="text" value="3" />
            <button type="button" class="btn btn-fefault cart">
              <i class="fa fa-shopping-cart"></i>
              Add to cart
            </button>
            <link to={'/deletepro/'+rec.id} class='btn btn-fefault cart'>
            <i class="fa fa-shopping-cart"></i>
              delete
              </link>

              <link to={'/editpro/'+rec.id} class='btn btn-fefault cart'>
            <i class="fa fa-shopping-cart"></i>
              Edit
              </link>
            
              
          </span>
          <p><b>Availability:</b> In Stock</p>
         { /*<p><b>Condition:</b> New</p>
          <p><b>Brand:</b> E-SHOPPER</p>*/}
           <p><b>Category:</b> {rec.category}</p>
           <p>
             {rec.description}
            </p>
          <a href=""><img src="images/product-details/share.png" class="share img-responsive"  alt="" /></a>
        </div>
      </div>
    </div>    )
  }

