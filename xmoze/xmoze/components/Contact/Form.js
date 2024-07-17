export default function Form() {
	return (
		<form action="#" className="contact-form row">
			<div className="col-12">
				<input type="text" placeholder="Name" />
			</div>
			<div className="col-12">
				<input type="email" placeholder="Email Address" />
			</div>
			<div className="col-12">
				<input type="text" placeholder="Phone Number" />
			</div>
			<div className="col-12">
				<textarea placeholder="Write your message"></textarea>
			</div>
			<div className="col-12">
				<button className="theme-btn" type="submit">
					Message Submit
				</button>
			</div>
		</form>
	);
}
