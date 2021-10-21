import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import timeVStickets from "../../actions/timeVStickets";
import Chart from 'chart.js/auto';
import s from './timeVSticketsGraph.module.css'



export default function TimeVSticketsGraph({ artist }) {

    const dispatch = useDispatch();
    const stats = useSelector(state => state.stats)
    const tags = []
    const data = []

    stats.map(obj => { 
        tags.push(obj.date);
        data.push(obj.availableTickets)
        return stats
    })
      tags.sort(function (a, b) {
        if (a > b) return 1;
        else if (a < b) return -1;
        return 0;
      })
    const ticketsData = {
        label: artist + ' Tickets disp. en funcion del tiempo',
        data: data,
        backgroundColor: 'rgba(107, 44, 167, 0.705)',
        borderColor: 'rgb(255, 204, 0)',
        hoverBackgroundColor: 'rgb(107, 42, 167)',
        borderWidth: 3,
    };

    const $stats = document.querySelector("#stats");


    useEffect(() => {
        dispatch(timeVStickets(artist));
    }, [dispatch,artist]);

    useEffect(() => {

        const timeVStickets = new Chart($stats, {
            type: 'line',
            data: {
                labels: tags,
                datasets: [
                    ticketsData,
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

            }
        });
        return () => { timeVStickets.destroy() }
    }, [stats,$stats,tags,ticketsData]);

    return (

        <div className={s.container}>

            <canvas id="stats"></canvas>

        </div>
    );
}
