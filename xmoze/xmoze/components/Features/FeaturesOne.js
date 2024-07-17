import { AiOutlineBarChart } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

export default function FeaturesOne() {
	return (
		<section className="our-best-features-wrapper section-padding">
			<div className="container">
				<div className="col-xl-8 offset-xl-2 text-center">
					<div className="block-contents">
						<div className="section-title">
							<h2>The best crypto features you won't find anywhere else</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon1">
								<BiLockAlt />
							</div>
							<h3>Secure & Fast Payment</h3>
							<p>The most secure and fast payment can be made through cyptrocurrency</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon2">
								<AiOutlineBarChart />
							</div>
							<h3>Reports & Analytics</h3>
							<p>View daily transaction reports & analytics easily through xmoze & improve business</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon3">
								<FiSend />
							</div>
							<h3>Send & Receive Anytime</h3>
							<p>Send and receive money at any time with maximum security through xmoze app</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
