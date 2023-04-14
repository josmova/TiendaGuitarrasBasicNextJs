import { useState } from "react";
import Image from "next/image";
import stylesGuitars from "@/styles/guitars.module.css";
import Layout from "@/components/layout";

export async function getStaticPaths() {
	const response = await fetch(`${process.env.API_URL}/guitarras`);
	const { data } = await response.json();
	const paths = data.map((guitar) => ({
		params: {
			url: guitar.attributes.url,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { url } }) {
	const response = await fetch(
		`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
	);
	const { data: guitars } = await response.json();

	return {
		props: { guitars },
	};
}
/* export async function getServerSideProps({ query: { url } }) {
	const response = await fetch(
		`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
	);
	const { data: guitars } = await response.json();

	return {
		props: { guitars },
	};
}
 */

const Product = ({ guitars, agregateCart }) => {
	const [amount, setAmount] = useState(0);
	const { nombre, descripcion, precio, imagen } =
		guitars[0].attributes;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (amount < 1) {
			alert("Cantidad no valida");
			return;
		}
		const guitarsSelection = {
			id: guitars[0].id,
			name: nombre,
			imagen: imagen.data.attributes.url,
			price: precio,
			amount: amount,
		};

		agregateCart(guitarsSelection);
	};

	return (
		<Layout title={`Guitarra ${nombre}`}>
			<div className={stylesGuitars.guitar}>
				<Image
					src={imagen.data.attributes.url}
					alt={`Imagen de la guitarra ${nombre}`}
					width={400}
					height={400}
				/>
				<div className={stylesGuitars.content}>
					<h3>{nombre}</h3>
					<p className={stylesGuitars.description}>{descripcion}</p>
					<p className={stylesGuitars.price}>${precio}</p>

					<form
						className={stylesGuitars.form}
						onSubmit={handleSubmit}
					>
						<label htmlFor="amount">Cantidad: </label>
						<select
							id="amount"
							onChange={(e) => setAmount(Number(e.target.value))}
						>
							<option value="0">-- Seleccione --</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
						<input
							type="submit"
							value="Agregar al carrito"
						/>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default Product;
