import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
export default function Pagination() {
	return (
		<div className="page-nav-wrap wow fadeInUp mt-80 text-center" data-wow-delay=".3s">
			<ul>
				<li className="current-page">
					<Link href="#">
						<a>1</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>2</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>3</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>4</a>
					</Link>
				</li>
				<li>
					<Link href="#">
						<a>
							<HiArrowRight />
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
}
