import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getBest from "../../actions/getBest";
import Chart from 'chart.js/auto';
import s from './bestGraph.module.css'
import TimeVSticketsGraph from "./TimeVSticketsGraph";



export default function BestGraph() {
    const [timeGraphData, setTimeGraphData] = useState('')
    const dispatch = useDispatch();
    const [div, setDiv] = useState('')
    const best = useSelector(state => state.best)
    const tags = []
    const data = []

    best.map(obj => {
        tags.push(obj.event);
        data.push(obj.cant)
        return best
    })
    const datosBest = {
        label: "eventos mas vendidos",
        data: data,
        backgroundColor: 'rgba(107, 44, 167, 0.705)',
        borderColor: 'rgb(255, 204, 0)',
        hoverBackgroundColor: 'rgb(107, 42, 167)',
        borderWidth: 3,
    };

    const $grafica = document.querySelector("#grafica");

    useEffect(() => {
        dispatch(getBest());
    }, [dispatch]);

    useEffect(() => {
        const chart = new Chart($grafica, {
            type: 'bar',
            data: {
                labels: tags,
                datasets: [datosBest,]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: { beginAtZero: true }
                    }],
                },
                onClick(e) {
                    const activePoints = chart.getElementsAtEventForMode(e, 'nearest', {
                        intersect: true
                    }, false)
                    setTimeGraphData(tags[activePoints[0].index])
                    setDiv('redi')
                }
            }
        });
        return () => { chart.destroy() }
    }, [best,$grafica,datosBest,tags,timeGraphData]);

    return (
        <div>

            <div className={s.container}>

                <canvas id="grafica" role="img"></canvas>

            </div>
            {div === 'redi' ?
                <div className={s.container} >
                    <TimeVSticketsGraph artist={timeGraphData} />
                </div> : null
            }



        </div>


    );
}