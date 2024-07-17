import { BiLayerMinus } from "react-icons/bi";
import { FaHatCowboySide } from "react-icons/fa";
import { MdOutlineMobileScreenShare } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
export default function FeaturesFour() {
	return (
		<section className="strong-services-wrapper section-bg section-padding fw500">
			<div className="container">
				<div className="col-lg-8 ps-xl-5 pe-xl-5 col-12 offset-lg-2 text-center">
					<div className="block-contents">
						<div className="section-title wow fadeInUp" data-wow-duration="1s">
							<h2>Strong new features for banking services</h2>
							<p>
								In mobile banking you get all kinds of modern services It helps you focus on your core
								business and benefit.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-xl-3">
						<div className="strong-service-card card1">
							<div className="icon">
								<BiLayerMinus />
							</div>
							<div className="service-title">
								<h3>Credit and debit card facilities</h3>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-3">
						<div className="strong-service-card card2">
							<div className="icon">
								<MdOutlineMobileScreenShare />
							</div>
							<div className="service-title">
								<h3>Pay bills & deposit cheques online</h3>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-3">
						<div className="strong-service-card card3">
							<div className="icon">
								<FaHatCowboySide />
							</div>
							<div className="service-title">
								<h3>Lower your overhead fees</h3>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-3">
						<div className="strong-service-card card4">
							<div className="icon">
								<RiSecurePaymentFill />
							</div>
							<div className="service-title">
								<h3>Privacy and secure transactions</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
