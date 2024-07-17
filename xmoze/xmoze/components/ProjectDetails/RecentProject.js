import RecentProjectSlider from "../Slider/RecentProjectSlider";

export default function RecentProject() {
	return (
		<section className="recent-project-wrapper fix pt-0 section-padding">
			<div className="container">
				<div className="rp-title">
					<h2 className="mtm-5">Recent Projects</h2>
				</div>
				<RecentProjectSlider />
			</div>
		</section>
	);
}
