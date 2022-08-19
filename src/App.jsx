import ProductList from './components/ProductList/ProductList';
import AddProduct from './components/AddProduct/AddProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<ProductList />}></Route>
					<Route path='/add-product' element={<AddProduct />}></Route>
				</Routes>
			</Router>
		</>
	);
};

export default App;
