import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const{ userId } =useParams();
    
    const [data ,setData]=useState({});
  
    
      useEffect(()=>{
        async function getData(){
          const get =await fetch (`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`);
          
          const res = await get.json();
          setData(res[0]);
         console.log(res);
        }
        getData();
  
       
      },[])
    
  return (
    <div>

        <h1>userID:- {data.id}</h1>
        <img src={data.imageUrl}></img>
        <h4>{data.firstName}</h4>
        <h4>{data.age}</h4>
        <h4>{data.dob}</h4>
        <h4>{data.salary}</h4>
        <h4>{data.address}</h4>
    </div>
  )
}

export default UserDetails