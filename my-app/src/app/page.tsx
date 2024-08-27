
"use client"
import "./Home.css";
import pic from "../../utils/Images/iitM.png";
import indiaT from "../../utils/Images/indiaT.png";
import nirf from "../../utils/Images/nirf.png";
import outlook from "../../utils/Images/outlook.png";
import pngegg from "../../utils/Images/pngegg.png"
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { MdCurrencyRupee } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useCallback, useEffect, useState } from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaCircle } from "react-icons/fa6";
import Data from "../../data.json"
import useData from "./Hook/useData";
import Othertab from "./OtherTab/Othertab";
import { IData, IIndex } from "./Types";


export default function Home() {
 
  const [data,setData]=useState<Array<IData>>([])
  const [isDataManipulated,setIsDataManipulated]=useState<boolean>(false);
  const [index,setIndex]=useState<IIndex>({
    start:0,
    end:10
  })
  const [JsonData,loading,getData]=useData(index.start,index.end);

 useEffect(()=>{
  const response=Data.slice(index.start,index.end);
  setData(response)
  let newObj={
    start:index.end,
    end:index.end+10
  }
  setIndex(newObj)
 },[])
 
 useEffect(()=>{
     if(!loading && JsonData?.length>0){
       setData([...data,...JsonData])
     }
 },[JsonData,loading])


 const handleScroll=useCallback(()=>{
   if(window.innerHeight+window.scrollY >= document.body.scrollHeight){
      let newObj={
        start:index.end,
        end:index.end+10
      }
      setIndex(newObj);
      getData();
   }
},[])

 useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll)
 },[loading])


 useEffect(()=>{

 },[isDataManipulated])


  return (
    <div  className="Main_Div">
      <div className="Main_NavBar">
        <Othertab data={data} setData={setData} isDataManipulated={isDataManipulated} setIsDataManipulated={setIsDataManipulated}/>
      </div>
      <div className="Main_Table_Div">
       <table className="Main_Table">
        <thead className="Main_Table_Head">
        <tr className="Main_Table_Row">
          <th>CD Rank</th>
          <th>Colleges</th>
          <th>Course Fees</th>
          <th>Placement</th>
          <th>User Reviews</th>
          <th>Ranking</th>
        </tr>
        </thead>
        {  data.map((value,index)=>(
              <tbody key={index} className="Main_Table_Content_Body">   
              <tr className={value.Featured===true?"Main_Table_Content_Body_Row_Featured":"Main_Table_Content_Body_Row"}>
                <td className="rank">{`#${value?.rank}`}</td>
                <td>
                  <div className="Collages_Info_Div">
                    <div className="Collage_ImageAndTitleBinder">
                       <div className="Collage_Image_Div">
                         <RiGraduationCapFill className="Collage_Image"/>
                       </div>
                    <div>
                    <div className="Collage_Name">
                       <span>{value?.collageName}</span>
                    </div>
                    <div className="Collage_LocationAnd_AICTE">
                      <span>{value?.location}</span>
                      <span>{` | ${value.AICTE_status}`}</span>
                    </div>
                    </div>
                    </div>
                    <div className="Collage_CourseAndCutoff_Binder">
                      <div>
                      <div className="Collage_Course">
                        <span>{value.Featured_Branch}</span>
                      </div>
                      <div>
                        <span>{value.Featured_Cutoff}</span>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className="Collages_Utils">
                    <div className="Collages_Utils_Apply_Now">
                      <div><FaAngleRight /></div>
                      <div>
                        <span>{"Apply Now"}</span>
                      </div>
                    </div>
                    <div className="Collages_Utils_Download">
                    <div><LuDownload /></div>
                      <div>
                        <span>{"Download Brochure"}</span>
                      </div>
                    </div>
                    <div className="Collages_Utils_Compare">
                    <div>
                      <input type="checkbox"/>
                    </div>
                      <div>
                        <span>{"Add to Compare "}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="Course_Fee_Utils">
                    <div className="Course_Fee">
                       <div className="Fee">
                         <div><MdCurrencyRupee /></div>
                         <span>{value.Course_Fees}</span>
                       </div>
                    <div className="Fee_details">
                      <div>{value.Course}</div>
                      <div>{value.Year_fee}</div>
                    </div>
                    </div>
                    <div className="Course_Utils">
                      <div><FaArrowRightArrowLeft /></div>
                      <div><span>Compare Fees</span></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="Placements">
                    <div className="Placements_Average_Utils">
                      <div className="Placements_Average">
                          <div><MdCurrencyRupee /></div>
                          <div><span>{value.Average_Package}</span></div>
                      </div>
                      <div  className="Placements_A_Utils"><span>{"Average Package"}</span></div>
                    </div>
                    <div className="Placements_Highest_Utils">
                      <div className="Placements_Highest">
                          <div><MdCurrencyRupee /></div>
                          <div><span>{value.Highest_Package}</span></div>
                      </div>
                      <div className="Placements_H_Utils"><span>{"Highest Package"}</span></div>
                    </div>
                    <div className="Course_Utils">
                      <div><FaArrowRightArrowLeft /></div>
                      <div><span>Compare Placement</span></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="User_Reviews_Div">
                    <div className="User_ReviewsAndRating">
                      <div className="User_Rating"><div style={{display:"flex"}}><FaCircle style={{color:"orange",fontSize:"0.5rem",paddingTop:"0.25rem",paddingRight:"0.25rem"}}/><span>{`${value.Review_Points}/${value.Total_Review_Points}`}</span></div></div>
                      <div className="User_Reviews">
                        <div><span>{`Based on ${value.Total_number_of_Reviews} User`}</span></div>
                        <div><span>{"Reviews"}</span></div>
                      </div>
                    </div>
                    <div className="Best_Tags">
                      <div className="Tags">
                        <div><IoMdCheckmark /></div>
                        <div className="Tags_title"><span>Best in Social Life</span></div>
                        <div><MdKeyboardArrowDown /></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="Rankings">
                    <div className="Rankings_Mag_Binder">
                      <div style={{display:"flex"}}>
                      <span>{`#${value.Ranking}`}</span>
                      <sub style={{marginTop:"-0.2rem"}}>th</sub>
                      <span>{`/${value.Out_of} in India`}</span>
                      </div>
                      <div className="Ranking_Image_Year_Binder">
                        <Image style={{width:"2rem",height:"2rem",borderRadius:"1rem"}} src={indiaT} alt="Mag_Pic"/>
                        <span className="Ranking_year">{"2023"}</span>
                      </div>
                    </div>
                    <div className="All_Mag_Rankings" >
                       <div className="All_Mag_Rankings_Images" style={{position:"relative"}}>
                         <Image className="All_Mag_Rankings_Images1"  style={{width:"2rem",height:"2rem",borderRadius:"1rem"}} src={nirf} alt="image1"/>
                         <Image  className="All_Mag_Rankings_Images2"  style={{width:"2rem",height:"2rem",borderRadius:"1rem"}}  src={outlook} alt="image1"/>
                         <Image  className="All_Mag_Rankings_Images3"  style={{width:"2rem",height:"2rem",borderRadius:"1rem"}} src={pngegg} alt="image1"/>
                       </div>
                       <div>
                          <span>+9 More</span>
                       </div>
                    </div>
                  </div>
                </td>
              </tr>
              </tbody>
            ))
          }
       </table>
       </div>
    </div>
  );
}
