import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import stylesHeader from "../styles/header.module.css";

const Header = () => {
	const router = useRouter();

	return (
		<header className={stylesHeader.header}>
			<div className={`container ${stylesHeader.bar} `}>
				<Link href="/">
					<Image
						src="/img/logo.svg"
						alt="imagen del logo"
						width={300}
						height={300}
					/>
				</Link>
				<nav className={stylesHeader.navegation}>
					<Link
						legacyBehavior
						href="/"
					>
						<a
							id="link"
							className={
								router.pathname === "/" ? stylesHeader.active : ""
							}
						>
							Inicio
						</a>
					</Link>
					<Link
						legacyBehavior
						href="/weare"
					>
						<a
							id="link"
							className={
								router.pathname === "/weare"
									? stylesHeader.active
									: ""
							}
						>
							Nosotros
						</a>
					</Link>
					<Link
						legacyBehavior
						href="/blog"
					>
						<a
							id="link"
							className={
								router.pathname === "/blog"
									? stylesHeader.active
									: ""
							}
						>
							Blog
						</a>
					</Link>
					<Link
						legacyBehavior
						href="/store"
					>
						<a
							id="link"
							className={
								router.pathname === "/store"
									? stylesHeader.active
									: ""
							}
						>
							Tienda
						</a>
					</Link>
					<Link
						legacyBehavior
						href="/shopingCart"
					>
						<a
							id="link"
							className={
								router.pathname === "/shopingCart"
									? stylesHeader.active
									: ""
							}
						>
							<Image
								src="/img/carrito.png"
								alt="imagen del carrito"
								width={30}
								height={25}
							/>
						</a>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
