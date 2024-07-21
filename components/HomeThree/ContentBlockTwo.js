import React from 'react';

export default function ContentBlockTwo() {
  return (
		<section className="content-block section-padding style-2 section-bg-2 fw500">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-5 mt-5 mt-xl-0 order-2 order-xl-1">
						<div className="block-contents">
							<div className="section-title mb-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
								<h2>Clean and full intuitive user interface system</h2>
							</div>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
								The Xmoze Banking App interface is so simple that you can easily find out the details of
								any change, transaction account, expense in your account.
							</p>
							<ul className="checked-list bg-checked color-set">
								<li className="wow fadeInUp" data-wow-delay=".5s">
									This will help speed up your business
								</li>
								<li className="wow fadeInUp" data-wow-delay=".7s">
									Make money security and control easier
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-5 offset-xl-2 ps-xl-0 order-1 order-xl-2">
						<div className="block-img">
							<img src="/img/home3/block2.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
