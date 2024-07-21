import Link from "next/link";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

export default function MenuItems({ items, isOpenMenu }) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	useEffect(() => {
		if (isOpenMenu === false) {
			setIsDropdownOpen(false);
		}
	}, [isOpenMenu]);

	return (
		<li>
			{items.submenu ? (
				<>
					<a
						className="dropdown-button"
						aria-expanded={isDropdownOpen ? "true" : "false"}
						type="button"
						role="button"
						aria-haspopup="menu"
						onClick={() => setIsDropdownOpen((prev) => !prev)}
					>
						{items.title}
						<span className="dropdown-arrow">
							{isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowBack />}
						</span>
					</a>

					<Dropdown submenus={items.submenu} isDropdownOpen={isDropdownOpen} />
				</>
			) : (
				<Link href={`${items.path !== "/" ? "/" + items.path : items.path}`}>
					<a>{items.title}</a>
				</Link>
			)}
		</li>
	);
}
