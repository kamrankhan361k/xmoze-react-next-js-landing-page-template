import { useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
export default function Testimonial() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 950,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		lazyLoad: true,
		responsive: [
			{
				breakpoint: 1360,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1191,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const sliderRef = useRef(null);

	return (
		<section className="testimonial-carousel-wrapper section-padding fix">
			<div className="container">
				<div className="row fix align-items-center">
					<div className="col-lg-8">
						<div className="block-contents text-center text-lg-start">
							<div className="section-title">
								<h2 className="wow fadeInLeft" data-wow-duration="1.1s">
									We have powerful user experience
								</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-4 d-none d-lg-block text-center text-lg-end">
						<div className="testimoinial-nav red-color">
							<div onClick={() => sliderRef.current?.slickPrev()} className="testimonial-nav-prev">
								<FaArrowLeft />
							</div>
							<div onClick={() => sliderRef.current?.slickNext()} className="testimonial-nav-next">
								<FaArrowRight />
							</div>
						</div>
					</div>
				</div>

				<div className="testimonial-nav-carousel-active">
					<Slider ref={sliderRef} {...settings}>
						<div className="single-testimoinal-item style-2">
							<div className="rating">
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
							</div>
							<div className="feedback">
								“Greatest appreciation to you and your team for the outstanding job you did for us. The
								website is just what we wanted, and we were thrilled with the speed your team
								exercises.”
							</div>
							<div className="client-info">
								<div
									className="client-img bg-cover"
									style={{ backgroundImage: "url(/img/testimonial/1.jpg)" }}
								></div>
								<div className="client-name">
									<h6>Scott Swanson</h6>
									<span>Account executive</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-item style-2">
							<div className="rating">
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
							</div>
							<div className="feedback">
								“Greatest appreciation to you and your team for the outstanding job you did for us. The
								website is just what we wanted, and we were thrilled with the speed your team
								exercises.”
							</div>
							<div className="client-info">
								<div
									className="client-img bg-cover"
									style={{ backgroundImage: "url(/img/testimonial/1.jpg)" }}
								></div>
								<div className="client-name">
									<h6>Scott Swanson</h6>
									<span>Account executive</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-item style-2">
							<div className="rating">
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
							</div>
							<div className="feedback">
								“Greatest appreciation to you and your team for the outstanding job you did for us. The
								website is just what we wanted, and we were thrilled with the speed your team
								exercises.”
							</div>
							<div className="client-info">
								<div
									className="client-img bg-cover"
									style={{ backgroundImage: "url(/img/testimonial/1.jpg)" }}
								></div>
								<div className="client-name">
									<h6>Scott Swanson</h6>
									<span>Account executive</span>
								</div>
							</div>
						</div>
						<div className="single-testimoinal-item style-2">
							<div className="rating">
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
								<AiFillStar className="icon-star" />
							</div>
							<div className="feedback">
								“Greatest appreciation to you and your team for the outstanding job you did for us. The
								website is just what we wanted, and we were thrilled with the speed your team
								exercises.”
							</div>
							<div className="client-info">
								<div
									className="client-img bg-cover"
									style={{ backgroundImage: "url(/img/testimonial/1.jpg)" }}
								></div>
								<div className="client-name">
									<h6>Scott Swanson</h6>
									<span>Account executive</span>
								</div>
							</div>
						</div>
					</Slider>
				</div>

				<div className="col-lg-4 d-block mt-5 mr-lg-0 d-lg-none text-center">
					<div className="testimoinial-nav red-color">
						<div className="testimonial-nav-prev" onClick={() => sliderRef.current?.slickPrev()}>
							<FaArrowLeft />
						</div>
						<div className="testimonial-nav-next" onClick={() => sliderRef.current?.slickNext()}>
							<FaArrowRight />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
