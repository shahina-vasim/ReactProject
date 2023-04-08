import React,{useState,useEffect} from 'react'

export default function Hook4() {

    var [count, setCount]=useState(0);
    var [number,setNumber]=useState(100);

    // this is working as a componentdidupdate
    useEffect(()=>{
        console.log('use effect called', count)
    })

    //this is working as component did mount
    // useEffect(()=>{
    //     console.log('use effect called', count);
    // },[])

// if there is a change in state variable number
    // useEffect(()=>{
    //     console.log('use effect called', count);
    // },[number])

    //this is working as will mount 
    // useEffect(()=>{
    //     console.log('use effect called', count);
    //     return()=>{console.log('will unmount cycle')}
    // },[])

    var myfunc=()=>{
        setCount(count+1)
    }
    
    var myfunc1=()=>{
        setNumber(200)
    }
  return (
    <div className='container'>
        <h1>Hook4</h1>
        <p>COUNT:{count}</p>
        <p>Number:{number}</p>
        <button onClick={myfunc}>Chnage</button>
        <button onClick={myfunc1}>change number</button>

    </div>
  )
}
