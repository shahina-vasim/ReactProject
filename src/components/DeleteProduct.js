import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function DeleteProduct() {
    let params=useParams();
    // console.log(prams);
    // console.log(prams.productId);
    let navigate=useNavigate();
    useEffect(()=>{
console.log("do delete", params.productId);

axios
.delete('http://localhost:3004/product/'+params.productId)
.then((res)=>{
    console.log('Product deleted');
    console.log(res);
    navigate("/showproduct");//redirect
})

    },[])
  return (
    <div>DeleteProduct</div>
  )
}
