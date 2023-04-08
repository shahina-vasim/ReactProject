import React,{useEffect,useState} from 'react'
import axios from 'axios';
import '../css/style.css';
import { Link } from 'react-router-dom';
import UseAxios from 'axios';

export default function Show() {
    // var ans=UseAxios('http://localhost:3004/product');
    // console.log(ans);
const[api, setApi]=useState([]);

useEffect(()=>{

    axios
    .get('http://localhost:3004/product')
    .then(res=>{
        // console.log(res);
        // console.log(res.data);
        setApi(res.data)
    });
},[]);

  return (
    <div className='container'>
        <h1>show data</h1>
        <div className='row'>
            {
                api && api.length>0 && api.map(val=>
                    <div className='col-md-3 text-center'>
                        <img src={val.image} className='img-responsive pro-image'/>
                        <h2>{val.price}</h2>
                        <p>{val.title}</p>
                        <p>{val.id}</p>
                        <p>
                            <button className='btn btn-warning'>Add to cart</button> &nbsp;&nbsp;
                            <Link to ={"/single-product/"+val.id} className='btn btn-success'>Details</Link>
                        </p>
                    </div>
                    )
            }
        </div>
        
        </div>
  )
}
