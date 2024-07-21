import Head from "next/head";
import Teams from "../components/Team/Teams";
import CallToAction from "./../components/Common/CallToAction";
import PageBanner from "./../components/Common/PageBanner";

export default function team() {
	return (
		<>
			<Head>
				<title>Team Page</title>
			</Head>
			<PageBanner
				title="Our Team"
				content="We work to create some of the most attractive and meaningful places for small businesses."
			/>
			<Teams />
			<CallToAction />
		</>
	);
}
