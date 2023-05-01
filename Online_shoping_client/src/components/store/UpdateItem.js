import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./store.css";
import logo from '../../components/R.jpg'
import { useNavigate } from "react-router-dom";
import {useWepContext} from '../../context/WepContext'
import { Button, Card } from "react-bootstrap";
import FormatCurrency from "./FormatCurrency";
import Form from 'react-bootstrap/Form';

const UpdateItem = () => {
   
  
    const { NameItem, urlitem, priceitem, UpdateInformations, Category,CompanyItem,Barcode,Color,ProductionYear,Details,Update,updateItem } = useWepContext();
    const listOfItems = ["Phones", "Ipads", "Computers", "Headphones", "TV screens"]
    
    return (
      <div className="Addinformation">
  
        <div className="Addinformation-container">
          <h1>Update Item</h1>
          <form >
              <div className="information"> 
            <h5>Name Iteam</h5>
            <input
            required
              type="text"
              defaultValue={updateItem[0]?.name_Item}
              onChange={(e) => NameItem(e.target.value)}
              maxLength={30}
            />
            <h5>Img-Url</h5>
            <input
            required
            defaultValue={updateItem[0]?.img_Url}
              type="url"
              onChange={(e) => urlitem(e.target.value)}
            />
            <h5>price</h5>
            <input
            required
            defaultValue={updateItem[0]?.price_Item}
              type="text"
              onChange={(e) => priceitem(e.target.value)}
            />
            <h5>Details</h5>
            <input
            defaultValue={updateItem[1]?.details}
              type="text"
              onChange={(e) => Details(e.target.value)}
              
            />
            </div>
            <div className="information">
            <h5>Company</h5>
             <input
              type="text"
              defaultValue={updateItem[1]?.company}
              onChange={(e) => CompanyItem(e.target.value)}
              maxLength={19}
            />
            <h6>Barcode(cant change )</h6>
            <input
            required
              type="text"
              readOnly={updateItem[0]?.item_Barcode}
              minLength={3}
              maxLength={15}
            />
            <h5>Color</h5>
            <input
              type="text"
              defaultValue={updateItem[1]?.color}
              onChange={(e) => Color(e.target.value)}
              maxLength={10}
            />
            <h5>Production year</h5>
            <input
              type="text"
              defaultValue={updateItem[1]?.production_year}
              onChange={(e) => ProductionYear(e.target.value)}
              maxLength={10}
            />
            </div>
           
            <Form.Select aria-label="Default select example" onChange={(e) => Category(e.target.value)}>
              <option>Open this select menu</option>
              {listOfItems.map(x => (<option value={x}>{x}</option>))}
            </Form.Select>
            <button className="AddItem-signInBtn" type="submit"  onClick={()=>Barcode(updateItem[0]?.item_Barcode)}>
            Update Item
            </button>
          </form>
        </div>
      </div>
      )
  
};



export default UpdateItem;