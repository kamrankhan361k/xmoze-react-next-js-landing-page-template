import React from 'react';

export default function ContentBlockOne() {
  return (
		<section className="content-block style-2 section-padding fw500">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-5 pe-xl-0">
						<div className="block-img">
							<img src="/img/home3/block1.png" alt="" />
						</div>
					</div>
					<div className="col-xl-6 mt-5 mt-xl-0 offset-xl-1 ps-xl-5">
						<div className="block-contents">
							<div className="section-title mb-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
								<h2>Smart banking app that you must like</h2>
							</div>
							<p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
								Online and mobile banking makes handling your finances easier and more convenient, but
								it is imperative to make sure that you are protecting your financial information.
							</p>
							<ul className="checked-list bg-checked">
								<li className="wow fadeInUp" data-wow-delay=".5s">
									Calculate input output results easily
								</li>
								<li className="wow fadeInUp" data-wow-delay=".7s">
									Prevent waste and increase income
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
