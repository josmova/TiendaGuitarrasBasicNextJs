import Layout from "@/components/layout";
import Guitars from "@/components/guitars";
import Post from "@/components/post";
import Course from "@/components/course";
import stylesGrid from "@/styles/grid.module.css";

export async function getStaticProps() {
	const urlGuitars = `${process.env.API_URL}/guitarras?populate=imagen`;
	const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
	const urlCourse = `${process.env.API_URL}/curso?populate=imagen`;

	const [resGuitars, resPosts, resCourse] = await Promise.all([
		fetch(urlGuitars),
		fetch(urlPosts),
		fetch(urlCourse),
	]);

	const [{ data: guitars }, { data: posts }, { data: course }] =
		await Promise.all([
			resGuitars.json(),
			resPosts.json(),
			resCourse.json(),
		]);

	return {
		props: {
			guitars,
			posts,
			course,
		},
	};
}

export default function Home({ guitars, posts, course }) {
	return (
		<>
			<Layout
				title={"Inicio"}
				description={"Blog de música, venta de guitarras y más"}
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
				<Course course={course.attributes} />
				<section className="container">
					<h2 className="heading">Blog</h2>
					<div className={stylesGrid.grid}>
						{posts?.map((post) => (
							<Post
								key={post.id}
								post={post.attributes}
							/>
						))}
					</div>
				</section>
			</Layout>
		</>
	);
}
