import stylesCourse from "@/styles/course.module.css";

const Course = ({ course }) => {
	const { titulo, contenido, imagen } = course;
	console.log(imagen);
	return (
		<section className={`${stylesCourse.course} course`}>
			<style jsx>
				{`
					.course {
						background-image: linear-gradient(
								to right,
								rgb(0 0 0 / 0.65),
								rgb(0 0 0 / 0.7)
							),
							url(${imagen?.data?.attributes?.url});
					}
				`}
			</style>

			<div className={`container ${stylesCourse.grid}`}>
				<div className={`${stylesCourse.content}`}>
					<h2 className="heading">{titulo}</h2>
					<p>{contenido}</p>
				</div>
			</div>
		</section>
	);
};

export default Course;
