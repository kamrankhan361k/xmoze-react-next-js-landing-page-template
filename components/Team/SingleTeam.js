export default function SingleTeam({ team: { name, title, img } }) {
	return (
		<div className="single-team-member">
			<div className="member-img bg-cover" style={{ backgroundImage: `url(/img/${img}` }}></div>
			<div className="member-info">
				<h4>{name}</h4>
				<span>{title}</span>
			</div>
		</div>
	);
}
