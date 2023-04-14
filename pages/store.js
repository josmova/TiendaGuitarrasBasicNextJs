import Layout from "@/components/layout";
import Guitars from "@/components/guitars";
import stylesGrid from "@/styles/grid.module.css";

/* export async function getStaticProps() {
	const response = await fetch(
		`${process.env.API_URL}/guitarras?populate=imagen`
	);
	const { data: guitarras } = await response.json();

	return {
		props: {
			guitarras,
		},
	};
}
 */

export async function getServerSideProps() {
	const response = await fetch(
		`${process.env.API_URL}/guitarras?populate=imagen`
	);
	const { data: guitars } = await response.json();

	return {
		props: {
			guitars,
		},
	};
}

const Store = ({ guitars }) => {
	return (
		<Layout
			title={"Tienda"}
			description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
		>
			<main className="container">
				<h1 className="heading">Nuestra Colección</h1>
				<div className={stylesGrid.grid}>
					{guitars?.map((guitar) => (
						<Guitars
							key={guitar.id}
							guitar={guitar.attributes}
						/>
					))}
				</div>
			</main>
		</Layout>
	);
};

export default Store;
