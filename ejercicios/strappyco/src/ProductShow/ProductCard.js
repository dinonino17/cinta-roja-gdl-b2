import React, {Component} from 'react'
import { Image,Data,ProductCard,ImgDiv,ProductName,ProductPrice,ProductBrand, ImageCarousel,ImgDivCarousel} from "./ProductCard.styled";
import {Modal,OverlayTrigger,popover,tooltip,Button,Grid,Row,Col, Carousel} from "react-bootstrap";
import { CarouselDiv } from "../Head/Head.styled";

class ProductSquare extends Component{
    constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }
    handleClose(){
        this.setState({show : false});

    }
    handleShow(){
        this.setState({show: true});
    }

    render(){
        return(
            <div>
            <ProductCard onClick={this.handleShow}>
                <ImgDiv>
                <Image src={this.props.image} />
                </ImgDiv>
                <Data>
                    <span><ProductName>{this.props.name}</ProductName></span>
                    <span><ProductPrice>{this.props.price}</ProductPrice></span>
                    <span><ProductBrand>{this.props.brand}</ProductBrand></span>
                </Data>
                </ProductCard>
                 <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Grid fluid={true}>
            <Row>
            <Col xsHidden md={12}>
            <CarouselDiv>
           <Carousel>
            <Carousel.Item>
            <ImgDivCarousel>
                <ImageCarousel src={this.props.image} />
            </ImgDivCarousel>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="https://i.ytimg.com/vi/ygBF35b-Hcg/maxresdefault.jpg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="https://i.ytimg.com/vi/ygBF35b-Hcg/maxresdefault.jpg" />
            </Carousel.Item>
            </Carousel>
            </CarouselDiv>
            </Col>
            </Row>
            </Grid>
           

            <hr />

            <h4>Descripción de Producto:</h4>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

       </div>

        )
    }
}

export default ProductSquare