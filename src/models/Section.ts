import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema({
  sectionTitle: { type: String, required: true, unique: true },
  sectionDescription: { type: String },
  /*  sectionImage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
    default:
      "https://media.istockphoto.com/id/1399859917/sv/vektor/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg?s=170667a&w=0&k=20&c=rxXk8ukIZzceaHA5ohwXPvFOEy-ncyNY8fipuX10ZmU=",
  }, */
  sectionItems: [
    {
      sectionItem: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
      _id: false,
    },
  ],
});

export const SectionModel = mongoose.model("Section", SectionSchema);
