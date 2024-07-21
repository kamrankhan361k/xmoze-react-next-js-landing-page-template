import Head from "next/head";
import BlogDetails from "../components/Blog/BlogDetails";
import PageBanner from "../components/Common/PageBanner";

export default function newsDetails() {
	return (
		<>
			<Head>
				<title>News Details</title>
			</Head>
			<PageBanner
				title="What Is the crypto volatility index (CVI)?"
				content="The CVI is created by computing a decentralized volatility index from cryptocurrency option prices together with analyzing the market."
			/>
			<BlogDetails />
		</>
	);
}
