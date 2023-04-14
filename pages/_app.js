import { useEffect, useState } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	const cartLocalStorage =
		typeof window !== "undefined"
			? JSON.parse(localStorage.getItem("cart")) ?? []
			: [];

	const [cart, setCart] = useState(cartLocalStorage);
	const [pageReady, setPageReady] = useState(false);
	useEffect(() => {
		setPageReady(true);
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const agregateCart = (guitars) => {
		if (
			cart.some((guitarsState) => guitarsState.id === guitars.id)
		) {
			const cartUpdated = cart.map((guitarsState) => {
				if (guitarsState.id === guitars.id) {
					guitarsState.amount = guitars.amount;
				}
				return guitarsState;
			});

			setCart([...cartUpdated]);
			localStorage.setItem("cart", JSON.stringify(cart));
		} else {
			setCart([...cart, guitars]);
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	};

	const updatedAmount = (guitars) => {
		const cartUpdated = cart.map((guitarsState) => {
			if (guitarsState.id === guitars.id) {
				guitarsState.amount = Number(guitars.amount);
			}
			return guitarsState;
		});
		setCart(cartUpdated);
		window.localStorage.setItem("cart", JSON.stringify(cart));
	};

	const deleteProduct = (id) => {
		const cartUpdated = cart.filter((product) => product.id !== id);
		setCart(cartUpdated);
		window.localStorage.setItem("cart", JSON.stringify(cart));
	};

	return pageReady ? (
		<Component
			{...pageProps}
			cart={cart}
			agregateCart={agregateCart}
			updatedAmount={updatedAmount}
			deleteProduct={deleteProduct}
		/>
	) : null;
}
