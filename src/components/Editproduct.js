
import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom'

export default function Editproduct() {
    var [record,setRecord]=useState({});
    var {productId}=useParams();
    var navigate=useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:3004/product"+productId).then(res=>{
            console.log(res.data);
            setRecord(res.data)
        })

    },[]);
var myfunc1=(ev)=>{
    console.log(ev.target.value);
    console.log(record);
    setRecord({...record,title:ev.target.value})
}

var myfunc1=(ev)=>{
    console.log(ev.target.value);
    console.log(record);
    setRecord({...record,title:ev.target.value})
}

var myfunc2=(ev)=>{
    console.log(ev.target.value);
    console.log(record);
    setRecord({...record,price:ev.target.value})
}

var myfunc3=(ev)=>{
    console.log(ev.target.value);
    console.log(record);
    setRecord({...record,category:ev.target.value})
}

var myfunc4=(ev)=>{
    console.log(ev.target.value);
    console.log(record);
    setRecord({...record,image:ev.target.value})
}

var myfunc5=(ev)=>{
    console.log(ev.target.value);
    console.log(record);
    setRecord({...record,description:ev.target.value})
}
var myfunc=(ev)=>{
    console.log(ev.target.value);
    console.log(ev.target.name);
    var x1=ev.target.name;
    // console.log(record)
    setRecord({...record,[x1]:ev.target.value})
    console.log(record)
}

var onsubmit=(ev)=>{
    ev.preventDefault();
    console.log(record);
    
    axios.put("http://localhost:3004/product"+productId,record).then(res=>{
            console.log('product updadate');
            console.log(res)
            navigate("/show-data");
        })

}
  return (
    <div className='container'>
    
    <h1>Editproduct</h1>
   {/*<form onSubmit={onsubmit}>
    <input type='text' onChange={myfunc1} value={record.title} className='form-control' /><br/>
    <input type='text' onChange={myfunc2} value={record.price} className='form-control' /><br/>
    <input type='text' onChange={myfunc3} value={record.category} className='form-control' /><br/>
    <input type='text' onChange={myfunc4} value={record.image} className='form-control' /><br/>
    <textarea onChange={myfunc5} value={record.description}></textarea><br/>
    <button>update</button>




    </form>
    */} 
    <form onSubmit={onsubmit}>
    <input type='text' name='title' onChange={myfunc} value={record.title} className='form-control' /><br/>
    <input type='text' name='price' onChange={myfunc} value={record.price} className='form-control' /><br/>
    <input type='text' name='category' onChange={myfunc} value={record.category} className='form-control' /><br/>
    <input type='text' name='image' onChange={myfunc} value={record.image} className='form-control' /><br/>
    <textarea onChange={myfunc} name="description" value={record.description}></textarea><br/>
    <button>update</button>




    </form>
    
    </div>
  )
}
