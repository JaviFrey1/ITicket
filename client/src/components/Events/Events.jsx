import Event from "../Event/Event";
// import styles from './Events.module.css'
import {Duki,Metallica,Jesus,Sosa} from '../../cartas'

const obj = [
    Duki,
    Metallica,
    Jesus,
    Sosa
]

export default function Events(){
    
    return (
        <div>
            {obj.length === 0?
            <div>Not many events humg?</div>:obj.map((el,i) => <Event key={i} name={el.nombre} img={el.img} cat={el.categoria} fecha={el.fecha} />)}
        </div>
    )
}