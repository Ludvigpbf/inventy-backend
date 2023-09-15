import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  itemTitle: { type: String, required: true, unique: true },
  itemDescription: { type: String },
  /*   itemImage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
    default:
      "https://media.istockphoto.com/id/1399859917/sv/vektor/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg?s=170667a&w=0&k=20&c=rxXk8ukIZzceaHA5ohwXPvFOEy-ncyNY8fipuX10ZmU=",
  }, */
  itemCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  itemSupplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier",
  },
  itemQuantity: { type: Number, required: true },
  itemUnit: { type: String, required: true },
  itemPrice: { type: Number, required: true },
});

export const ItemModel = mongoose.model("Item", ItemSchema);
