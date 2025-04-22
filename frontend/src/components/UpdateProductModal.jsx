import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

const UpdateProductModal = ({ isOpen, onClose, product, setProducts }) => {
	const [formData, setFormData] = useState({
		name: '',
		price: '',
		description: '',
		image: null,
	});
	const [previewImage, setPreviewImage] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (product) {
			setFormData({
				name: product.name || '',
				price: product.price?.toString() || '0',
				description: product.description || '',
				image: null,
			});
			setPreviewImage(product.imageUrl ? `http://localhost:4000${product.imageUrl}` : '');
		}
	}, [product]);
	;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setFormData({ ...formData, image: file });
			const reader = new FileReader();
			reader.onloadend = () => setPreviewImage(reader.result);
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		const data = new FormData();
		data.append('name', formData.name);
		data.append('price', formData.price);
		data.append('description', formData.description);
		if (formData.image) data.append('image', formData.image);
		console.log('API URL:', `${apiUrl}/update/${product._id}`);

		try {
			const response = await axios.put(`${apiUrl}/products/update/${product._id}`, data, {
				headers: { 'Content-Type': 'multipart/form-data' },
			});
			const updatedProduct = response.data.product;

			setProducts((prev) =>
				prev.map((p) => (p._id === updatedProduct._id ? updatedProduct : p))
			);
			alert('Product updated!');
			onClose();
		} catch (error) {
			console.error(error);
			alert('Failed to update product');
		} finally {
			setIsSubmitting(false);
		}
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
			<div className='bg-white p-6 rounded-lg w-full max-w-md'>
				<h2 className='text-lg font-bold mb-4'>Edit Product</h2>
				<form onSubmit={handleSubmit}>
					<input type='text' name='name' value={formData.name} onChange={handleChange} required className='w-full mb-2 p-2 border rounded' />
					<input type='number' name='price' value={formData.price} onChange={handleChange} required className='w-full mb-2 p-2 border rounded' />
					<textarea name='description' value={formData.description} onChange={handleChange} className='w-full mb-2 p-2 border rounded' />
					
					{previewImage && (
						<div className='mb-2'>
							<img src={previewImage} alt='Preview' className='h-32 w-32 object-cover rounded' />
						</div>
					)}
					<input type='file' accept='image/*' onChange={handleImageChange} className='mb-4' />

					<div className='flex justify-end gap-2'>
						<button type='button' onClick={onClose} className='px-4 py-2 bg-gray-300 rounded'>
							Cancel
						</button>
						<button type='submit' disabled={isSubmitting} className='px-4 py-2 bg-blue-600 text-white rounded'>
							{isSubmitting ? 'Saving...' : 'Update'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateProductModal;
