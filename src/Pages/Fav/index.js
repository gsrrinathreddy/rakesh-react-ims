import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import ItemCard from "../../Components/ItemCard";

export default function Fav() {
  const favorder = useSelector((state) => state.cake.noOfWishCakes);
  console.log("Fav page", favorder);
  const favList = useSelector((state) => state.fav.favList);
  console.log("fav page list", favList);

  let ap = "₹";
  let dp = "₹";
  let msg1 = "Delivery in 60 mins";
  let orderbutton = "Add";
  return (
    <>
      This is fav page
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ backgroundColor: "pink" }}
      >
        {favList.map((item) => {
          let discount = item.actualPrice - item.discountedPrice;
          let discountedPercentage = Math.floor(
            (discount / item.actualPrice) * 100
          );
          let discountpercent = item.discountPercentage;
          return (
            <Grid item xs={3} justifyContent="center" display="flex">
              <ItemCard
                title={item.title}
                photo={item.photo}
                actualPrice={item.actualPrice}
                discountedPrice={item.discountedPrice}
                dp={dp}
                ap={ap}
                orderbutton={orderbutton}
                discountedPercentage={discountedPercentage}
                discountpercent={discountpercent}
                m1={msg1}
                seller={item.seller}
                rating={item.rating}
              ></ItemCard>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
