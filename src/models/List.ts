import mongoose from "mongoose";

// Make a List interface
const ListSchema = new mongoose.Schema({
  listTitle: { type: String, required: true, unique: true },
  listDescription: { type: String },
  /* listImage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
    default:
      "https://media.istockphoto.com/id/1399859917/sv/vektor/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg?s=170667a&w=0&k=20&c=rxXk8ukIZzceaHA5ohwXPvFOEy-ncyNY8fipuX10ZmU=",
  }, */
  listSections: [
    {
      listSection: { type: mongoose.Schema.Types.ObjectId, ref: "Section" },
    },
  ],
  listItems: [
    {
      listItem: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
    },
  ],
});

export const ListModel = mongoose.model("List", ListSchema);
