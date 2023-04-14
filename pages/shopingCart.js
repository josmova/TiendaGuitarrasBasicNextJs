import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import stylesShopingCart from "@/styles/cart.module.css";

const ShopingCart = ({ cart, updatedAmount, deleteProduct }) => {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const total = cart.reduce(
			(total, product) => total + product.amount * product.price,
			0
		);
		setTotal(total);
	}, [cart]);

	return (
		<Layout title="Carrito de Compras">
			<main className="container">
				<h1 className="heading">Carrito</h1>

				<div className={stylesShopingCart.content}>
					<div className={stylesShopingCart.cart}>
						<h2>Artículos</h2>
						{cart.length === 0
							? "Carrito Vacio"
							: cart.map((product) => (
									<div
										key={product.id}
										className={stylesShopingCart.product}
									>
										<div>
											<Image
												src={product.imagen}
												alt={product.name}
												width={250}
												height={480}
											/>
										</div>
										<div>
											<p className={stylesShopingCart.name}>
												{product.name}
											</p>
											<div className={stylesShopingCart.amount}>
												<p>Cantidad:</p>
												<select
													className={stylesShopingCart.select}
													value={product.amount}
													onChange={(e) =>
														updatedAmount({
															id: product.id,
															amount: Number(e.target.value),
														})
													}
												>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
												</select>
											</div>
											<p className={stylesShopingCart.price}>
												$<span>{product.price}</span>
											</p>
											<p className={stylesShopingCart.subtotal}>
												Subtotal: $
												<span>
													{product.amount * product.price}
												</span>
											</p>
										</div>
										<button
											className={stylesShopingCart.delete}
											type="button"
											onClick={() => deleteProduct(product.id)}
										>
											X
										</button>
									</div>
							  ))}
					</div>
					<aside className={stylesShopingCart.summary}>
						<h3>Resumen del Pedido</h3>
						<p>Total a pagar: {total} </p>
					</aside>
				</div>
			</main>
		</Layout>
	);
};

export default ShopingCart;
