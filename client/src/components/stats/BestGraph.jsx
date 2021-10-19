import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getBest from "../../actions/getBest";
import Chart from 'chart.js/auto';
import s from './bestGraph.module.css'
import TimeVSticketsGraph from "./TimeVSticketsGraph";



export default function BestGraph() {
    const [timeGraphData, setTimeGraphData]=useState('')
    const dispatch = useDispatch();
    const [div, setDiv]=useState('')
    const best = useSelector(state => state.best)
    const tags = []
    const data = []

    best.map(obj => { tags.push(obj.event); data.push(obj.cant) })
    const datosBest = {
        label: "eventos mas vendidos",
        data: data,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
    };

    const $grafica = document.querySelector("#grafica");

    useEffect(() => {
        dispatch(getBest());
    }, []);

    useEffect(() => {
        const chart = new Chart($grafica, {
            type: 'bar',
            data: {
                labels: tags,
                datasets: [
                    datosBest,
                ]
            },

            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,

                        }
                    }],
                },
                onClick(e) {
                    const activePoints = chart.getElementsAtEventForMode(e, 'nearest', {
                        intersect: true
                    }, false)
                    
                   setTimeGraphData( tags[activePoints[0].index])
                   console.log(timeGraphData)
                   setDiv('redi')
                 
                }
            }
        });

        return () => { chart.destroy() }
    }, [best]);
   
    return (
   <div>

        <div className={s.container}>

            <canvas id="grafica"></canvas>
 
        </div>
        {div==='redi'?
      <div className={s.container} >
      <TimeVSticketsGraph artist={timeGraphData} />
</div>  :null
    }
      

       
   </div>

        
    );
}