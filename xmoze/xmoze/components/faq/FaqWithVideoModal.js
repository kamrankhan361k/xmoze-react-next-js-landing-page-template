import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Accordion from "../Accordion/Accordion";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
export const faqsData = [
	{
		id: 1,
		question: "What can I do with Online Banking?",
		answer: "You can view account balances and transaction history, and transfer money between CSB accounts. You can online bill Payment that allows you to pay your bills quickly and easily!",
	},
	{
		id: 2,
		question: "When do I have access to use Online Banking?",
		answer: "You can view account balances and transaction history, and transfer money between CSB accounts. You can online bill Payment that allows you to pay your bills quickly and easily!",
	},
	{
		id: 3,
		question: "How current is my banking information?",
		answer: "You can view account balances and transaction history, and transfer money between CSB accounts. You can online bill Payment that allows you to pay your bills quickly and easily!",
	},
];
export default function FaqWithVideoModal() {
	const [isOpen, setOpen] = useState(false);

	return (
		<section className="faq-video-block section-padding section-bg">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-6 pe-xl-5 col-12">
						<div
							className="faq-video-wrapper me-xl-4 d-flex justify-content-center align-items-center bg-cover bg-center"
							style={{ backgroundImage: "url(img/faq-video-bg.jpg)" }}
						>
							<div className="video-play-btn" onClick={() => setOpen(true)}>
								<BsFillPlayFill />
							</div>
							<div className="arrow-icon">
								<img src="img/icons/video-arrow.svg" alt="" />
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
					<div className="col-xl-6 ps-xl-5 col-12 mt-xl-0 mt-5">
						<div className="block-contents ms-xl-4">
							<div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
								<h2>If you want to know anything, ask us</h2>
							</div>
						</div>
						<div className="faq-accordion ms-xl-4 me-xl-4">
							<div className="accordion" id="mainaccordion">
								<Accordion content={faqsData} />
							</div>
						</div>
						<div
							className="faq-bottom ms-xl-4 mt-4 wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".9s"
						>
							<span>Still have questions?</span>
							<Link href="/contact">
								<a>Get in touch</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
