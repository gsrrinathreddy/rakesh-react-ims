import { Button, Typography ,Box} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ordered as cakeordered ,cancelled as cakecancelled, ordered } from "../../Features/Cake/cakeSlice";
import { ordered as chocolateordered ,cancelled as chocolatecancelled } from "../../Features/Chocolate/chocolateSlice";
import { ordered as icecreamordered ,cancelled as icecreamcancelled} from "../../Features/Icecream/icecreamSlice";
import {ordered as giftordered ,cancelled as giftcancelled} from "../../Features/Gift/giftSlice";
import {ordered as flowerordered,cancelled as flowercancelled} from "../../Features/Flower/flowerSlice";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export default function Carts(){
    // const dispatch=useDispatch();
    // let orderedItems=useSelector((state)=>state.cake.cakeList);
    // let cakeorder=useSelector((state)=>state.cake.noOfOrdered);
    // let icecreamorder=useSelector((state)=>state.icecream.noOfOrdered);
    // let chocolateorder=useSelector((state)=>state.chocolate.noOfOrdered);
    // let giftorder=useSelector((state)=>state.gift.noOfOrdered);
    // let flowerorder=useSelector((state)=>state.flower.noOfOrdered);
   // console.log(orderedItems);
//    let orderedItemsArray = Object.entries(orderedItems).forEach(([key,value]) => {
//         console.log(`${key}:${value}`)
//    });
  // console.log(orderedItemsArray)


    let cartList=useSelector((state)=>state.cart.cartList);
    console.log("this is cartList",cartList);
    const navigate=useNavigate()
    let sum=0;
    return(
    
        <>

        <h3>Order Details</h3>


        <Box>

            <Grid container sx={{fontWeight:'bold'}}>
                    <Grid md={2}>
                        <Typography variant="h6" sx={{fontWeight:"bold"}}>
                            Name
                        </Typography>
                        {
                            cartList.map((item)=>{
                                return(
                                    <Typography>
                                        {item.title}
                                    </Typography>
                                )
                            })
                        }

                    </Grid>
                    <Grid md={2}>
                        <Typography variant="h6" sx={{fontWeight:"bold"}}>
                            qty
                        </Typography>
                        {
                            cartList.map((item)=>{
                                return(
                                    <Typography>
                                        {item.qty}
                                    </Typography>
                                )
                            })
                        }

                    </Grid>
                    <Grid md={2}>
                        <Typography variant="h6" sx={{fontWeight:"bold"}}>
                            Actual Price
                        </Typography>
                        {
                            cartList.map((item)=>{
                                return(
                                    <Typography>
                                        {item.actualPrice}
                                    </Typography>
                                )
                            })
                        }

                    </Grid>
                    <Grid md={2}>
                        <Typography variant="h6" sx={{fontWeight:"bold"}}>
                            Discounted Price
                        </Typography>
                        {
                            cartList.map((item)=>{
                                return(
                                    <Typography>
                                        {item.discountedPrice}
                                    </Typography>
                                )
                            })
                        }

                    </Grid>
                    <Grid md={3}>
                        <Typography variant="h6" sx={{fontWeight:"bold"}}>
                            Amount
                        </Typography>
                        {
                            cartList.map((item)=>{
                                sum +=(item.qty * item.discountedPrice)
                                return(
                                    <Typography>
                                     {item.qty * item.discountedPrice}
                                        
                                    </Typography>
                                )
                            })
                        }
                        Total Amount to be Paid :{sum}
                    </Grid>

            </Grid>
            
        </Box>



        {/*         
        {
            
            Object.entries(orderedItems).forEach(([key,value]) => {
                return (
                    <Typography>
                    `${key}     : ${value}`
                    </Typography>
                )
            })
        }             */
        }



            <br/>
{/*             
            <br/>
            <h3>Number of cakes Ordered  {cakeorder}  
                <Button onClick={()=>{
                    dispatch(cakecancelled(1))
                }}>-Remove</Button>
                <Button onClick={()=>{
                    dispatch(cakeordered(1))
                }}>+Add</Button>
            </h3>

            <h3>Number of Icecreams Ordered  {icecreamorder}
                <Button onClick={()=>{
                    dispatch(icecreamcancelled(2))
                }}>-Remove
                </Button>
                <Button onClick={()=>{
                    dispatch(icecreamordered(1))
                }}>+Add</Button>
            </h3>
            <h3>Number of chocolates Ordered {chocolateorder}
                <Button onClick={()=>{
                    dispatch(chocolatecancelled(1))
                }}>
                    -Remove
                </Button>
                <Button onClick={()=>{
                    dispatch(chocolateordered(1))
                }}>
                    +Add
                </Button>
            </h3>
            <h3>Number Gifts Ordered {giftorder} 
                <Button onClick={()=>{
                    dispatch(giftcancelled(1))
                }}>-Remove</Button>
                <Button onClick={()=>{
                    dispatch(giftordered(1))
                }}>+Add</Button>
            </h3>
            <h3>Number of Flowers Ordered  {flowerorder}
                <Button onClick={()=>{
                    dispatch(flowercancelled(1))
                }}>-Remove</Button>
                <Button onClick={()=>{
                    dispatch(flowerordered(1))
                }}>+Add</Button>
            </h3> */}
        </>
    )
}