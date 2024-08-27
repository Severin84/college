"use client"
import React, { useEffect, useState } from 'react'
import { ICheckables, IData, Itab } from '../Types';
import Data from "../../../data.json";
import "./OtherTab.css"


const Othertab:React.FC<Itab> = ({data,setData,setIsDataManipulated,isDataManipulated}) => {
    
  const [sortQuery,setSortQuery]=useState<string>("");
  const [searchQuery,setSearchQuery]=useState<string>("");
  const [checkables,setCheckables]=useState<ICheckables>({
    Highest_Rating:false,
    Lowest_Rating:false,
    Highest_Fees:false,
    Lowest_Fees:false,
    Highest_User_Review:false,
    Lowest_User_Review:false
  });

  const sortData=()=>{
     if(sortQuery==="Highest Rating"){
        const newData=data.sort((a,b)=>parseInt(b.rank)-parseInt(a.rank))
        setData(newData)
        let newObj={
            Highest_Rating:true,
            Lowest_Rating:false,
            Highest_Fees:false,
            Lowest_Fees:false,
            Highest_User_Review:false,
            Lowest_User_Review:false
        }
         setCheckables(newObj)
     }else if(sortQuery==="Lowest Rating" ){
        const newData=data.sort((a,b)=>parseInt(a.rank)-parseInt(b.rank))
        setData(newData)
        let newObj={
            Highest_Rating:false,
            Lowest_Rating:true,
            Highest_Fees:false,
            Lowest_Fees:false,
            Highest_User_Review:false,
            Lowest_User_Review:false
        }
         setCheckables(newObj)
     }else if(sortQuery==="Highest Fees"){
        const newData=data.sort((a,b)=>parseInt(b.Course_Fees)-parseInt(a.Course_Fees))
        setData(newData)
        let newObj={
            Highest_Rating:false,
            Lowest_Rating:false,
            Highest_Fees:true,
            Lowest_Fees:false,
            Highest_User_Review:false,
            Lowest_User_Review:false
        }
         setCheckables(newObj)
     }else if(sortQuery==="Lowest Fees"){
        const newData=data.sort((a,b)=>parseInt(a.Course_Fees)-parseInt(b.Course_Fees))
        setData(newData)
        let newObj={
            Highest_Rating:false,
            Lowest_Rating:false,
            Highest_Fees:false,
            Lowest_Fees:true,
            Highest_User_Review:false,
            Lowest_User_Review:false
        }
         setCheckables(newObj)
     }else if(sortQuery==="Highest User Review"){
        const newData=data.sort((a,b)=>parseInt(b.Review_Points)-parseInt(a.Review_Points))
        setData(newData)
        let newObj={
            Highest_Rating:false,
            Lowest_Rating:false,
            Highest_Fees:false,
            Lowest_Fees:false,
            Highest_User_Review:true,
            Lowest_User_Review:false
        }
         setCheckables(newObj)
     }else if(sortQuery==="Lowest User Review"){
        const newData=data.sort((a,b)=>parseInt(a.Review_Points)-parseInt(b.Review_Points))
        setData(newData)
        let newObj={
            Highest_Rating:false,
            Lowest_Rating:false,
            Highest_Fees:false,
            Lowest_Fees:false,
            Highest_User_Review:false,
            Lowest_User_Review:true
        }
         setCheckables(newObj)
     }else{
        let newObj={
            Highest_Rating:false,
            Lowest_Rating:false,
            Highest_Fees:false,
            Lowest_Fees:false,
            Highest_User_Review:false,
            Lowest_User_Review:false
        }
        setCheckables(newObj)
     }
     setIsDataManipulated(!isDataManipulated)
  }

  const searchData=()=>{
    const newData=Data.filter((value)=>value.collageName.toLowerCase().includes(searchQuery.toLowerCase()));
    setData(newData);
  }

  useEffect(()=>{
    sortData()
  },[sortQuery])

  useEffect(()=>{
    searchData()
  },[searchQuery])

  return (
    <div className='NavBar'>
        <div className='NavBAr_Div'>
        <div className='NavBar_Input_Div'>
            <input placeholder='Search by Collage Name' type="text" onChange={(event)=>setSearchQuery(event.target.value)}/>
        </div>
        <div className='Navbar_CheckBox_Div'>
            <div className='NavBar_SpanAndCheckbox_binder'>
            <div className='SortBy'>
              <span>Sort By:</span>
            </div>
            <div className='NavBar_CheckBox'>
                <div>
                <input type="checkbox" checked={checkables.Highest_Rating} onClick={()=>setSortQuery("Highest Rating")}/>Highest Rating
                </div>
                <div>
                <input type="checkbox" checked={checkables.Lowest_Rating} onClick={()=>setSortQuery("Lowest Rating")}/>Lowest Rating
                </div>
                <div>
                <input type="checkbox" checked={checkables.Highest_Fees} onClick={()=>setSortQuery("Highest Fees")}/>Highest Fees
                </div>
                <div>
                <input type="checkbox" checked={checkables.Lowest_Fees} onClick={()=>setSortQuery("Lowest Fees")}/>Lowest Fees
                </div>
                <div>
                <input type="checkbox" checked={checkables.Highest_User_Review} onClick={()=>setSortQuery("Highest User Review")}/>Highest User Review
                </div>
                <div>
                <input type="checkbox" checked={checkables.Lowest_User_Review} onClick={()=>setSortQuery("Lowest User Review")}/>Lowest User Review
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Othertab