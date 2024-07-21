import Link from "next/link";

export default function SinglePrice({ price }) {
	return (
		<div
			className={`single-pricing-package wow fadeInUp ${price.popular ? "active" : ""}`}
			data-wow-duration="1.1s"
		>
			{price.popular ? <span className="active-bage">Popular</span> : ""}
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
					<a className={`theme-btn red-color ${!price.popular ? "minimal-btn" : ""}`}>Choose Plan</a>
				</Link>
			</div>
		</div>
	);
}
