import { NextPage } from "next";

const people = [
	{
		name: "Leslie Alexander",
		role: "Co-Founder / CEO",
		imageUrl: "https://i.pravatar.cc/300?img=1",
	},
	{
		name: "Michael Foster",
		role: "Co-Founder / CTO",
		imageUrl: "https://i.pravatar.cc/300?img=2",
	},
	{
		name: "James Sunderland",
		role: "Co-Founder / CTO",
		imageUrl: "https://i.pravatar.cc/300?img=3",
	},
	{
		name: "Diane Chambers",
		role: "Co-Founder / CTO",
		imageUrl: "https://i.pravatar.cc/300?img=4",
	},
	{
		name: "Linda Belcher",
		role: "Co-Founder / CTO",
		imageUrl: "https://i.pravatar.cc/300?img=5",
	},
	{
		name: "Morty Smith",
		role: "Co-Founder / CTO",
		imageUrl: "https://i.pravatar.cc/300?img=6",
	},
];

const AboutPage: NextPage = () => {
	return (
		<>
			<div className="py-32 min-h-screen">
				<div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
					<div className="max-w-2xl">
						<h2 className="text-3xl font-bold tracking-tight opacity-90 sm:text-4xl">
							Who we are
						</h2>
						<p className="mt-6 text-lg leading-8 opacity-75">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
							impedit corporis suscipit, dignissimos deserunt est provident
							fugit doloribus ipsum iusto illum fuga! Quaerat similique corrupti
							temporibus at quo accusantium, dolore totam officia deserunt
							eligendi repellat non omnis ipsa magnam, laboriosam, error beatae
							tempora eum qui et quia! A, ratione sed!
						</p>
					</div>
					<ul
						role="list"
						className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 h-max"
					>
						{people.map((person) => (
							<li key={person.name}>
								<div className="flex items-center gap-x-6">
									<img
										className="h-16 w-16 rounded-full"
										src={person.imageUrl}
										alt=""
									/>
									<div>
										<h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
											{person.name}
										</h3>
										<p className="text-sm font-semibold leading-6 text-indigo-600">
											{person.role}
										</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default AboutPage;
