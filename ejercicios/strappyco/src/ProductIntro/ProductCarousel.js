import React, { Component } from 'react'
import {Carousel,Row,Col,Grid} from 'react-bootstrap'
import { CarouselDiv } from "../Head/Head.styled"


class ProductCarousel extends Component{
    render(){
        return(
            <Grid fluid={true}>
            <Row>
            <Col xsHidden md={12}>
            <CarouselDiv>
           <Carousel>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="https://i.ytimg.com/vi/ygBF35b-Hcg/maxresdefault.jpg" />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="https://i.ytimg.com/vi/ygBF35b-Hcg/maxresdefault.jpg" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="https://i.ytimg.com/vi/ygBF35b-Hcg/maxresdefault.jpg" />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </CarouselDiv>
            </Col>
            </Row>
            </Grid>
        )
    }
}
export default ProductCarousel