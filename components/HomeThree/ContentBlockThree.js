import React from 'react';

export default function ContentBlockThree() {
  return (
		<section className="content-block theme-bg section-padding fw500">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 pe-lg-0 col-12">
						<div className="mobile-block">
							<img src="/img/home3/mobile-block.png" alt="" />
						</div>
					</div>
					<div className="col-lg-6 mt-5 mt-lg-0 offset-lg-1 col-12 ps-lg-5 pe-lg-5">
						<div className="block-contents ms-xl-3">
							<div className="section-title mb-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
								<h2>Simple & effortless process app setup</h2>
							</div>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
								You can easily download the app on your mobile & open a bank account in your name with
								the required information.
							</p>
						</div>
						<div className="step-features">
							<div className="single-featured-item item1 wow fadeInUp" data-wow-delay=".3s">
								<h4>Download from the Play Store on any device</h4>
								<p>
									You can easily download the xmoze app from the App Store or Google Play on any
									device
								</p>
							</div>
							<div className="single-featured-item item2 wow fadeInUp" data-wow-delay=".5s">
								<h4>Create an account with needful information</h4>
								<p>
									Open a secure account for yourself with your name and necessary information that
									need
								</p>
							</div>
							<div className="single-featured-item item3 wow fadeInUp" data-wow-delay=".7s">
								<h4>Experience best banking services anytime</h4>
								<p>
									Mobile banking allows consumers to be able to access banking services from anywhere.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
