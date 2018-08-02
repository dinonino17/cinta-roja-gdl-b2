import styled from "styled-components";

export const HeadBar = styled.div`
width: 99.9%;
height: 80px;
background-color:orange;
margin: 0 auto;
`;

export const LogInButtons = styled.div`
  float:right;
  margin-right: 14px
  position:relative;
  color: white;
  text-decoration: bold;
  top:20px;
  &:hover ${LogInButtons} {
    color:black;
  }
`;
export const Title = styled.div`
font-family: 'Baloo Chettan', cursive;
text-align: center;
width:300px;
height: 10px;
display: block;
margin-left: auto;
margin-right: auto;
font-size:56px
color: white;
`;

export const CarouselDiv = styled.div`
size:70%;
width:70%;
position:relative;
margin: 0 auto;
`;


