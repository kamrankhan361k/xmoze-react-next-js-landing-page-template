import Slider from "react-slick";
export default function RecentProjectSlider() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 888,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
	};
	return (
		<div className="recent-project-carousel">
			<Slider {...settings}>
				<div className="single-project-card">
					<div
						className="project-thumb bg-cover"
						style={{ backgroundImage: "url(/img/portfolio/1.jpg)" }}
					></div>
					<div className="contents">
						<h5>
							<a href="/project-details">Work station</a>
						</h5>
						<span>UI/UX Design</span>
					</div>
				</div>
				<div className="single-project-card">
					<div
						className="project-thumb bg-cover"
						style={{ backgroundImage: "url(/img/portfolio/2.jpg)" }}
					></div>
					<div className="contents">
						<h5>
							<a href="/project-details">Flowers in vases</a>
						</h5>
						<span>Photography</span>
					</div>
				</div>
				<div className="single-project-card">
					<div
						className="project-thumb bg-cover"
						style={{ backgroundImage: "url(/img/portfolio/3.jpg)" }}
					></div>
					<div className="contents">
						<h5>
							<a href="/project-details">Creative art work</a>
						</h5>
						<span>Branding</span>
					</div>
				</div>
				<div className="single-project-card">
					<div
						className="project-thumb bg-cover"
						style={{ backgroundImage: "url(/img/portfolio/4.jpg)" }}
					></div>
					<div className="contents">
						<h5>
							<a href="/project-details">art design</a>
						</h5>
						<span>Creative</span>
					</div>
				</div>
				<div className="single-project-card">
					<div
						className="project-thumb bg-cover"
						style={{ backgroundImage: "url(/img/portfolio/8.jpg)" }}
					></div>
					<div className="contents">
						<h5>
							<a href="/project-details">Open books</a>
						</h5>
						<span>Creative</span>
					</div>
				</div>
			</Slider>
		</div>
	);
}
