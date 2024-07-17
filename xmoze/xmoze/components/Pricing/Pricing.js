import SinglePrice from "./SinglePrice";

export default function Pricing({ content }) {
	return (
		<div className="row align-items-center">
			{content.map((price) => (
				<div className="col-lg-6 col-xl-4 col-12" key={price.id}>
					<SinglePrice price={price} />
				</div>
			))}
		</div>
	);
}
