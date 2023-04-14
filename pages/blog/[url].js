import Image from "next/image";
import Layout from "@/components/layout";
import stylesPost from "@/styles/blog.module.css";
import { formatDate } from "@/utils/helpers";

export async function getServerSideProps({ query: { url } }) {
	const response = await fetch(
		`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
	);
	const { data: post } = await response.json();

	return {
		props: { post },
	};
}

const Post = ({ post }) => {
	const { titulo, contenido, publishedAt, imagen } =
		post[0].attributes;

	return (
		<Layout title={`Post ${titulo}`}>
			<article
				className={`${stylesPost.post} ${stylesPost["mt-3"]}`}
			>
				<Image
					src={imagen.data.attributes.formats.medium.url}
					alt={`Imagen blog ${titulo}`}
					width={1000}
					height={500}
				/>
				<div className={stylesPost.content}>
					<h3>{titulo}</h3>
					<p className={stylesPost.date}>
						{formatDate(publishedAt)}
					</p>
					<p className={stylesPost.text}>{contenido}</p>
				</div>
			</article>
		</Layout>
	);
};

export default Post;
