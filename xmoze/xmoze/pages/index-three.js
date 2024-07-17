import Head from "next/head";
import FaqContent from "../components/Faq/FaqContent";
import HeroThree from "../components/Hero/HeroThree";
import ContentBlockOne from "../components/HomeThree/ContentBlockOne";
import ContentBlockThree from "../components/HomeThree/ContentBlockThree";
import ContentBlockTwo from "../components/HomeThree/ContentBlockTwo";
import Cta from "../components/HomeThree/Cta";
import PricingContentTwo from "../components/Pricing/PricingContentTwo";
import FeaturesFour from "./../components/Features/FeaturesFour";
import TestimonialTwo from "./../components/Testimonial/TestimonialTwo";

export default function indexThree() {
	return (
		<>
			<Head>
				<title>Xmoze - SaaS Multipurpose Landing Template 3</title>
			</Head>
			<HeroThree />
			<FeaturesFour />
			<Cta />
			<ContentBlockOne />
			<ContentBlockTwo />
			<ContentBlockThree />
			<PricingContentTwo />
			<TestimonialTwo />
			<FaqContent />
		</>
	);
}
