import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../store/singleProduct";

export class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }
  render() {
    const product = this.props.singleProduct ;
    return (
      <div>
      {product && 
        <div>
          <h2>{product.productName}</h2>
          <img src={product.imageUrl}/>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
        }
        </div>
    );
  }
}

const mapState = ({ singleProductReducer }) => {
  return singleProductReducer;
};

const mapDispatch = (dispatch) => ({
  getProduct: (id) => dispatch(fetchSingleProduct(id)),
});

export default connect(mapState, mapDispatch)(SingleProduct);
