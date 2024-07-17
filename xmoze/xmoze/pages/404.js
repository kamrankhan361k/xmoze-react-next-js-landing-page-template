import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";
import ErrorContent from "../components/Error/ErrorContent";

export default function NotFound() {
	return (
		<>
			<Head>
				<title>404 Page</title>
			</Head>
			<PageBanner
				title="Oops! error page"
				content="Sorry but the page you're looking for may broken or not created."
			/>
			<ErrorContent />
		</>
	);
}
