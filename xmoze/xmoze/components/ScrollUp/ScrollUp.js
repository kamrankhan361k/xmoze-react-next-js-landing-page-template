import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
export default function ScrollUp() {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			if (window.scrollY > 500) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		showTopBtn && (
			<div id="scrollUp" onClick={goToTop}>
				<FaAngleUp />
			</div>
		)
	);
}
