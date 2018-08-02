import React, {Component} from 'react'
import ProductSquare from './ProductCard'
import {Container} from "./ProductList.styled";
import {Grid, Row, Col} from 'react-bootstrap'

const productData = require('./product.json')


class ProductList extends Component{

    constructor() {
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                data : productData
            })
        },3000)
    }
    

    render(){

        if (this.state.data.length===0){
            return <div> Loading.....</div>
        }

        return(
            <Grid fluid={true}>
            <Row className="show-grid">
            {this.state.data.map(product=>
                     (
                  
                    <Col xs={12} md={4}>
                     <ProductSquare
                        name={ product.name}
                        image={product.imgUrl}
                        price={"$"+product.price+".00"}
                        brand={product.brand}
                    />
                    </Col>
                    )
                    )} 
                        </Row>
            </Grid>
        )
    }
}

export default ProductList