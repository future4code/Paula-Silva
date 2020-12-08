import styled from "styled-components"

export const PlayerContainer = styled.div`
width: 30vw;
height: fit-content;
min-height: 30vh;
`
export const PlayerHeader = styled.div`
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
`
export const PlayerTitle  = styled.h2`
font-family: 'Major Mono Display', monospace;
font-size: 2em;
`
export const PlayerBody = styled.div`
box-shadow: 3px 3px 6px 3px #333333;
background-color: grey;
opacity: 80%;
min-height: 30vh;
`
export const PlayerItem = styled.div`
font-size: 0.8em;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
`