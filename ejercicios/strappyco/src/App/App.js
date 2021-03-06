import React, { Component } from 'react'
import './App.css'
import Head from '../Head/Head'
import NavigationCategories from '../Head/NavigationCategories'
import ProductCarousel from '../ProductIntro/ProductCarousel';
import GeneralDivCat from '../ProductShow/GeneralDivCat';
import ProductList from '../ProductShow/ProductList';
import {Modal,OverlayTrigger,popover,tooltip,Button,Grid,Row,Col, Carousel} from "react-bootstrap";
import { CarouselDiv } from "../Head/Head.styled";


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
          show: false
      };
  }

  render() {
    return (
      <div>
      <Head />
      <NavigationCategories />
      <ProductCarousel />
      <GeneralDivCat categorieDiv="Products" />
      <ProductList />
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
    );
  }
}

export default App;
