import logo from "./logo.svg";
import "./App.css";
import IMSAppbar from "./Components/IMSAppbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cake from "./Pages/Cake";
import Icecream from "./Pages/Icecream";
import Chocolate from "./Pages/Chocolate";
import Gifts from "./Pages/Gifts";
import Flowers from "./Pages/Flowers";
import Carts from "./Pages/Carts";
import Bakery from "./Pages/Bakery";
import Delivery from "./Pages/Delivery";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import Account from "./Pages/Account";
import Dashboard from "./Pages/Dashboard";
import Logout from "./Pages/Logout";

function App() {
  const p1 = ["Cake", "Icecream", "Chocolate", "Gifts", "Flowers"];
  const s1 = ["Profile", "Account", "Dashboard", "Delivery", "Logout"];
  let lp = "Bakery";
  console.log("updated");
  return (
    <div className="App">
      <BrowserRouter>
        <IMSAppbar pages={p1} settings={s1} landingpage={lp}></IMSAppbar>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Cake" element={<Cake />}></Route>
          <Route path="/Icecream" element={<Icecream />}></Route>
          <Route path="/Chocolate" element={<Chocolate />}></Route>
          <Route path="Gifts" element={<Gifts />}></Route>
          <Route path="/Flowers" element={<Flowers />}></Route>
          <Route path="/Carts" element={<Carts />}></Route>
          <Route path="/" element={<Flowers />}></Route>
          <Route exact path="/Delivery" element={<Delivery />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/back" element={<Cake />}></Route>
          <Route path="/Account" element={<Account />}></Route>
          <Route path="Dashboard" element={<Dashboard />}></Route>
          <Route path="Logout" element={<Logout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
