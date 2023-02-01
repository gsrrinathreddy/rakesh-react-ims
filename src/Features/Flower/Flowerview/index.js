import { useSelect } from "@mui/base";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import IMSSnackbar from "../../../Components/IMSSnackbar";
import { restocked, ordered, cancelled } from "../flowerSlice";
import combo from "../../../Assets/Flowers/combo.jpg";
import gerberas from "../../../Assets/Flowers/gerberas.jpg";
import lightrose from "../../../Assets/Flowers/lightrose.jpg";
import mixed from "../../../Assets/Flowers/mixed.jpg";
import mixrose from "../../../Assets/Flowers/mixrose.jpg";
import pinkrose from "../../../Assets/Flowers/pinkrose.jpg";
import Pinkvilla from "../../../Assets/Flowers/Pinkvilla.jpg";
import redblossom from "../../../Assets/Flowers/redblossom.jpg";
import rose from "../../../Assets/Flowers/rose.jpg";
import redwhiterose from "../../../Assets/Flowers/roses.jpg";
import whiteroses from "../../../Assets/Flowers/whiteroses.jpg";
import yellowrose from "../../../Assets/Flowers/yellow.jpg";
import ItemCard from "../../../Components/ItemCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Google } from "@mui/icons-material";

export default function Flowerview() {
  const dispatch = useDispatch();
  let flower = useSelector((state) => state.flower.noOfFlowers);
  let msg = "   items added to cart ";
  let msg2 = "Item Restocked";
  let msg3 = "Item cancelled";

  const flowerList = [
    {
      title: "Pink Rose",
      photo: pinkrose,
      actualPrice: 1000,
      discountedPrice: 800,
      sellingstatus: "Best seller",
      rating: 4.7,
    },
    {
      title: "Red Blossom",
      photo: redblossom,
      actualPrice: 1300,
      discountedPrice: 1000,
      sellingstatus: "Best seller",
      rating: 4.7,
    },
    {
      title: "White and Red Roses",
      photo: redwhiterose,
      actualPrice: 1000,
      discountedPrice: 800,
      sellingstatus: "Best seller",
      rating: 5.0,
    },
    {
      title: "White Roses",
      photo: whiteroses,
      actualPrice: 1000,
      discountedPrice: 800,
      sellingstatus: "Out Of Stock",
      rating: 4.5,
    },
    {
      title: "Yellow Flowers",
      photo: yellowrose,
      actualPrice: 800,
      discountedPrice: 600,
      sellingstatus: "Out of tock",
      rating: 4.8,
    },
    {
      title: "Red Rose",
      photo: rose,
      actualPrice: 1000,
      discountedPrice: 750,
      sellingstatus: "Permium",
      rating: 4.3,
    },
    {
      title: "Mixed Flowers",
      photo: mixed,
      actualPrice: 1000,
      discountedPrice: 800,
      sellingstatus: "Best seller",
      rating: 4.3,
    },
    {
      title: "Gerberas Flower",
      photo: gerberas,
      actualPrice: 1500,
      discountedPrice: 1000,
      sellingstatus: "Best seller",
      rating: 4.7,
    },
    {
      title: "Mixed Rose",
      photo: mixrose,
      actualPrice: 1200,
      discountedPrice: 950,
      sellingstatus: "Permium",
      rating: 5.0,
    },
  ];

  let orderbutton = "Add";
  let ordername = "flower";
  let ap = "Actual Price ₹";
  let dp = "Actual Price ₹";
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ backgroundColor: "pink" }}
      >
        {flowerList.map((item) => {
          return (
            <Grid item xs={3} justifyContent="center" display={"flex"}>
              <ItemCard
                title={item.title}
                photo={item.photo}
                actualPrice={item.actualPrice}
                discountedPrice={item.discountedPrice}
                ap={ap}
                dp={dp}
                seller={item.sellingstatus}
                orderbutton={orderbutton}
                msg={msg}
                rating={item.rating}
                order={ordered}
              ></ItemCard>
            </Grid>
          );
        })}
      </Grid>

      <Box
        sx={{ backgroundColor: "pink" }}
        justifyContent="space-between"
        pt={5}
      >
        <h1>Contact with Us :</h1>
        <InstagramIcon></InstagramIcon>
        <FacebookIcon></FacebookIcon>
        <LinkedInIcon></LinkedInIcon>
        <Google></Google>
      </Box>

      {/* 
            <h2>Number of flowers {flower} </h2>
            <Button onClick={()=>{
                dispatch(ordered(4))
            }}>
                <IMSSnackbar msg={msg1} orderbutton="Order"></IMSSnackbar>
            </Button>
            <Button onClick={()=>{
                dispatch(restocked(5))
            }}>
                <IMSSnackbar msg={msg2} orderbutton="Restock"></IMSSnackbar>
            </Button>
            <Button onClick={()=>{
                dispatch(cancelled(3))
            }}>
                <IMSSnackbar msg={msg3} orderbutton="Cancel order"></IMSSnackbar>
            </Button> */}
    </>
  );
}
