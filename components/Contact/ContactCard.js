export default function ContactCard({ icon, contentOne, ContentTwo, className }) {
	return (
		<div className={`single-contact-box ${className}`}>
			<div className="icon">{icon}</div>
			<div className="contact-info">
				<span>{contentOne}</span>
				<span>{ContentTwo}</span>
			</div>
		</div>
	);
}
