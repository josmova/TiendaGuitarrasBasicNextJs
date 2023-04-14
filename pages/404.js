import Link from "next/link";
import Layout from "@/components/layout";

const Page404 = () => {
	return (
		<Layout title="Página No Encontrada">
			<p className="error">Página no encontrada</p>
			<div className="error-links">
				<Link
					legacyBehavior
					href="/"
				>
					<a
						id="link"
						className="error-link"
					>
						Ir a Inicio
					</a>
				</Link>
			</div>
		</Layout>
	);
};

export default Page404;
