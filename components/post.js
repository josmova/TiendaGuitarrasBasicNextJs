import Link from "next/link";
import Image from "next/image";
import stylesPost from "@/styles/blog.module.css";
import { formatDate } from "@/utils/helpers";

const Post = ({ post }) => {
	const { titulo, contenido, publishedAt, imagen, url } = post;

	return (
		<article className={stylesPost.post}>
			<Image
				src={imagen.data.attributes.formats.medium.url}
				alt={`Imagen blog ${titulo}`}
				width={600}
				height={400}
			/>
			<div className={stylesPost.content}>
				<h3>{titulo}</h3>
				<p className={stylesPost.date}>{formatDate(publishedAt)}</p>
				<p className={stylesPost.summary}>{contenido}</p>
				<Link
					legacyBehavior
					href={`/blog/${url}`}
				>
					<a
						className={stylesPost.link}
						id="link"
					>
						Leer más..
					</a>
				</Link>
			</div>
		</article>
	);
};

export default Post;
