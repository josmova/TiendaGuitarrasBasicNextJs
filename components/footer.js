import Link from "next/link";
import stylesFooter from "../styles/footer.module.css";

const Footer = () => {
	return (
		<footer className={stylesFooter.footer}>
			<div className={`container ${stylesFooter.content} `}>
				<nav className={stylesFooter.navegation}>
					<Link
						legacyBehavior
						href="/"
					>
						Inicio
					</Link>
					<Link
						legacyBehavior
						href="/weare"
					>
						Nosotros
					</Link>
					<Link
						legacyBehavior
						href="/blog"
					>
						Blog
					</Link>
					<Link
						legacyBehavior
						href="/store"
					>
						Tienda
					</Link>
				</nav>
				<p className={stylesFooter.copyright}>
					Todos los derechos reservados {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
