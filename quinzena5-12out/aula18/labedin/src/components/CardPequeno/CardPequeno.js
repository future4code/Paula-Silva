import React from "react"
import "./CardPequeno.css"

export default function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <img src={props.imagem} alt={props.legenda} />
            <div>
                <h4>{`${props.legenda}:`}</h4>
                <p>{props.valor}</p>
            </div>
        </div>
    )
}