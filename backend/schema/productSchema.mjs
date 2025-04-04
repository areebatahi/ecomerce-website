import joi from "joi"

const productSchema = joi.object({
   productName: joi.string().required(),
   description : joi.string().required(),
   price: joi.number().required(),
   imageURL : joi.required()
})

export default productSchema;