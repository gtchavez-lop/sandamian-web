import Link from "next/link";
import { NextPage } from "next";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";

interface IBlogPostData {
	id: number;
	title: string;
	body: string;
	userId: number;
	tags: string[];
	reactions: number;
}

const BulettinPage: NextPage = () => {
	const blogPosts = useQuery({
		queryKey: ["blogPosts"],
		queryFn: () => {
			return fetch("https://dummyjson.com/posts")
				.then((res) => res.json())
				.then((data) => {
					return data.posts as IBlogPostData[];
				});
		},
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	});

	return (
		<>
			<div className="relative flex flex-col py-32 z-10 min-h-screen gap-5">
				<p className="text-3xl font-bold">See what&apos;s new and updated</p>

				<div className="grid grid-cols-1 gap-5">
					{blogPosts.isFetched &&
						blogPosts.data &&
						blogPosts.data.length > 0 &&
						blogPosts.data.map((item: IBlogPostData, index: number) => (
							<div className="rounded-btn overflow-hidden h-max max-h-max p-7 bg-base-200 group hover:bg-primary hover:text-primary-content transition-all">
								<Link href={`/bulettin/${item.id}`}>
									<h4 className="text-3xl font-semibold max-w-lg">{item.title}</h4>
									<div className="flex justify-between mt-10 items-center">
										<div className="flex items-center gap-10">
											<div className="flex items-center gap-2">
												<img src="https://picsum.photos/45" className="mask mask-circle" alt="" />
												<p className="leading-none">Gerald Chavez</p>
											</div>
											<p className="text-sm leading-none">
												{dayjs().format("MMM D, YYYY")}
											</p>
										</div>
										<div className="flex items-center gap-2">
											{item.tags.map((tag: string, index: number) => (
												<p className="text-sm leading-none badge badge-primary group-hover:badge-info">{tag}</p>
											))}
										</div>
									</div>
								</Link>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default BulettinPage;
