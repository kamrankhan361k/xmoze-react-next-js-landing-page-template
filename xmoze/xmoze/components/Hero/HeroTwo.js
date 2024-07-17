import Link from "next/link";

export default function HeroTwo() {
	return (
		<section className="hero-welcome-wrapper hero-2">
			<div className="single-slide text-white">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 text-center text-xl-start col-12">
							<div className="hero-contents">
								<h1>Manage your business on a new system</h1>
								<p>
									Advanced software for managing your business. Through which business can be
									controlled very easily as required.
								</p>
								<Link href="/">
									<a className="theme-btn red-color">Start Free Trial</a>
								</Link>
								<Link href="/">
									<a href="#" className="theme-btn minimal-btn">
										Learn More
									</a>
								</Link>
							</div>
						</div>
						<div className="col-xl-6 col-12 text-center text-xl-end">
							<div className="hero-img-wrapper">
								<img src="/img/home2/hero-img.jpg" alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="hero-lines">
					<img src="/img/home2/hero-line.png" alt="" />
					<img src="/img/home2/hero-white-line.png" alt="" />
				</div>
			</div>
		</section>
	);
}
