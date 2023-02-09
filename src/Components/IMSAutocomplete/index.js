import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

export default function IMSAutocomplete(props) {
  const navigate = useNavigate();
  const handlePageChange = (event) => {
    const path = event.target.innerText;
    navigate(`/${path}`);
  };
  let menu = props.menu;
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={menu}
      onChange={handlePageChange}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Menu Items" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
