export interface IIndex{
    start:number,
    end:number
 }


export interface IData{ 
    rank:string,
    logo:string,
    collageName:string,
    location:string,
    AICTE_status:string,
    Featured_Branch:string,
    Featured_Cutoff:string,
    Course_Fees:string,
    Course:string,
    Year_fee:string,
    Average_Package:string,
    Highest_Package:string,
    Review_Points:string,
    Total_Review_Points:string,
    Total_number_of_Reviews:string,
    Best_In:string,
    Ranking:string,
    Out_of:string,
    Top_Ranked_By:string,
    Top_Ranked_In_year:string,
    All_Ranked_By:Array<string>,
    Featured:boolean
}

export interface Itab{
    data:IData[],
    setData: React.Dispatch<React.SetStateAction<IData[]>>;
    setIsDataManipulated: React.Dispatch<React.SetStateAction<boolean>>
    isDataManipulated:boolean
}

export interface ICheckables{
    Highest_Rating:boolean
    Lowest_Rating:boolean
    Highest_Fees:boolean
    Lowest_Fees:boolean
    Highest_User_Review:boolean,
    Lowest_User_Review:boolean
}