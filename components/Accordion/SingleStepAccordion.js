import { useEffect, useRef, useState } from "react";
export default function SingleStepAccordion({ content, active, onToggle }) {
	const { title, body } = content;
	const contentEl = useRef();
	let [answerWrapperHeight, setAnswerWrapperHeight] = useState(null);
	useEffect(() => {
		setAnswerWrapperHeight(contentEl.current.scrollHeight);
	}, [answerWrapperHeight]);
	return (
		<div className="accordion-item wow fadeInUp">
			<h4 className="accordion-header" onClick={onToggle}>
				<button className="accordion-button" type="button">
					{title}
				</button>
			</h4>
			<div
				ref={contentEl}
				className="accordion-collapse accordion__answer-wrapper"
				style={active ? { height: answerWrapperHeight } : { height: "0px" }}
			>
				<div className="accordion-body">{body}</div>
			</div>
		</div>
	);
}
