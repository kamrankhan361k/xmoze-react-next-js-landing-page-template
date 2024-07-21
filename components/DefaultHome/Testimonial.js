import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
export default function Testimonial() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
	};
	return (
		<section className="testimonial-wrapper section-padding fix">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
					<div className="block-contents">
						<div className="section-title wow fadeInDown" data-wow-duration="1.2s">
							<h2>A place of trust for millions of people</h2>
						</div>
					</div>
				</div>
				<div className="col-12 col-xl-12">
					<div className="testimonial-carousel-active">
						<Slider {...settings}>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/1.jpg" }}
									></div>
									<div className="client-name">
										<h6>Scott Swanson</h6>
										<span>Account executive</span>
									</div>
								</div>
								<div className="feedback">
									“I have gained a strong knowledge about the architecture of Bitcoin. It helps me to
									easily transact and keep accounts.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/2.jpg" }}
									></div>
									<div className="client-name">
										<h6>Karen Lynn</h6>
										<span>Software engineer</span>
									</div>
								</div>
								<div className="feedback">
									“Excellent app for coin technology and it built on top of potential work. And there
									are programming assignments record.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/3.jpg" }}
									></div>
									<div className="client-name">
										<h6>Sean Jacobs</h6>
										<span>Financial analyst</span>
									</div>
								</div>
								<div className="feedback">
									“Greatest appreciation to you and your team for the outstanding job you did for us.
									The app is just what we wanted.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/1.jpg" }}
									></div>
									<div className="client-name">
										<h6>Scott Swanson</h6>
										<span>Account executive</span>
									</div>
								</div>
								<div className="feedback">
									“I have gained a strong knowledge about the architecture of Bitcoin. It helps me to
									easily transact and keep accounts.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/2.jpg" }}
									></div>
									<div className="client-name">
										<h6>Karen Lynn</h6>
										<span>Software engineer</span>
									</div>
								</div>
								<div className="feedback">
									“Excellent app for coin technology and it built on top of potential work. And there
									are programming assignments record.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
							<div className="single-testimoinal-item">
								<div className="client-info">
									<div
										className="client-img bg-cover"
										style={{ backgroundImage: "url(/img/testimonial/3.jpg" }}
									></div>
									<div className="client-name">
										<h6>Sean Jacobs</h6>
										<span>Financial analyst</span>
									</div>
								</div>
								<div className="feedback">
									“Greatest appreciation to you and your team for the outstanding job you did for us.
									The app is just what we wanted.”
								</div>
								<div className="rating">
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
									<AiFillStar className="icon-star" />
								</div>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
}
