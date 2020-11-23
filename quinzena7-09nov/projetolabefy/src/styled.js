import styled from "styled-components"
import Background from "./img/greenbg.png"

export const Container = styled.div`
font-family: 'Montserrat', sans-serif;
background-image: url(${Background});
background-repeat: no-repeat;
color: white;
min-height: 100vh;
min-width: 100vw;
`
export const MainTitle = styled.h1`
font-family: 'Major Mono Display', monospace;
color: white;
font-size: 3em;
padding: 20px;
`
export const AppContainer = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`

export const Overlay = styled.div`
box-shadow: 3px 3px 6px 3px #333333;
min-width: 30vw;
min-height: 30vh;
border-radius: 5px;
background-color: lightgrey;
fill-opacity: 30%;
position: absolute;
margin: auto;
left: 20vw;
display:flex;
justify-content: center;
`
export const Icon = styled.img`
height: 1em;
color: white;
padding-right: 6px;
`
export const Input = styled.input`
border: 1px solid grey;
border-radius: 5px;
height: 1.5em;
font-size: 1.5em;
`
export const Button = styled.button`
border: 1px solid grey;
color: grey;
border-radius: 5px;
height: 1.5em;
font-size: 1.5em;
`
export const Data = styled.p`
flex-grow: 1;
`