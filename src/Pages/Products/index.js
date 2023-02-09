import { Button, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Features/ProductList/productSlice";
import ItemCard from "../../Components/ItemCard/index";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const productsapi = useSelector((state) => state.products.products);
  console.log("Products API", productsapi);
  let dp = "$";
  let msg = "  item added to cart";
  let orderbutton = "Add";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <body>
        {productsapi.loading && <CircularProgress></CircularProgress>}
        {!productsapi.loading && productsapi.error ? (
          <Typography>Error:{productsapi.err}</Typography>
        ) : null}
        <Button
          onClick={() => {
            dispatch(fetchProducts());
            navigate("/ProductsApi");
          }}
        >
          Fetch Products
        </Button>
      </body>
    </>
  );
}
