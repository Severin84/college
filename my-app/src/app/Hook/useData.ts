import { useState } from "react"
import Data from "../../../data.json"
import { IData } from "../Types"
type getDataFunction=()=>void
const useData=(start:number,end:number):[Array<IData>,boolean,getDataFunction]=>{
   
    const [jsonData,setJsonData]=useState<Array<IData>>([])
    const [loading,setLoading]=useState<boolean>(false)
     const getData:getDataFunction=()=>{
        setLoading(true)
        const newData=Data.slice(start,end);
        setJsonData(newData);
        setLoading(false)
     }

    return [jsonData,loading,getData];
}

export default useData
