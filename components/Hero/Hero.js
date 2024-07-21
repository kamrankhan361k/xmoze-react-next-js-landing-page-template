import React from "react";

export default function Hero() {
	return (
		<section className="hero-welcome-wrapper hero-1">
			<div className="single-slide text-white">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0">
							<div className="hero-contents">
								<h1>Secure solutions for digital assets and money easily</h1>
								<p>
									The easiest, safest and fastest app for cryptocurrency. banks for international
									money transfers and online money transfer services considered the safest way.
								</p>
								<a href="#" className="app-download-btn">
									<img src="img/apple.png" alt="" />
								</a>
								<a href="#" className="app-download-btn">
									<img src="img/android.png" alt="" />
								</a>
								<div className="tri-arrow">
									<img src="img/icons/tir-shape.svg" alt="" />
								</div>
							</div>
						</div>
						<div className="col-xl-5 col-12 text-xl-end col-lg-10 offset-lg-1 offset-xl-0">
							<div className="hero-mobile mt-5 mt-xl-0">
								<img src="img/mobile-hero1.png" alt="xmoze app" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
