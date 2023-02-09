import { useSelector } from "react-redux";
import Bakingo_cake from "../../Assets/Cakes/Bakingo_cake.jpg";
import snicker_chocolate_cake from "../../Assets/Cakes/Snicker_fuse_chocolate_cake.jpg";
import Chocolate_grape_cake from "../../Assets/Cakes/Chocolate_grape_cake.jpg";
import special_valsad_cake from "../../Assets/Cakes/special_valsad_cake.jpg";
import { Grid } from "@mui/material";
import ItemCard from "../../Components/ItemCard";
import { ordered as cakeordered } from "../../Features/Cake/cakeSlice";
import almondsuprise from "../../Assets/Chocolates/Almond_surprise_truffle_chocolates.jpg";
import cadburrysilk from "../../Assets/Chocolates/Cadbury_celebrations.jpg";
import hersheys from "../../Assets/Chocolates/Hersheys_kisses.jpg";
import Basket_ferror from "../../Assets/Chocolates/Basket_of_ferrero_rocher.jpg";
import summer from "../../Assets/Icecreams/Summer-Apricot-basil-icecream.jpg";
import death from "../../Assets/Icecreams/Death.jpg";
import brownieicecream from "../../Assets/Icecreams/brownie-with-ice-cream.jpg";
import truffles from "../../Assets/Icecreams/truffles.jpg";
import redwhiterose from "../../Assets/Flowers/roses.jpg";
import whiteroses from "../../Assets/Flowers/whiteroses.jpg";
import mixed from "../../Assets/Flowers/mixed.jpg";
import mixrose from "../../Assets/Flowers/mixrose.jpg";
import { ordered as icecreamordered } from "../../Features/Icecream/icecreamSlice";
import { ordered as chocolateordered } from "../../Features/Chocolate/chocolateSlice";
import { ordered as flowerordered } from "../../Features/Flower/flowerSlice";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Google } from "@mui/icons-material";

export default function Landingpage() {
  const cakes = useSelector((state) => state.cake.noOfCakes);
  console.log("No of Cakes", cakes);
  const icecream = useSelector((state) => state.icecream.noOfIcecreams);
  console.log("No of Icecreams", icecream);
  const chocolate = useSelector((state) => state.chocolate.noOfChocolates);
  console.log("No of Chocolates", chocolate);
  const gift = useSelector((state) => state.gift.noOfGifts);
  console.log("No of Gifts", gift);
  const flower = useSelector((state) => state.flower.noOfFlowers);
  console.log("No of Flowers", flower);

  const cakeList = [
    {
      title: "Snicker Fuse Chocolate ",
      subheader: " Snicker chocolate in the cake form",
      photo: snicker_chocolate_cake,
      actualPrice: 1200,
      discountedPrice: 800,
      rating: 4.8,
      sellingStatus: "Best Seller",
    },
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
      title: "Chocolate Grape Cake",
      subheader: "Enjoy fruit flavour of grape",
      photo: Chocolate_grape_cake,
      actualPrice: 2000,
      discountedPrice: 1750,
      rating: 4.0,
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
  ];
  const chocolateList = [
    {
      title: "Almond Suprise truffle ",
      photo: almondsuprise,
      actualPrice: 250,
      discountedPrice: 200,
      sellingstatus: "Best seller",
      rating: 4.7,
    },
    {
      title: "Ferrerorocher ",
      photo: Basket_ferror,
      actualPrice: 1500,
      discountedPrice: 1425,
      sellingstatus: "Permium",
      rating: 4.8,
    },
    {
      title: "Hersheys Kisses ",
      photo: hersheys,
      actualPrice: 20,
      discountedPrice: 18.5,
      sellingstatus: "Best seller",
      rating: 4.5,
    },
    {
      title: "Cadburry Silk",
      photo: cadburrysilk,
      actualPrice: 200,
      discountedPrice: 190,
      sellingstatus: "Best seller",
      rating: 5.0,
    },
  ];
  const icecreamList = [
    {
      title: "Truffle Icecream",
      photo: truffles,
      actualPrice: 225,
      discountedPrice: 200,
      sellingStatus: "Best Seller",
      rating: 5.0,
    },
    {
      title: "Death Icecream",
      photo: death,
      actualPrice: 250,
      discountedPrice: 200,
      sellingStatus: "Best Seller",
      rating: 5.0,
    },
    {
      title: "Brownie Icecream",
      photo: brownieicecream,
      actualPrice: 75,
      discountedPrice: 50,
      sellingStatus: "Best Seller",
      rating: 4.5,
    },
    {
      title: "Summer-Apricot-Basil",
      photo: summer,
      actualPrice: 450,
      discountedPrice: 400,
      sellingStatus: "Sold Out",
      rating: 4.8,
    },
  ];
  const flowerList = [
    {
      title: "Mixed Rose",
      photo: mixrose,
      actualPrice: 1200,
      discountedPrice: 950,
      sellingstatus: "Permium",
      rating: 5.0,
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
      sellingstatus: "Perimum",
      rating: 4.5,
    },
  ];
  let ap = "₹";
  let dp = "₹";
  let msg = "   items added to cart ";
  let msg1 = "Delivery in 60 mins";
  let orderbutton = "Add";
  return (
    <>
      <br />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ backgroundColor: "pink" }}
      >
        {cakeList.map((item) => {
          let discount = item.actualPrice - item.discountedPrice;
          let discountedPercentage = Math.floor(
            (discount / item.actualPrice) * 100
          );
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
                order={cakeordered}
                rating={item.rating}
                discountedPercentage={discountedPercentage}
              ></ItemCard>
            </Grid>
          );
        })}
      </Grid>
      <br />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ backgroundColor: "pink" }}
      >
        {chocolateList.map((item) => {
          let discount = item.actualPrice - item.discountedPrice;
          let discountedPercentage = Math.floor(
            (discount / item.actualPrice) * 100
          );
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
                seller={item.sellingstatus}
                order={chocolateordered}
                rating={item.rating}
                discountedPercentage={discountedPercentage}
              ></ItemCard>
            </Grid>
          );
        })}
      </Grid>
      <br />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ backgroundColor: "pink" }}
      >
        {icecreamList.map((item) => {
          let discount = item.actualPrice - item.discountedPrice;
          let discountedPercentage = Math.floor(
            (discount / item.actualPrice) * 100
          );
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
                order={icecreamordered}
                rating={item.rating}
                discountedPercentage={discountedPercentage}
              ></ItemCard>
            </Grid>
          );
        })}
      </Grid>
      <br />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ backgroundColor: "pink" }}
      >
        {flowerList.map((item) => {
          let discount = item.actualPrice - item.discountedPrice;
          let discountedPercentage = Math.floor(
            (discount / item.actualPrice) * 100
          );
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
                seller={item.sellingstatus}
                order={flowerordered}
                rating={item.rating}
                discountedPercentage={discountedPercentage}
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
    </>
  );
}
