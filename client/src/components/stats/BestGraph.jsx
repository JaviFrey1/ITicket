import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getBest from "../../actions/getBest";
import Chart from 'chart.js/auto';
import s from './bestGraph.module.css'



export default function BestGraph() {
    const dispatch = useDispatch();
    const best = useSelector(state => state.best)
    const tags = []
    const data = []

    best.map(obj => { tags.push(obj.event); data.push(obj.cant) })
    console.log('TAGS', tags, 'DATA', data)
    const datosBest = {
        label: "eventos mas vendidos",
        data: data,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
    };

    const $grafica = document.querySelector("#grafica");
    // function handleClick(evt)
    // {
    //     var activeElement = bar.getElementAtEvent(evt);
    //     console.log('esto deberia ser la data de la barra clickeada???', chart_config.data.datasets[activeElement[0]._datasetIndex].data[activeElement[0]._index])
    // }

    useEffect(() => {
        dispatch(getBest());
    }, []);

    useEffect(() => {
        let bar = new Chart($grafica, {
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
                            beginAtZero: true,
                           
                        }
                    }],
                },
                // onClick=handleClick
            }
        });
        return () => { bar.destroy() }
    }, [best]);
    return (

        <div className={s.container}>
        
            <canvas id="grafica"></canvas>

        </div>
    );
}