import styled from "styled-components"

export const PlaylistContainer = styled.div`
width: 30vw;
height: fit-content;
min-height: 30vh;
`
export const PlaylistHeader = styled.div`
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
`
export const PlaylistTitle  = styled.h2`
font-family: 'Major Mono Display', monospace;
font-size: 2em;
`
export const PlaylistBody = styled.div`
box-shadow: 3px 3px 6px 3px #333333;
background-color: grey;
opacity: 80%;
min-height: 30vh;
`
export const PlaylistItem = styled.div`
display: flex;
justify-content: flex-start;
`