import React ,{useState} from 'react'
import style from "./style.module.css"
const Counter = () => {

    const [count ,setcount]=useState(0)
     const fa=(e)=>{
        if(e.target.name==="inc"){
           setcount(count+1) 
        }
        if(e.target.name==="dub"){
           setcount(count*2) 
        }
        if(e.target.name==="dec"){
        setcount(count-1) 
        }


     }


  return (
    <div className={style.bl}><p className={count%2===0 ? style.green :style.red}>
        counter :{count}
    </p>
       <div >

       <button name="inc" onClick={fa}>Increment</button>
       <button name="dec" onClick={fa}>Decrement</button>
       <button name="dub"  onClick={fa}>Dubble</button>
    </div>
    </div>
  )
}

export default Counter