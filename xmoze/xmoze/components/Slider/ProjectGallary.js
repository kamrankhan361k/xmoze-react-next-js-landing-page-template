import Slider from "react-slick";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<BsArrowRight />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<BsArrowLeft />
		</div>
	);
}

export default function ProjectGallary() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 888,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div className="project-gallery me-xl-2">
			<Slider {...settings}>
				<div
					className="single-portfolio-slide bg-cover"
					style={{ backgroundImage: "url(/img/portfolio/port1.jpg)" }}
				></div>
				<div
					className="single-portfolio-slide bg-cover"
					style={{ backgroundColor: "url(/img/portfolio/port2.jpg)" }}
				></div>
				<div
					className="single-portfolio-slide bg-cover"
					style={{ backgroundImage: "url(/img/portfolio/port3.jpg)" }}
				></div>
			</Slider>
		</div>
	);
}
