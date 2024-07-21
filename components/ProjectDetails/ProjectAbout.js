import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ProjectGallary from "../Slider/ProjectGallary";
export default function ProjectAbout() {
	return (
		<section className="project-details-wrapper section-padding">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-7 col-12 ">
						<ProjectGallary />
					</div>
					<div className="col-xl-5 col-12 mt-5 pe-xl-0 mt-xl-0">
						<div className="project-details-content">
							<h3>About our creative art project</h3>
							<p className="mt-3">
								A creative work is a manifestationa creative effort including fine artwork (sculpture,
								paintings, drawing, sketching, performance art), dance, writing (literature),
								filmmaking, & great composition.
							</p>
							<p className="mt-3">
								By engaging in art activities, children practice a variety of skills and progress in all
								areas of development. Creative art helps to children grow in physical, social,
								cognitive, and emotional build development. Children also practice imagination and Put
								up an art ideas bulletin boardexperimentation as they invent.
							</p>
							<ul>
								<li>
									<b>Client:</b> <span>Classic art Industries</span>
								</li>
								<li>
									<b>Category:</b> <span>Web Design</span>
								</li>
								<li>
									<b>Duration:</b> <span>1 Weeks</span>
								</li>
							</ul>
							<div className="project-share d-flex align-items-center">
								<div className="title-heading">
									<b>Share On:</b>
								</div>
								<div className="social-platform">
									<Link href="#">
										<a>
											<FaFacebookF />
										</a>
									</Link>
									<Link href="#">
										<a>
											<FaTwitter />
										</a>
									</Link>
									<Link href="#">
										<a>
											<FaInstagram />
										</a>
									</Link>
									<Link href="#">
										<a>
											<FaLinkedinIn />
										</a>
									</Link>
								</div>
							</div>
							<div className="project-demo-btn mt-30">
								<a href="#" className="theme-btn">
									Visit Website
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
