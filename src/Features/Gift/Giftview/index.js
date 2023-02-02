import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import IMSSnackbar from "../../../Components/IMSSnackbar";
import { ordered, restocked, cancelled } from "../giftSlice";
import bullockcart from "../../../Assets/Gifts/bullockcart.jpg";
import cashewcombo from "../../../Assets/Gifts/cashewcombo.jpg";
import ItemCard from "../../../Components/ItemCard";
import ceramicmug from "../../../Assets/Gifts/ceramicmug.jpg";
import couplelamp from "../../../Assets/Gifts/couplelamp.jpg";
import crystalttree from "../../../Assets/Gifts/crystaltree.jpg";
import glassgift from "../../../Assets/Gifts/glassgift.jpg";
import lamp from "../../../Assets/Gifts/lamp.jpg";
import leatherbag from "../../../Assets/Gifts/leatherbag.jpg";
import lordkrishna from "../../../Assets/Gifts/lordkrishna.jpg";
import buddhaidoal from "../../../Assets/Gifts/buddhaidol.jpg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Google } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Giftview() {
  const giftList = [
    {
      title: "Bullock Cart",
      photo: bullockcart,
      actualPrice: 2000,
      discountedPrice: 1600,
      sellingstatus: "Best Seller",
      rating: 4.7,
    },
    {
      title: "Cashew Combo",
      photo: cashewcombo,
      actualPrice: 1000,
      discountedPrice: 800,
      sellingstatus: "Permium",
      rating: 4.2,
    },
    {
      title: "Ceramic Mug",
      photo: ceramicmug,
      actualPrice: 500,
      discountedPrice: 300,
      sellingstatus: "Best Seller",
      rating: 3.7,
    },
    {
      title: "Couple Lamp",
      photo: couplelamp,
      actualPrice: 800,
      discountedPrice: 400,
      sellingstatus: "Best Seller",
      rating: 3.5,
    },
    {
      title: "Crystal Tree",
      photo: crystalttree,
      actualPrice: 1000,
      discountedPrice: 800,
      sellingstatus: "Best Seller",
      rating: 4.0,
    },
    {
      title: "Glass Gift",
      photo: glassgift,
      actualPrice: 600,
      discountedPrice: 400,
      sellingstatus: "Best Seller",
      rating: 4.2,
    },
    {
      title: "Lamp",
      photo: lamp,
      actualPrice: 1200,
      discountedPrice: 1000,
      sellingstatus: "Out Of Stock",
      rating: 3.6,
    },
    {
      title: "Leather Bag",
      photo: leatherbag,
      actualPrice: 1500,
      discountedPrice: 1100,
      sellingstatus: "Out Of Stock",
      rating: 3.7,
    },
    {
      title: "Lord Krishna",
      photo: lordkrishna,
      actualPrice: 1800,
      discountedPrice: 1500,
      sellingstatus: "Best Seller",
      rating: 5.0,
    },
  ];
  let list = ["Actual Price ₹", "Discounted Price ₹"];
  const dispatch = useDispatch();
  let gift = useSelector((state) => state.gift.noOfGifts);
  let msg = "   items added to cart ";
  let msg2 = "Delivery in 45 mins";
  let msg3 = "Item cancelled";
  let orderbutton = "Add";
  let ordername = "gift";
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
        {giftList.map((item) => {
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
                order={ordered}
                rating={item.rating}
                m1={msg2}
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

            <h2>Number of Gifts {gift}</h2>
            <Button onClick={()=>{
                dispatch(ordered(3))
            }}>
                <IMSSnackbar msg={msg1} orderbutton="Order"></IMSSnackbar>
            </Button>
            <Button onClick={()=>{
                dispatch(restocked(5))
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
