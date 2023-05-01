import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Store from "./components/store/Store";
import About from "./components/About";
import WepProvider from "./context/WepContext";
import Login from "./components/users/Login";
import Logout from "./components/users/logout";
import SignUpAsBusiness from './components/users/signUpAsBusiness'
import SignUpAsRegular from './components/users/signUpAsRegular'
import SignUpAsAdmin from "./components/users/signUpAsAdmin";
import AddItem from './components/store/AddItem'
import DeleteFromStore from "./components/store/DeleteFromStore";
import Errorpage from "./components/Errorpage"
import Users from "./components/users/Users"
import Orders from "./components/order/Orders";
import OrderForUser from "./components/order/OrderForUser";
import AddInformations from "./components/deviceInformations/AddInformations";
import DeviceInformations from "./components/deviceInformations/DeviceInformations";
import DeleteUser from "./components/users/DeleteUser";
import UpdateItem from "./components/store/UpdateItem";

const localUser = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user"))
: "";
const App = () => {
 
  return (
    
    
    <WepProvider>
      <Navbar/>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/add-items"   element={localUser==="admin"?<AddItem/>:localUser==="business"?<AddItem/>:<Errorpage/>} />
          <Route path="/Add-Informations"   element={localUser==="admin"?<AddInformations/>:localUser==="business"?<AddInformations/>:<Errorpage/>} />
          <Route path="/DeviceInformations" element={<DeviceInformations/> }/>
          <Route path="/delete-item"   element={localUser==="admin"?<DeleteFromStore/>:localUser==="business"?<DeleteFromStore/>:<Errorpage/>} />
          <Route path="/updateItem"   element={localUser==="admin"?<UpdateItem/>:localUser==="business"?<UpdateItem/>:<Errorpage/>} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in"   element={<Login/>}/>
          <Route path="/sign-Out"   element={<Logout/>}/>
          <Route path="/delete-account"   element={<DeleteUser/>}/>
          <Route path="/business-registration"   element={<SignUpAsBusiness/>} />
          <Route path="/regular-registration"   element={<SignUpAsRegular/>} />
          <Route path="/Admin-registration"   element={<SignUpAsAdmin/>} />
          <Route path="/Users" element={localUser==="admin"?<Users/>:<Errorpage/>} />
          <Route path="/Orders" element={localUser==="admin"?<Orders/>:<Errorpage/>} />
          <Route path="/OrderForUser" element={<OrderForUser/>} />
          <Route path="*"   element={<Errorpage/>} />
          
         
        </Routes>
      </Container>
    </WepProvider>
    
    
  );
};

export default App;
