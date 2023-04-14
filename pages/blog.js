import Layout from "@/components/layout";
import Post from "@/components/post";
import stylesGrid from "@/styles/grid.module.css";

export async function getStaticProps() {
	const response = await fetch(
		`${process.env.API_URL}/posts?populate=imagen`
	);
	const { data: posts } = await response.json();

	return {
		props: {
			posts,
		},
	};
}

const blog = ({ posts }) => {
	return (
		<Layout
			title={"Blog"}
			description="Blog de música, venta de guitarras, consejos, GuitarLA"
		>
			<main className="container">
				<h1 className="heading">Blog</h1>
				<div className={stylesGrid.grid}>
					{posts?.map((post) => (
						<Post
							key={post.id}
							post={post.attributes}
						/>
					))}
				</div>
			</main>
		</Layout>
	);
};

export default blog;
