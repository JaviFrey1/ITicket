import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getBest from "../../actions/getBest";
import Chart from 'chart.js/auto';


export default function BestGraph() {
    const dispatch = useDispatch();
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

    new Chart($grafica, {
        type: 'bar',
        data: {
            labels: tags,
            datasets: [
                datosBest,
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });
    useEffect(() => {
        dispatch(getBest());
    }, []);
    return (

        <>
            <canvas id="grafica"></canvas>

        </>
    );
}
