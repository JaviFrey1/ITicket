import React, { useState } from "react";
import s from './panelAdmin.module.css'
import AddEvent from "../AddEvent/AddEvent";
import BestGraph from "../stats/BestGraph";
export default function PanelAdmin() {
  const [div, setDiv] = useState('')
  function handleClickNew() {
    setDiv('showAdd')
  }
  function handleClickGraph() {
    setDiv('showGraph')
  }

  return (
    <div className={s.divRey}>

      <div className={s.contListaCompra}>
        <div className={s.pestanias}>
          <div className={s.pestania}>
          
          </div>
        </div>
        <div style={{ margin: '20px' }} onClick={() => handleClickNew()}>Agregar un nuevo evento</div>
        <div style={{ margin: '20px' }} onClick={() => handleClickGraph()}>Eventos más vendidos</div>

      </div>
      <div>
        <div className={div === "showAdd" ? s.showAdd : s.hideAdd}>
          <AddEvent />
        </div>
      </div>
      <div>
        <div className={div === "showGraph" ? s.showGraph : s.hideGraph}>
          <BestGraph />
        </div>
      </div>
    </div>
  );
}