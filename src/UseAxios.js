import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'

export default function UseAxios(apipath) {
    const[api,setApi]=useState([]);
    useEffect(()=>{
        axios.get(apipath).then(res=>{
            setApi(res.data)
        })
    },[]);
  return api;
}
