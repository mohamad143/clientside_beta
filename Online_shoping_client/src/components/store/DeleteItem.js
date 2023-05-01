
import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./store.css";
import logo from '../../components/R.jpg'
import { useNavigate } from "react-router-dom";
import {useWepContext} from '../../context/WepContext'
import { Button, Card } from "react-bootstrap";
import FormatCurrency from "./FormatCurrency";
import UpdateItem from "./UpdateItem";

const DeleteItem = (item) => {
  
  const {removeFromStore,StoreitemData,InformationsData,UpdateItem}=useWepContext();
  const navigate = useNavigate();
  const Update=()=>{
    const newitem=StoreitemData?.find(i=>i.item_Barcode==item.item_Barcode)
    const information=InformationsData?.find(i=>i.barcode==item.item_Barcode) 
     
    UpdateItem([newitem,information])
    navigate("/updateItem")
  }
  
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={item.img_Url}
        style={{ height: "400px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{item.name_Item}</span>
          <span className="ms-2 text-muted">{FormatCurrency(item.price_Item)}</span>
        </Card.Title>
        <div className="mt-auto">
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromStore(item.id)}
              >
                Remove
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={()=>Update()}
              >
                Update
              </Button>
            </div>
        
        </div>
      </Card.Body>
    </Card>
  );
};



export default DeleteItem;