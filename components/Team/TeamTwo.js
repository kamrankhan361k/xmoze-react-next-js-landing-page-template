import Link from "next/link";
import SingleTeam from "./SingleTeam";
import teamData from "./teamData";

export default function TeamTwo() {
	return (
		<section className="our-team-wrapper section-bg section-padding">
			<div className="container">
				<div className="row d-flex align-items-end mb-4 mb-lg-5">
					<div className="col-lg-7 text-center text-lg-start col-xl-5">
						<div className="block-contents">
							<div className="section-title mb-0 wow fadeInDown" data-wow-duration="1.2s">
								<h2 className="mb-0">Meet members of our creative team</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-5 d-none d-lg-block mt-lg-0 offset-xl-3 col-xl-4 text-lg-end">
						<Link href="/team">
							<a className="theme-btn">Meet All Members</a>
						</Link>
					</div>
				</div>

				<div className="row">
					{teamData.slice(0, 3).map((team) => (
						<div key={team.id} className="col-xl-4 col-md-6">
							<SingleTeam team={team} />
						</div>
					))}
				</div>
				<div className="col-12 text-center mt-5 mt-lg-0 d-block d-md-none">
					<Link href="/team">
						<a className="theme-btn">Meet All Members</a>
					</Link>
				</div>
			</div>
		</section>
	);
}
