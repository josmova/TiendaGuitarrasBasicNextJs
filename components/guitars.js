import Link from "next/link";
import Image from "next/image";
import stylesGuitars from "@/styles/guitars.module.css";

const Guitars = ({ guitar }) => {
	const { nombre, descripcion, precio, url, imagen } = guitar;
	return (
		<div className={stylesGuitars.guitar}>
			<Image
				src={imagen.data.attributes.formats.medium.url}
				alt={`Imagen de la guitarra ${nombre}`}
				width={400}
				height={400}
			/>
			<div className={stylesGuitars.content}>
				<h3>{nombre}</h3>
				<p className={stylesGuitars.description}>{descripcion}</p>
				<p className={stylesGuitars.price}>${precio}</p>
				<Link
					legacyBehavior
					href={`/guitars/${url}`}
				>
					<a
						className={stylesGuitars.link}
						id="link"
					>
						Ver Producto
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Guitars;
