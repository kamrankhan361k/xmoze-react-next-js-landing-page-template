import dynamic from "next/dynamic";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function ContentOne() {
	const [isOpen, setOpen] = useState(false);
	return (
		<section className="promo-content-block fix section-padding">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-12">
						<div className="video-cta">
							<img src="/img/home2/video-banner.jpg" alt="" />
							<div className="video-play-btn" onClick={() => setOpen(true)}>
								<BsFillPlayFill />
							</div>

							<ModalVideo
								channel="youtube"
								autoplay
								isOpen={isOpen}
								videoId="E1xkXZs0cAQ"
								onClose={() => setOpen(false)}
							/>
						</div>
					</div>
					<div className="col-xl-6 col-12 ps-xl-5 mt-5 mt-xl-0 ">
						<div className="block-contents ms-xl-5">
							<div className="section-title mb-4">
								<h2 className="wow fadeInUp">The story behind how our company was founded</h2>
								<p className="wow fadeInUp pt-15" data-wow-delay=".3s">
									It is our experience that equips us, our emotions that drive us, and our creativity
									that sets us apart.
								</p>
								<p className="mt-3">
									To help keep our clients focused on the complex modern marketing world, we create
									digital integrated campaigns. We believe that small businesses create the most
									unique attractive and meaningful place to work.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
