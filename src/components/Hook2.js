import React,{useState,useRef} from 'react'

export default function Hook2() {
    var[fname,setFname]= useState('aa');
    var [lname, setLname]= useState('bb');

    var x1=useRef();
    var x2=useRef();

    var myfunc=()=>{
        console.log(x1);
        console.log(x2);

        console.log(x1.current.value);
        console.log(x2.current.value);

        setFname(x1.current.value);
        setLname(x2.current.value);
    }

  return (
    <div>
<h2>Hook2</h2>
<input type='text' ref={x1} /> <br/>
<input type='text' ref={x2} /> <br/>
<button onClick={myfunc}>Get Vlaue</button>
<hr/>

{fname} , {lname}

    </div>
  )
}
