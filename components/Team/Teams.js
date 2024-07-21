import SingleTeam from "./SingleTeam";
import teamData from "./teamData";

export default function Teams() {
	return (
		<section className="our-team-wrapper section-bg section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 text-center">
						<div className="block-contents">
							<div className="section-title wow fadeInDown" data-wow-duration="1.2s">
								<h2>Meet members of our creative team</h2>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					{teamData.map((team) => (
						<div key={team.id} className="col-xl-4 col-md-6">
							<SingleTeam team={team} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
