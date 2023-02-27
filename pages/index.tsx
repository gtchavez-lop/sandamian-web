import { useEffect, useState } from "react";

import { FiHeart } from "react-icons/fi";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { NextPage } from "next";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

interface IBlogPostData {
	id: number;
	title: string;
	body: string;
	userId: number;
	tags: string[];
	reactions: number;
}

const HomePage: NextPage = () => {
	const [scrollY, setScrollY] = useState<number>(0);

	const fetchLatestBulettin = async () => {
		return fetch("https://dummyjson.com/posts")
			.then((res) => res.json())
			.then((data) => {
				let limited = data.posts.slice(0, 2);
				return limited as IBlogPostData[];
			});
	};

	const blogData = useQuery({
		queryKey: ["blogPosts"],
		queryFn: fetchLatestBulettin,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<div className="relative pb-16">
				{/* img background with filter */}
				<motion.div
					animate={{ y: -scrollY * 0.5, opacity: 0.75 - scrollY / 500 }}
					transition={{ type: "spring", mass: 1, stiffness: 320, damping: 50 }}
					className="fixed top-0 left-0 w-full h-screen -z-10 opacity-50"
				>
					<video
						src="/landing-vid.mp4"
						autoPlay
						loop
						controls={false}
						className="w-full h-full object-cover z-0"
					/>
					{/* <img
						className="w-full h-full object-cover object-center z-0 filter grayscale"
						src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.6435-9/76246697_2498571470425975_2403004480938311680_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFGiw3N-zrFEYU_1F4G50zWIc_mTpXI-Dshz-ZOlcj4O3YqJeKPrwlqwh1qpo2UOY1lFGwTQpzC4hnZds7F1Hkd&_nc_ohc=n4-g0sX8OZ0AX-v_848&_nc_ht=scontent.fmnl17-1.fna&oh=00_AfA4jlJCQv5MBFAtcgpa9JacWE1jHj332_s5bqUfTqfeIw&oe=64226080"
						alt=""
					/> */}
					<div className="bg-base-100 z-[2] w-full h-full absolute top-0 opacity-50" />
				</motion.div>

				{/* hero */}
				<div className="relative flex flex-col items-center justify-center z-10 min-h-screen gap-5">
					<div className="text-sm rounded-btn border border-info p-1 px-3 cursor-pointer hover:bg-info hover:text-info-content transition">
						For inquiries and donations, please contact us by clicking here
					</div>
					<p className="text-center font-bold text-4xl">
						A community of faith, hope, and love.
					</p>
					<p className="text-center max-w-lg">
						San Damian Center is a community outreach program established by the
						Congregation of Sacred Hearts of Jesus and Mary.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 mt-5 w-full max-w-md gap-2">
						<Link href={"/bulettin"} className="btn btn-primary">
							Bulettin
						</Link>
						<div className="btn btn-ghost gap-3">
							Learn More
							<MdArrowForward />
						</div>
					</div>
				</div>

				{/* vision and responsibilities */}
				<section>
					<div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
						<div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
							<div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
								<h2 className="text-3xl font-bold sm:text-4xl">
									We serve as one, we help as one.
								</h2>

								<p className="mt-4 opacity-75">
									Our belief in serving and helping as one is rooted in our
									faith and mission to spread love, compassion, and kindness to
									those in need. We strive to embody these values not only in
									our work but also in our daily lives, as we seek to build a
									more just and equitable world. We are committed to working
									together as a team, utilizing our diverse skills and
									experiences to achieve our shared goals and make a meaningful
									impact in the communities we serve.
								</p>

								<p className="mt-8 btn btn-primary">Get Started Today</p>
							</div>

							<div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
								<p className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
									<span className="inline-block rounded-lg bg-gray-50 p-3">
										<FiHeart />
									</span>

									<h2 className="mt-2 font-bold">Compassion</h2>

									<p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
										Experience compassion in the community.
									</p>
								</p>

								<p className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
									<span className="inline-block rounded-lg bg-gray-50 p-3">
										<FiHeart />
									</span>

									<h2 className="mt-2 font-bold">Care</h2>

									<p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
										Receive tangible and emotional care from us.
									</p>
								</p>

								<p className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
									<span className="inline-block rounded-lg bg-gray-50 p-3">
										<FiHeart />
									</span>

									<h2 className="mt-2 font-bold">Support</h2>

									<p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
										We&apos;re here to support you in your well-being.
									</p>
								</p>

								<p className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
									<span className="inline-block rounded-lg bg-gray-50 p-3">
										<FiHeart />
									</span>

									<h2 className="mt-2 font-bold">Faith</h2>

									<p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
										Through faith, we can overcome any obstacle.
									</p>
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* <div className="relative grid grid-cols-1 md:grid-cols-2 z-10 py-16 gap-5 gap-x-3">
					<p className="text-3xl font-bold col-span-full mb-5">
						Our Mission and Vision
					</p>
					<div className="p-5 bg-base-200 hover:bg-primary hover:text-primary-content transition rounded-btn">
						<p className="text-2xl font-bold">Mission</p>
						<p>
							Our mission is to create a secure and supportive space for the
							youth in our community, where they can thrive and grow. We aim to
							foster an environment that is not only safe and protective but
							also nurturing and encouraging. We&apos;re committed to providing
							the resources and guidance necessary for children and young people
							to reach their full potential and become responsible and
							productive members of society.
						</p>
					</div>
					<div className="p-5 bg-base-200 hover:bg-primary hover:text-primary-content transition rounded-btn">
						<p className="text-2xl font-bold">Vision</p>
						<p>
							Our vision is to empower the youth in our community to become
							successful and well-rounded individuals, by providing a safe and
							nurturing environment that supports their growth and development.
							We aspire to create a future where our children and young people
							have the resources and guidance they need to achieve their goals
							and contribute positively to society.
						</p>
					</div>
				</div> */}

				{/* volunteering */}
				<div className="relative grid grid-cols-1 md:grid-cols-2 z-10 py-16 gap-5 gap-x-3">
					<div className="flex flex-col justify-center gap-5">
						<p className="text-3xl font-bold col-span-full mb-5">
							Volunteer with us
						</p>
						<p>
							We are always looking for volunteers to help us with our programs
							and activities. If you&apos;re interested in volunteering with us,
							please contact us by clicking here.
						</p>
						<p>
							You can also donate to us by clicking here. Your donations will
							help us continue our programs and activities.
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<motion.img
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{
								type: "spring",
								mass: 1,
								stiffness: 270,
								damping: 80,
							}}
							src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.6435-9/67402804_2411688685780921_1835566591635357696_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGfeiB3kIAXz_N8YL3HaOdIAZJXNVTUWfYBklc1VNRZ9gK4oHEvqszfc6v1qn_21gnXNbRIdoLhjKbN5sKuI6YQ&_nc_ohc=NItts0y_XsEAX_2AYNc&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfCap78h1wk_iLp-IIy3ZnC7KnkP1WOnwj4s4PliMjXHHg&oe=64228780"
							alt=""
							className="w-full h-[250px] object-cover object-center rounded-btn"
						/>
						<motion.img
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{
								type: "spring",
								mass: 1,
								stiffness: 270,
								damping: 80,
							}}
							src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.6435-9/67980075_2414510185498771_1547864131388833792_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFvEEQs1Ng8CTDSM155hgsgPu_-XNRmj9o-7_5c1GaP2ja8FbyAvdb1QbJB7sgAeph37jR7VF4CCxTDwqzfmpjQ&_nc_ohc=hH6BS5Ex2gAAX_BNkn-&_nc_ht=scontent.fmnl17-1.fna&oh=00_AfCm028ujfQp_i5uERhkr_KrF0q_73_EByEW-GyWDdIeiQ&oe=64228041"
							alt=""
							className="w-full h-[250px] object-cover object-center rounded-btn"
						/>
					</div>
				</div>

				{/* recent news */}
				<div className="flex flex-col z-10 py-16 gap-3">
					<p className="col-span-full text-3xl font-bold mb-2">Recent News</p>
					{blogData.isSuccess &&
						blogData.data.length > 0 &&
						blogData.data.map((item, i) => (
							<div className="rounded-btn overflow-hidden h-max max-h-max p-7 bg-base-200 group hover:bg-primary hover:text-primary-content transition-all">
								<Link href={`/bulettin/${item.id}`}>
									<h4 className="text-3xl font-semibold max-w-lg">
										{item.title}
									</h4>
									<div className="flex justify-between mt-10 items-center">
										<div className="flex items-center gap-10">
											<div className="flex items-center gap-2">
												<img
													src="https://picsum.photos/45"
													className="mask mask-circle"
													alt=""
												/>
												<p className="leading-none">Gerald Chavez</p>
											</div>
											<p className="text-sm leading-none">
												{dayjs().format("MMM D, YYYY")}
											</p>
										</div>
										<div className="flex items-center gap-2">
											{item.tags.map((tag: string, index: number) => (
												<p className="text-sm leading-none badge badge-primary group-hover:badge-info">
													{tag}
												</p>
											))}
										</div>
									</div>
								</Link>
							</div>
						))}
				</div>

				{/* contact us */}
				<div className="relative grid grid-cols-1 md:grid-cols-2 z-10 py-16 gap-5 content-center">
					<div>
						<img
							src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.6435-9/59938141_2354662721483518_7889179564914507776_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEG_vOPCByyf4trQUbXbt1SSK1CWysn2FdIrUJbKyfYV0q5Xop8NoQ7leO4R7yN8rz5CGQwbe_f0OfkGTWXg7Ea&_nc_ohc=8Fpr5xCIWk4AX8vyQWs&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfCaDHFO_p4VCqxSyPFExGNNIfN_j14_Qg_-05FL7oUMRA&oe=64229032"
							alt=""
							className="w-full h-full object-cover object-center rounded-btn"
						/>
					</div>
					<div>
						<p className="text-3xl font-bold">Contact Us</p>
						<p className="leading-tight mb-5">
							You can contact us through the following details:
						</p>

						<div className="flex flex-col gap-2">
							<input
								type="text"
								className="input input-primary w-full"
								placeholder="Enter your name"
							/>
							<input
								type="email"
								className="input input-primary w-full"
								placeholder="Enter your email"
							/>
							<textarea
								className="textarea textarea-primary w-full"
								rows={5}
								placeholder="Enter your email"
							/>

							<button className="btn btn-primary">Send</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
