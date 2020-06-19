import { connect } from "react-redux";
import ProductList from "./ProductList";
import axios from "axios";
import { receiveAllProducts } from "../actions/products";

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchProducts: () => {
    axios.get("/api/products").then(({ data }) => {
      dispatch(receiveAllProducts(data));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
