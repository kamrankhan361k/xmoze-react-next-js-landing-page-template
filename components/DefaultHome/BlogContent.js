import SingleBlogPost from "../Blog/SingleBlogPost";
import { blogData } from "../Blog/blogData";
export default function BlogContent() {
	return (
		<section className="news-wrapper section-padding fix">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
					<div className="block-contents">
						<div className="section-title wow fadeInUp" data-wow-duration="1.2s">
							<h2>Browse our crypto blog to know more</h2>
						</div>
					</div>
				</div>

				<div className="row">
					{blogData.slice(0, 3).map((blog) => (
						<div key={blog.id} className="col-md-6 col-xl-4 col-12">
							<SingleBlogPost post={blog} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
