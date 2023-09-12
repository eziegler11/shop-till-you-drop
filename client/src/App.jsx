import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { CartProvider } from './context/CartContext';
import { Cart, Home } from './pages';

import { RiShoppingCartLine } from 'react-icons/ri';

const App = () => {
	return (
		<CartProvider>
			<BrowserRouter>
				<header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
					<Link to='/'>
						<h1 className='font-bold w-30 object-contain text-[36px]'>
							Shop Till You Drop
						</h1>
					</Link>

					<Link
						to='/cart'
						className='bg-[#6469ff] hover:opacity-50 text-white px-4 py-2 rounded-md relative'
					>
						<RiShoppingCartLine />
					</Link>
				</header>
				<main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</main>
			</BrowserRouter>
		</CartProvider>
	);
};

export default App;
