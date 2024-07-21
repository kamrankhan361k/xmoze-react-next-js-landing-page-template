import Head from "next/head";
import CallToAction from "../components/Common/CallToAction";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "./../components/Faq/FaqContent";

export default function faq() {
	return (
		<>
			<Head>
				<title>FAQ Page</title>
			</Head>
			<PageBanner
				title="FAQs"
				content="We work to create some of the most attractive and meaningful places for small businesses."
			/>
			<FaqContent />
			<CallToAction />
		</>
	);
}
