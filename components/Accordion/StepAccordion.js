import { useState } from "react";
import SingleStepAccordion from "./SingleStepAccordion";
export default function StepAccordion({ content }) {
	const [clicked, setClicked] = useState(0);
	const handleToggle = (index) => {
		setClicked(index);
	};
	return (
		<div className="accordion" id="accordion">
			{content.map((content, index) => (
				<SingleStepAccordion
					active={clicked === index}
					key={content.id}
					content={content}
					onToggle={() => handleToggle(index)}
				/>
			))}
		</div>
	);
}
