import Image from "next/image";
import Layout from "@/components/layout";
import stylesWeare from "@/styles/weare.module.css";
const Weare = () => {
	return (
		<Layout
			title={"Nosotros"}
			description="Sobre nostros, guitarLA, tienda de música"
		>
			<main className="container">
				<h1 className="heading">Nosotros</h1>
				<div className={stylesWeare.content}>
					<Image
						src="/img/nosotros.jpg"
						alt="imagen sobre nosotros"
						width={1000}
						height={800}
					/>
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Numquam dolore quaerat asperiores praesentium
							incidunt vero molestiae dolores magni nemo ad nulla
							commodi, voluptate, tempora deleniti rem voluptas
							voluptates inventore a! Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Accusantium quisquam
							nemo quas iure cumque asperiores.
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Dolorem, ab molestiae ducimus atque neque aut
							odio tenetur libero illum delectus, odit at itaque
							reprehenderit fuga vel officia ipsam est consequuntur?
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ipsam impedit, obcaecati expedita numquam
							reiciendis aspernatur laboriosam doloremque vero
							maiores veritatis.
						</p>
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default Weare;
