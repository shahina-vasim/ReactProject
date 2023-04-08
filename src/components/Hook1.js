import React,{useState} from 'react'

export default function Hook1() {
    // var xyz=useState('akshay');
    // console.log(xyz);
    var [username,setusername]=useState('akshay');
    // console.log(setusername);
    var myfunc =()=>{
        console.log('func called');
        console.log(username);
        setusername('akshay new');
    }
  return (
    <div>Hook1
        <hr/>
        {username}
        <button onClick={myfunc}>change</button>
    </div>
  )
}
