import  React from "react";
import s from './panelAdmin.module.css'
import AddEvent from "../AddEvent/AddEvent";
export default function PanelAdmin() {

  
  return (
    <div className={`${s.container}`}>
    <AddEvent/>
      
    </div>
  );
}