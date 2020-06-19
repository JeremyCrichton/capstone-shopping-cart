import { connect } from "react-redux";
import axios from "axios";
import AddProduct from "./AddProduct";
import { addProduct } from "../actions/products";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (e, newProduct, callback) => {
    console.log(e, newProduct);
    e.preventDefault();
    axios.post("/api/products", newProduct).then(({ data }) => {
      dispatch(addProduct(data));
      callback();
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
