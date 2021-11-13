
import React, { useEffect, useState } from "react";
import firebase from './../firebase';

import { Container } from "@mui/icons-material";

import HomeStyles from "./Home.style";


const MemberInformationScreen = () => {
  const ref  =  firebase.firestore().collection("memberList");

  const [data,setdata] = useState();
  const [loader, setloader] = useState(true);

  function getData(){
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push (doc.data())
      
      })
      setdata(items);
      setloader(false);
    })
  }
  useEffect(() =>  {
    getData()
  })
return <div>Member Information
{loader === false && (data.map((member) => (
   <div key = {member.id}>
    <h1>Name: {member.memberName}</h1>
    <p>Site: {member.memberSite}</p>
    <p>Address: {member.memberAddress}</p>

    </div>
) ))}
  </div>
};



export default MemberInformationScreen;