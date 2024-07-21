import Accordion from "../Accordion/Accordion";

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

export default function FaqContent() {
	return (
		<section className="faq-ask-wrapper section-padding">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
					<div className="block-contents fw500">
						<div className="section-title wow fadeInUp" data-wow-duration="1s">
							<h2>If you want to know anything, ask us</h2>
						</div>
					</div>
				</div>

				<div className="row faq-ask">
					<div className="col-lg-6 col-12">
						<div className="faq-accordion">
							<Accordion content={faqsData} />
						</div>
					</div>
					<div className="col-lg-6 col-12">
						<div className="faq-accordion">
							<Accordion content={faqsData} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
