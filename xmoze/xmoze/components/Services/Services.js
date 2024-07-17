import { servicesData } from "./servicesData";
import SingleService from "./SingleService";

export default function Services() {
	return (
		<section className="services-wrapper fix section-padding">
			<div className="container">
				<div className="col-lg-8 ps-xl-5 pe-xl-5 col-12 offset-lg-2 text-center">
					<div className="block-contents">
						<div className="section-title wow fadeInUp" data-wow-duration="1s">
							<h2>Awesome services grow your business value</h2>
							<p>
								Xmoze is a simple software that allows you to run your business easily. One software
								tool brings the whole business together.
							</p>
						</div>
					</div>
				</div>

				<div className="row text-center text-lg-start">
					{servicesData.map((service) => (
						<div className="col-md-6 col-xl-4 col-12" key={service.id}>
							<SingleService service={service} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
