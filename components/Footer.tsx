import { FC } from "react";

const Footer: FC = () => {
	return (
		<footer aria-label="Site Footer">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-center sm:justify-between">
					<div className="flex justify-center text-primary sm:justify-start items-center gap-3">
						<img
							src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/308484557_425350703069840_285216151082948373_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGlUyJiO9tyz9HzCYmmL1G7nAlPgLN0yqecCU-As3TKp89V0VFrwy8sAmdELqQciO_n6SsZ3KtYuBC_kVM1fmY9&_nc_ohc=dWZUgaUEYkAAX_81wtr&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfD9lrwBFMNMnfpMr7Lfd_xzYMdEjuWaoQQWgL9-aO89Ww&oe=63FFE5A9"
							alt=""
							className="mask mask-squircle w-10"
						/>
						<p className="text-lg font-bold">San Damian Web</p>
					</div>

					<p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
						Copyright &copy; 2022. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
