import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import IMSSnackbar from "../../../Components/IMSSnackbar";
import { ordered, restocked, cancelled } from "../icecreamSlice";
import almond from "../../../Assets/Icecreams/almond.jpg";
import brownieicecream from "../../../Assets/Icecreams/brownie-with-ice-cream.jpg";
import chocobar from "../../../Assets/Icecreams/chocobar.jpg";
import choccolateicecream from "../../../Assets/Icecreams/chocolate-icecream.jpg";
import cone from "../../../Assets/Icecreams/cone.jpg";
import death from "../../../Assets/Icecreams/Death.jpg";
import solidreplacement from "../../../Assets/Icecreams/Solids-Replacement.jpg";
import summer from "../../../Assets/Icecreams/Summer-Apricot-basil-icecream.jpg";
import truffles from "../../../Assets/Icecreams/truffles.jpg";
import whipped from "../../../Assets/Icecreams/whipped.jpg";
import ItemCard from "../../../Components/ItemCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Google } from "@mui/icons-material";

export default function Icecreamview() {
  const dispatch = useDispatch();
  let icecreams = useSelector((state) => state.icecream.noOfIcecreams);
  let msg = "   items added to cart ";
  let msg2 = "Item Restocked";
  let msg3 = "Item cancelled";

  const icecreamList = [
    {
      title: "Almond Icecream",
      photo: almond,
      actualPrice: 35,
      discountedPrice: 30,
      sellingStatus: "Best Seller",
      rating: 4.6,
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
      title: "Chocobar Icecream",
      photo: chocobar,
      actualPrice: 50,
      discountedPrice: 35,
      sellingStatus: "Permium",
      rating: 3.9,
    },
    {
      title: "Chocolate Icecream",
      photo: choccolateicecream,
      actualPrice: 45,
      discountedPrice: 40,
      sellingStatus: "Out Of  Stock",
      rating: 5.0,
    },
    {
      title: "Cone Icecream",
      photo: cone,
      actualPrice: 75,
      discountedPrice: 50,
      sellingStatus: "Out Of Stock",
      rating: 4.0,
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
      title: "Solid-Repalcement Icecream",
      photo: solidreplacement,
      actualPrice: 300,
      discountedPrice: 250,
      sellingStatus: "Best Seller",
      rating: 5.0,
    },
    {
      title: "Summer-Apricot-Basil Icecream",
      photo: summer,
      actualPrice: 450,
      discountedPrice: 400,
      sellingStatus: "Sold Out",
      rating: 4.8,
    },
    {
      title: "Truffle Icecream",
      photo: truffles,
      actualPrice: 225,
      discountedPrice: 200,
      sellingStatus: "Best Seller",
      rating: 5.0,
    },
    {
      title: "Whipped Icecream",
      photo: whipped,
      actualPrice: 180,
      discountedPrice: 140,
      sellingStatus: "Permimum",
      rating: 5.0,
    },
  ];
  let ap = "Actual Price ₹";
  let dp = "Actual Price ₹";
  let orderbutton = "Add";

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ backgroundColor: "pink" }}
      >
        {icecreamList.map((item) => {
          return (
            <Grid item xs={3} justifyContent="center" display={"flex"}>
              <ItemCard
                title={item.title}
                photo={item.photo}
                actualPrice={item.actualPrice}
                discountedPrice={item.discountedPrice}
                ap={ap}
                dp={dp}
                seller={item.sellingStatus}
                orderbutton={orderbutton}
                msg={msg}
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

      {/* <h2>Number of Icecreams {icecreams}</h2>
            <Button onClick={()=>{
                dispatch(ordered(3))
            }}>
                <IMSSnackbar msg={msg1} orderbutton="Order"></IMSSnackbar>
            </Button>
            <Button onClick={()=>{
                dispatch(restocked(1))
            }}>
                <IMSSnackbar msg={msg2} orderbutton="Restock"></IMSSnackbar>
            </Button>
            <Button onClick={()=>{
                dispatch(cancelled(2))
            }}>
                <IMSSnackbar msg={msg3} orderbutton="Cancel order"></IMSSnackbar>
            </Button> */}
    </>
  );
}
