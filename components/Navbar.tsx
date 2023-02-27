import { FC } from "react";
import Link from "next/link";

const Navbar: FC = () => {
	return (
		<nav className="fixed flex justify-center items-center top-0 left-0 px-5 lg:px-0 w-full py-5 z-50 bg-base-100">
			<div className="flex items-center justify-between w-full max-w-5xl">
				<div className="flex items-center gap-2">
					<img
						src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/308484557_425350703069840_285216151082948373_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGlUyJiO9tyz9HzCYmmL1G7nAlPgLN0yqecCU-As3TKp89V0VFrwy8sAmdELqQciO_n6SsZ3KtYuBC_kVM1fmY9&_nc_ohc=dWZUgaUEYkAAX_81wtr&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfD9lrwBFMNMnfpMr7Lfd_xzYMdEjuWaoQQWgL9-aO89Ww&oe=63FFE5A9"
						alt=""
						className="mask mask-squircle w-10"
					/>
					<p className="text-lg font-bold">San Damian Web</p>
				</div>
				<div className="flex items-center gap-2">
					<Link href="/" className="btn btn-ghost">
						Home
					</Link>
					<Link href="/bulettin" className="btn btn-ghost">
						Bulettin
					</Link>
					<Link href="/about" className="btn btn-ghost">
						About
					</Link>
					<Link href='/contact' className="btn btn-ghost">
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
