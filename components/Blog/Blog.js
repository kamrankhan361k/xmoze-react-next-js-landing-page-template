import { blogData } from "./blogData";
import BlogSidebar from "./BlogSidebar";
import Pagination from "./Pagination";
import SingleBlogPost from "./SingleBlogPost";

export default function Blog() {
	return (
		<div className="blog-grid-wrapper section-padding mtm-30">
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-12">
						<div className="row">
							{blogData.map((post) => (
								<div key={post.id} className="col-md-6 col-12">
									<SingleBlogPost post={post} />
								</div>
							))}
						</div>
						<Pagination />
					</div>
					<div className="col-xl-4 col-12">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</div>
	);
}
