import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

import axios from 'axios';

const URL = 'https://mary-product-app.herokuapp.com/';

const ProductList = () => {
	const navigate = useNavigate();

	const [products, setProducts] = useState([]);
	const [deleteProducts, setDeleteProducts] = useState([]);

	const handleFormChange = (event) => {
		const { value, checked } = event.target;
		checked
			? setDeleteProducts([...deleteProducts, value])
			: setDeleteProducts(deleteProducts.filter((e) => e !== value));
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(URL);
				setProducts(response.data);
			} catch (error) {
				console.error(error.message);
			}
		};

		fetchData();
	}, [deleteProducts]);

	const handleAdd = () => {
		navigate('/add-product');
	};

	const handleDelete = () => {
		deleteProducts.length > 0
			? axios.delete(URL, { data: deleteProducts }).then(() => {
					setDeleteProducts([]);
			  })
			: console.log('choose product');
	};

	return (
		<>
			<header className='header'>
				<h1> Product List</h1>
				<div className='buttons'>
					<button onClick={() => handleAdd()} className='green'>
						ADD
					</button>
					<button onClick={() => handleDelete()} id='red'>
						{' '}
						MASS DELETE
					</button>
				</div>
			</header>
			<main className='component'>
				<div className='productContainer'>
					{products &&
						products.map((product) => (
							<div key={product.sku} className='card'>
								<div id='cardCheck'>
									<input
										type='checkbox'
										id='checkbox'
										name='checkbox'
										className='delete-checkbox'
										value={product.sku}
										onChange={(event) => handleFormChange(event)}
									/>
								</div>
								<div className='cardComponent'>
									<div className='cardText'>
										<p>{product.sku}</p>
										<p>{product.name}</p>
										<p>{`${product.price} $`}</p>
										<p>{`${product.metric}:${product.unitValue} ${product.unit}`}</p>
									</div>
								</div>
							</div>
						))}
				</div>
			</main>
			<Footer />
		</>
	);
};

export default ProductList;
