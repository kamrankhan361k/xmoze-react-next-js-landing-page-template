import React from 'react';

export default function CallToAction() {
  return (
		<section className="cta-banner-wrapper style-1 section-padding pt-0">
			<div className="container">
				<div className="cta-banner text-white">
					<div className="row">
						<div className="col-xxl-6 text-center text-xxl-start offset-xxl-1">
							<div className="cta-contents">
								<h2 className="wow fadeInUp">Download & explore the our crypto world</h2>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									The most popular crypto app of today. In which you can easily get in convenient to
									interest on sending and receiving money.
								</p>
								<a href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".6s">
									<img src="/img/apple.png" alt="" />
								</a>
								<a href="#" className="app-download-btn wow fadeInUp" data-wow-delay=".8s">
									<img src="/img/android.png" alt="" />
								</a>
								<div className="tri-arrow wow fadeInRight d-none d-md-inline-block" data-wow-delay="1s">
									<img src="/img/icons/tir-shape.svg" alt="" />
								</div>
							</div>
						</div>
						<div className="col-xxl-5 pe-xxl-5">
							<div className="cta-mobile-app wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1.2">
								<img src="img/cta-right-img.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
