import Head from "next/head";
import Blog from "../components/Blog/Blog";
import PageBanner from "../components/Common/PageBanner";

export default function News() {
	return (
		<>
			<Head>
				<title>News Page</title>
			</Head>
			<PageBanner
				title="Our Blogs"
				content="An automated report is a management tool used by professionals to create and share business reports at a specific time interval without the need to update."
			/>
			<Blog />
		</>
	);
}
