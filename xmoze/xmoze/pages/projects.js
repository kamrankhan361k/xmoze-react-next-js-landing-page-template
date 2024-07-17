import dynamic from "next/dynamic";
import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";
const IsotopeSection = dynamic(() => import("../components/Isotope/IsotopeSection"), {
	ssr: false,
});
export default function projects() {
	return (
		<>
			<Head>
				<title>Projects Page</title>
			</Head>
			<PageBanner
				title="Masonry Portfolio"
				content="A business portfolio accurately describes the strengths of a company & helps the company utilize the most attractive."
			/>
			<IsotopeSection />
		</>
	);
}
