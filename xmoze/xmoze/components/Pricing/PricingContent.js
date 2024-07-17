import Pricing from "./Pricing";

const pricingData = [
	{
		id: 1,
		plan: "Starter",
		price: 10,
		features: ["Limited Access Library", "Individual User Capabilities", "No Updates Facility", "Standard support"],
		popular: false,
	},
	{
		id: 2,
		plan: "Basic",
		price: 45,
		features: ["Full Access Library", "Limited Access Library", "Free Lifetime Updates Facilit", "Premium support"],
		popular: true,
	},
	{
		id: 3,
		plan: "Premium ",
		price: 100,
		features: [
			"Full Access Library",
			"Multiple User Capabilities",
			"Free Lifetime Updates Facility",
			"Dedicated Support",
		],
		popular: false,
	},
];

export default function PricingContent() {
	return (
		<section className="package-pricing-wrapper fix section-padding">
			<div className="container">
				<div className="col-lg-8 ps-xl-5 pe-xl-5 col-12 offset-lg-2 text-center">
					<div className="block-contents">
						<div className="section-title">
							<h2 className="wow fadeInUp">The most affordable pricing plan for you</h2>
							<p className="wow fadeInUp pt-4" data-wow-delay=".3s">
								xmoze offers the most affordable planner you can use to improve your business. Such
								affordable prices are not available anywhere.
							</p>
						</div>
					</div>
				</div>

				<Pricing content={pricingData} />
			</div>
		</section>
	);
}
