import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
	{
		productName: {
			// type: String,
			type: mongoose.Schema.Types.String,
			required: true,
		},
		description: {
			type: mongoose.Schema.Types.String,
			required: true,
			unique: true,
		},
		price: {
			type: mongoose.Schema.Types.Number,
			required: true,
		},
		imageURL: {
			type: mongoose.Schema.Types.String,
			required: true,
		},
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	},
);
const Product = mongoose.model('Product', productSchema);
export default Product;
