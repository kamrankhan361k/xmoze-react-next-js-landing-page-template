import Link from "next/link";

export default function ErrorContent() {
	return (
		<section className="error-404-wrapper section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-3 text-center">
						<div className="error-content">
							<img src="/img/404.png" alt="" />
							<h1 className="mt-5 mb-3">Oops! Page not found.</h1>
							<p>
								It appears the page you were looking for couldn't be found. Try going to Home Page by
								using the button below.
							</p>
							<Link href="/">
								<a className="theme-btn mt-50">Back To Homepage</a>
							</Link>
						</div>
						<div className="leaf">
							<img src="/img/leaf.png" alt="" />
						</div>
						<div className="leaf-copy">
							<img src="/img/leaf.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
