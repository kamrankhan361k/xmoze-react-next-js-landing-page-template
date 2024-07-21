import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
export default function SingleAccordion({ faq, active, onToggle }) {
	const { question, answer } = faq;
	const contentEl = useRef();
	let [answerWrapperHeight, setAnswerWrapperHeight] = useState(null);
	useEffect(() => {
		setAnswerWrapperHeight(contentEl.current.scrollHeight);
	}, [answerWrapperHeight]);

	return (
		<div>
			<div className="accordion-item">
				<h4 className="accordion-header" onClick={onToggle}>
					<button className="accordion-button" type="button">
						{question}
						<span className="control">{active ? <FaAngleDown /> : <FaAngleRight />}</span>
					</button>
				</h4>
				<div
					ref={contentEl}
					className="accordion-collapse accordion__answer-wrapper"
					style={active ? { height: answerWrapperHeight } : { height: "0px" }}
				>
					<div className="accordion-body">{answer}</div>
				</div>
			</div>
		</div>
	);
}
