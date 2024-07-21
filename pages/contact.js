import Head from "next/head";
import ContactContent from "../components/Contact/ContactContent";
import PageBanner from "./../components/Common/PageBanner";

export default function contact() {
	return (
		<>
			<Head>
				<title>Contact Page</title>
			</Head>
			<PageBanner
				title="Contact Us"
				content="Feel free to contact us anytime if you have any questions or needs by phone or email."
			/>
			<ContactContent />
		</>
	);
}
