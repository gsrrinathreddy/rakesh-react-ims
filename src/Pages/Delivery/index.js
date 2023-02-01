import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import IMSStepper from "../../Components/IMSStepper";

export default function Delivery() {
  const cartList = useSelector((state) => state.cart.cartList);
  console.log("cart list", cartList);
  return (
    <>
      This is Delivery page
      {cartList.map((item) => {
        return (
          <Typography>
            <IMSStepper itemsorder={item.title}></IMSStepper>
            {item.title}
          </Typography>
        );
      })}
    </>
  );
}
