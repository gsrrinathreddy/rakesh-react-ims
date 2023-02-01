import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState(true);
  // const [state1,setState1]=useState(true)

  useEffect(() => {
    // return()=>
    {
      console.log("Yash");
    }
  });

  const handelClick = () => {
    setState(!state);
  };
  // const handelClick1=()=>{
  //     setState1(!state1)
  // }
  return (
    <>
      This is Home page
      <Button onClick={handelClick}>Change</Button>
      {/* <Button onClick={handelClick1} >Change</Button> */}
    </>
  );
}
