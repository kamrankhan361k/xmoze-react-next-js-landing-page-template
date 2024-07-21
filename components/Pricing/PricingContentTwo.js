import PricingTwo from "./PricingTwo";

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
	{
		id: 4,
		plan: "Starter",
		price: 49,
		features: ["Limited Access Library", "Individual User Capabilities", "No Updates Facility", "Standard support"],
		popular: false,
	},
	{
		id: 5,
		plan: "Basic",
		price: 199,
		features: ["Full Access Library", "Limited Access Library", "Free Lifetime Updates Facilit", "Premium support"],
		popular: true,
	},
	{
		id: 6,
		plan: "Premium ",
		price: 145,
		features: [
			"Full Access Library",
			"Multiple User Capabilities",
			"Free Lifetime Updates Facility",
			"Dedicated Support",
		],
		popular: false,
	},
];

export default function PricingContentTwo() {
	return (
		<section className="package-pricing-wrapper fix section-padding">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 offset-lg-2 text-center">
					<div className="block-contents fw500">
						<div className="section-title">
							<h2 className="wow fadeInUp">Easy and affordable plan for everyone</h2>
							<p className="wow fadeInUp pt-4" data-wow-delay=".3s">
								Easy budgeting method that can help you to manage your money effectively, simply and
								sustainably.
							</p>
						</div>
					</div>
				</div>

				<PricingTwo content={pricingData} />
			</div>
		</section>
	);
}
