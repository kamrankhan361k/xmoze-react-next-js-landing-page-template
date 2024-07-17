import Link from "next/link";

export default function SinglePriceTwo({ price }) {
	return (
		<div className={`single-pricing-package style-2 ${price.popular ? "active" : ""}`}>
			{price.popular ? (
				<div className="package-bage wow fadeInDown" data-wow-delay=".9s">
					<span>Popular</span>
				</div>
			) : (
				""
			)}
			<div className="pricing-head">
				<div className="pricing-name">
					<h4>{price.plan} Plan</h4>
				</div>
				<div className="pricing-vale d-flex">
					<h2>
						$<span>{price.price}</span>
					</h2>
					<p>/Per Month</p>
				</div>
			</div>
			<div className="features-list">
				<ul>
					{price.features.map((feature, index) => (
						<li key={index}>{feature}</li>
					))}
				</ul>
			</div>
			<div className="buy-package-btn">
				<Link href="/contact">
					<a className={`theme-btn second-color ${!price.popular ? "minimal-btn" : ""}`}>Choose Plan</a>
				</Link>
			</div>
		</div>
	);
}
