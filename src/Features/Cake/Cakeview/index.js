import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import IMSBadge from "../../../Components/IMSBadge";
import IMSSnackbar from "../../../Components/IMSSnackbar";
import { ordered, restocked, cancelled } from "../cakeSlice";
import Bakingo_cake from "../../../Assets/Cakes/Bakingo_cake.jpg";
import Cake_square from "../../../Assets/Cakes/Cake_square.jpg";
import { Box } from "@mui/system";
import ItemCard from "../../../Components/ItemCard";
import chocolate_funfetti from "../../../Assets/Cakes/Chocolate_funfetti.jpg";
import Chocolate_grape_cake from "../../../Assets/Cakes/Chocolate_grape_cake.jpg";
import Chocolate from "../../../Assets/Cakes/Chocolate.jpg";
import Cocomeloncake from "../../../Assets/Cakes/Cocomelon_cake.jpg";
import Eggless_chocolate from "../../../Assets/Cakes/Eggless_chocolate_cake.jpg";
import Fondat_wedding_cake from "../../../Assets/Cakes/Fondant_wedding_cake.jpg";
import Funfetti_cupcakes from "../../../Assets/Cakes/Funfetti_cupcakes.jpg";
import Numbercake from "../../../Assets/Cakes/Number-Cakes-Recipe.jpg";
import Rainbowcake from "../../../Assets/Cakes/Rainbow_cake.jpg";
import snicker_chocolate_cake from "../../../Assets/Cakes/Snicker_fuse_chocolate_cake.jpg";
import special_valsad_cake from "../../../Assets/Cakes/special_valsad_cake.jpg";
import VeganStrawberry from "../../../Assets/Cakes/Vegan-strawberry-cake.jpg";
import WeddingCakes from "../../../Assets/Cakes/Wedding_cake.jpg";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Google } from "@mui/icons-material";

export default function Cakeview() {
  const dispatch = useDispatch();
  const cakes = useSelector((state) => state.cake.noOfCakes);
  const ordercake = useSelector((state) => state.cake.noOfOrdered);
  console.log("no of cakes", cakes);
  let msg1 = "Delivery in 60 mins";
  let msg2 = "Item deleted";
  let msg3 = "Items Restocked";
  let orderbutton = "Add";

  const cakeList = [
    {
      title: "Bakingo Cake",
      subheader: "super cake",
      photo: Bakingo_cake,
      actualPrice: 1000,
      discountedPrice: 750,
      rating: 4.2,
      sellingStatus: "Best Seller",
    },
    {
      title: "Cake Square",
      subheader: "made from heart",
      photo: Cake_square,
      actualPrice: 2000,
      discountedPrice: 1250,
      rating: 4.3,
      sellingStatus: "Premium",
    },
    {
      title: "Chocolate Funfetti",
      subheader: "Have fun of chocolate flavor",
      photo: chocolate_funfetti,
      actualPrice: 200,
      discountedPrice: 150,
      rating: 4.5,
      sellingStatus: "Out of Stock",
    },
    {
      title: "Chocolate Grape Cake",
      subheader: "Enjoy fruit flavour of grape",
      photo: Chocolate_grape_cake,
      actualPrice: 2000,
      discountedPrice: 1750,
      rating: 4.0,
      sellingStatus: "Best Seller",
    },
    {
      title: "Chocolate",
      subheader: "Chocolate in cake",
      photo: Chocolate,
      actualPrice: 450,
      discountedPrice: 300,
      rating: 4.8,
      sellingStatus: "Best Seller",
    },
    {
      title: "Cocomelon Cake",
      subheader: "Super melon cake",
      photo: Cocomeloncake,
      actualPrice: 1000,
      discountedPrice: 800,
      rating: 3.5,
      sellingStatus: "Best Seller",
    },
    {
      title: "Fondant Wedding cake",
      subheader: "Make your wedding more sweetful and memorable",
      photo: Fondat_wedding_cake,
      actualPrice: 1400,
      discountedPrice: 700,
      rating: 3.6,
      sellingStatus: "Best Seller",
    },
    {
      title: "Eggless Cake",
      subheader: "Pure vegetarian cake",
      photo: Eggless_chocolate,
      actualPrice: 1500,
      discountedPrice: 800,
      rating: 3.6,
      sellingStatus: "Best Seller",
    },
    {
      title: "Funfetti Cup Cakes",
      subheader: "Have the fun with cup cakes",
      photo: Funfetti_cupcakes,
      actualPrice: 100,
      discountedPrice: 50,
      rating: 4.4,
      sellingStatus: "Best Seller",
    },
    {
      title: "Number cake Recipe",
      subheader: "Keep counting the numbers",
      photo: Numbercake,
      actualPrice: 2000,
      discountedPrice: 1600,
      rating: 4.1,
      sellingStatus: "Best Seller",
    },
    {
      title: "Rainbow Cake",
      subheader: "Its not all about watching the rainbow, you have it too",
      photo: Rainbowcake,
      actualPrice: 3000,
      discountedPrice: 2500,
      rating: 4.1,
      sellingStatus: "Best Seller",
    },
    {
      title: "Snicker Fuse Chocolate ",
      subheader: "Now have your favourite snicker chocolate in the cake form",
      photo: snicker_chocolate_cake,
      actualPrice: 1200,
      discountedPrice: 800,
      rating: 4.8,
      sellingStatus: "Best Seller",
    },
    {
      title: "Special Valsad Cake",
      subheader: "Gift it to your special ones",
      photo: special_valsad_cake,
      actualPrice: 1000,
      discountedPrice: 900,
      rating: 4.9,
      sellingStatus: "Best Seller",
    },
    {
      title: "Vegan Strawberry Cake",
      subheader: "Now its time for Strawberries",
      photo: VeganStrawberry,
      actualPrice: 2500,
      discountedPrice: 900,
      rating: 4.2,
      sellingStatus: "Best Seller",
    },
    {
      title: "Wedding Cake",
      subheader: "Wedding ...  with the cakes",
      photo: WeddingCakes,
      actualPrice: 3500,
      discountedPrice: 3000,
      rating: 4.7,
      sellingStatus: "Best Seller",
    },
  ];
  let ap = "Actual Price ₹";
  let dp = "Actual Price ₹";
  let msg = "   items added to cart ";

  return (
    <>
      <marquee>
        <h1>Delicious Cakes are Available with more Offers</h1>
      </marquee>
      <br />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ backgroundColor: "pink" }}
      >
        {cakeList.map((item) => {
          return (
            <Grid item xs={3} justifyContent="center" display="flex">
              <ItemCard
                title={item.title}
                subheader={item.subheader}
                photo={item.photo}
                actualPrice={item.actualPrice}
                discountedPrice={item.discountedPrice}
                dp={dp}
                ap={ap}
                orderbutton={orderbutton}
                msg={msg}
                m1={msg1}
                seller={item.sellingStatus}
                order={ordered}
                rating={item.rating}
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
            <h2>Number of cakes {cakes}</h2>
            <IMSBadge badgeContent={ordercake}></IMSBadge>
            <Button onClick={()=>{
                dispatch(ordered(5))
                
            }}>
                <IMSSnackbar msg={msg1} orderbutton={orderbutton}></IMSSnackbar>
            </Button>
            <Button onClick={()=>{
                dispatch(restocked(10))
            }}>
                <IMSSnackbar msg={msg3} orderbutton="Restocked"></IMSSnackbar>
            </Button>
            <Button onClick={()=>{
                dispatch(cancelled(1))
            }}>
                <IMSSnackbar msg={msg2} orderbutton="Cancel Order"></IMSSnackbar>
            </Button> */}
    </>
  );
}
