import styled from "styled-components";

export const Image = styled.img`
  max-width: 100%;
  max-height:98%;
  transition: all cubic-bezier(0.4, 0, 1, 1) 200ms;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
export const ImageCarousel = styled.img`
  max-width: 100%;
  max-height:98%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Data = styled.div`
  width:50%;
  height: 100%
  float: left;
  position:relative;
  margin: 0 auto;
  font-family: 'Open Sans Condensed', sans-serif;
`;

export const ProductCard = styled.div`
  float:left;
  margin: 0 auto;
  margin-bottom:30px;
  height: 300px;
  width:100%;
  transition: all ease 200ms;
  &:hover {
    ${Image} {
      transform: translateY(-20px) scale(1.1);
    }
  }
`;

export const ImgDiv = styled.div`
  height: 300px;
  width:50%;
  float:left;
  `;

  export const ImgDivCarousel = styled.div`
  height: 400px;
  width:400px;
  float:left;
  `;

  export const ProductName = styled.h1`
  color: #FF7175;
  font-family: 'Open Sans Condensed', sans-serif;
  
  `;

  export const ProductPrice = styled.h1`
  color: Black;
  font-family: 'Open Sans Condensed', sans-serif;
  `;


  export const ProductBrand = styled.h1`
  color: Green;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size:20px;
  `;