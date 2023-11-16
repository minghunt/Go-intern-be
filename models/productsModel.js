import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  color: {
    type: String,
  }
});

const Product = mongoose.model('Product', productSchema);

export default Product;