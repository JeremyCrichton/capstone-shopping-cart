import { connect } from "react-redux";
import { editProduct } from "../actions/products";
import axios from "axios";
import EditProduct from "./EditProduct";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, { hideEditProduct }) => ({
  onSubmitEdit: (updatedItem) => {
    axios
      .put(`/api/products/${updatedItem._id}`, updatedItem)
      .then(({ data }) => {
        hideEditProduct();
        dispatch(editProduct(data));
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
