import { useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import ItemCard from "../../Components/ItemCard";
import { ordered } from "../../Features/ProductList/productitems";
import { Wished } from "../../Features/ProductList/productitems";
export default function ProductsApi() {
  const productsapi = useSelector((state) => state.products.products);
  console.log("Products API", productsapi);
  let dp = "$";
  let msg = "  item added to cart";
  let orderbutton = "Add";

  const dispatch = useDispatch();
  return (
    <>
      <br />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ backgroundColor: "pink" }}
      >
        {!productsapi.loading && productsapi.length
          ? productsapi.map((item) => {
              return (
                <Grid item xs={3} justifyContent="center" display="flex">
                  <ItemCard
                    title={item.title}
                    photo={item.thumbnail}
                    rating={item.rating}
                    seller={item.brand}
                    discountedPrice={item.price}
                    dp={dp}
                    m1={item.category}
                    msg={msg}
                    orderbutton={orderbutton}
                    order={ordered}
                    discountedPercentage={item.discountPercentage}
                    favorder={Wished}
                  ></ItemCard>
                </Grid>
              );
            })
          : null}
      </Grid>
    </>
  );
}
