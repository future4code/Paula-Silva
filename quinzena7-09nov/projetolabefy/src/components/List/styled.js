import styled from "styled-components"

export const ListContainer = styled.div`
width: 30vw;
height: fit-content;
min-height: 30vh;

`
export const ListHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const ListTitle  = styled.h2`
font-family: 'Major Mono Display', monospace;
font-size: 2em;
`
export const ListBody = styled.div`
background-color: grey;
box-shadow: 3px 3px 6px 3px #333333;
opacity: 80%;
min-height: 30vh;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 10px;
`
export const ListItem = styled.div`
display: flex;
justify-content: flex-start;
`