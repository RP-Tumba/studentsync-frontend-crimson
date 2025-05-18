import { useContext, useEffect, useRef, useState } from "react"
import { PageContext } from "./StudentList";

export const Pages = (props) => {
    // const [number,setNumber] = useState(1)
    const [starting,setStarting] = useState(true)
    let {datas,setDatas,number,setNumber} = useContext(PageContext)
    let numberOfData = 10;
   
    return <div>
        {
            datas.map((data,index)=>{
                if((index + 1) >number*numberOfData-10 && (index +1)<number*numberOfData){
                    return <button key={index} onClick={()=>setNumber(index+1)}>{index+1}</button>
                }else{
                    return <></>
                }
            })
        }
    </div>

}

