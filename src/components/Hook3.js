import React,{useState,useRef} from 'react'

export default function Hook3() {
    var [name,setName]=useState('shahina');
    var [age,setAge]=useState('20');
    var [hobbies,setHobbies]=useState(['cricket','football']);
    var [info,setInfo]=useState({place:"mumbai",degree:'Graduate'});
    var x1=useRef();

    var myfunc =function(){
        setName('shahina ashrafi');
        setAge(30);
        setHobbies([...hobbies,'swimming','reading']);
        // setInfo({...info, role:'developer'});
        setInfo({...info, role:x1.current.value});
        console.log(x1.current.value);
    }


  return (
    <div className='container'>
        <h1>Hook 3</h1>
        <p>
            Name:{name}
        </p>
        <p>
            Age:{age}
        </p>
        <p>
            Hobbies:
            <ul>
                {
                    hobbies.length>0 && hobbies.map(val=>
                        <li>{val}</li>
                        )
                }
            </ul>
        </p>
        <p>
            Place:{info.place}
        </p>
        <p>
            Role:{info.role}
        </p>
        <p>
            <input type='text' ref={x1}/>
            <button onClick={myfunc}>Enter</button>
        </p>
    </div>
  )
}
