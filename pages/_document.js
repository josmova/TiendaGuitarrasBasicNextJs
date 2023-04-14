import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="es">
			<Head>
				<meta
					name="description"
					content="GuitarLA - Venta de guitarras y blog de música "
					charSet="utf-8"
				/>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin={"true"}
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
