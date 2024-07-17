import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";
import FaqWithVideoModal from "../components/Faq/FaqWithVideoModal";
import PricingContent from "../components/Pricing/PricingContent";
export default function Pricing() {
	return (
		<>
			<Head>
				<title>Pricing Page</title>
			</Head>
			<PageBanner
				title="Pricing"
				content="xmoze offers the most affordable planner you can use to improve your business."
			/>
			<PricingContent />
			<FaqWithVideoModal />
		</>
	);
}
