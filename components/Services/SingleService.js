import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function SingleService({ service }) {
	return (
		<div className="service-box-item">
			<div className="icon">
				<img src={`/img/icons/${service.icon}`} alt="" />
			</div>
			<div className="content">
				<h4>{service.title}</h4>
				<p>{service.content}</p>
				<Link href="/services-details">
					<a>
						View Details <BsArrowRight />
					</a>
				</Link>
			</div>
		</div>
	);
}
