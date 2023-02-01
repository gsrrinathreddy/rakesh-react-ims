import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked, cancelled } from "../chocolateSlice";
import almondsuprise from "../../../Assets/Chocolates/Almond_surprise_truffle_chocolates.jpg";
import cadburrysilk from "../../../Assets/Chocolates/Cadbury_celebrations.jpg";
import amuldark from "../../../Assets/Chocolates/Amul_dark_chocolate.jpg";
import Basket_ferror from "../../../Assets/Chocolates/Basket_of_ferrero_rocher.jpg";
import fivestar from "../../../Assets/Chocolates/Cadbury_5star_chocolate.jpg";
import galore from "../../../Assets/Chocolates/Chocolate_galore.jpg";
import dairymilk from "../../../Assets/Chocolates/Dairymilk_handmade_chocolates.jpg";
import galaxymilk from "../../../Assets/Chocolates/Galaxy_milk_chocolate.jpg";
import hersheys from "../../../Assets/Chocolates/Hersheys_kisses.jpg";
import snicker from "../../../Assets/Chocolates/Snickers_peanut_chocolate_bar.jpg";
import ItemCard from "../../../Components/ItemCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Google } from "@mui/icons-material";

export default function Chocolateview() {
  const dispatch = useDispatch();
  let chocolate = useSelector((state) => state.chocolate.noOfChocolates);
  let msg = "   items added to cart ";
  let msg2 = "Item Restocked";
  let msg3 = "Item cancelled";
  let msgbut = "Add";
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
      title: "Cadburry Silk",
      photo: cadburrysilk,
      actualPrice: 200,
      discountedPrice: 190,
      sellingstatus: "Best seller",
      rating: 5.0,
    },
    {
      title: "Amul Dark Chocolate",
      photo: amuldark,
      actualPrice: 180,
      discountedPrice: 175,
      sellingstatus: "Out Of Stock",
      rating: 4.5,
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
      title: "5 Star",
      photo: fivestar,
      actualPrice: 25,
      discountedPrice: 20,
      sellingstatus: "Out of Stock",
      rating: 4.2,
    },
    {
      title: "Chocolate Galore",
      photo: galore,
      actualPrice: 200,
      discountedPrice: 185,
      sellingstatus: "Best seller",
      rating: 3.7,
    },
    {
      title: "DairyMilk Chocolate",
      photo: dairymilk,
      actualPrice: 10,
      discountedPrice: 9.5,
      sellingstatus: "Best seller",
      rating: 4.3,
    },
    {
      title: "Galaxy Milk Chocolate",
      photo: galaxymilk,
      actualPrice: 15,
      discountedPrice: 10,
      sellingstatus: "Permium",
      rating: 4.2,
    },
    {
      title: "Hersheys Kisses Chocolate",
      photo: hersheys,
      actualPrice: 20,
      discountedPrice: 18.5,
      sellingstatus: "Best seller",
      rating: 4.5,
    },
    {
      title: "Snickers",
      photo: snicker,
      actualPrice: 25,
      discountedPrice: 20,
      sellingstatus: "Best seller",
      rating: 3.7,
    },
  ];
  let ap = "Actual Price ₹";
  let dp = "Actual Price ₹";
  let ordername = "chocolate";

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ backgroundColor: "pink" }}
      >
        {chocolateList.map((item) => {
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
                msg={msg}
                orderbutton={msgbut}
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

      {/* <h2>Number of Chocolates {chocolate} </h2>
            <Button onClick={()=>{
                dispatch(ordered(4))
            }}>
                <IMSSnackbar msg={msg1} orderbutton="Order "></IMSSnackbar>
            </Button>
            <Button onClick={()=>{
                dispatch(restocked(5))
            }}>
                <IMSSnackbar msg={msg2} orderbutton="Restock order"></IMSSnackbar>
            </Button>
            <Button onClick={()=>{
                dispatch(cancelled(3))
            }}>
                <IMSSnackbar msg={msg3} orderbutton="Cancel order"></IMSSnackbar>
            </Button> */}
    </>
  );
}
