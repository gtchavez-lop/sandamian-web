import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MdArrowBack, } from "react-icons/md"; 

import Link from "next/link";

interface IBlogPostData {
	id: number;
	title: string;
	body: string;
	userId: number;
	tags: string[];
	reactions: number;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch("https://dummyjson.com/posts");
	const data = await res.json();

	const paths = data.posts.map((post: IBlogPostData) => {
		return {
			params: { slug: post.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const params = context.params;
	const res = await fetch(`https://dummyjson.com/posts/${params!.slug}`);
	const blogPostData = await res.json();

	return {
		props: {
			blogPostData,
		},
	};
};

const BulettinPageDynamic: NextPage<{ blogPostData: IBlogPostData }> = ({
	blogPostData,
}) => {
	return (
		<>
			<div className="relative flex flex-col py-32 z-10 min-h-screen gap-5">
				<Link
					href="/bulettin"
					className="btn btn-ghost items-center gap-3 justify-start"
				>
					<MdArrowBack />
					Go Back
				</Link>
				<img
					src="https://picsum.photos/600"
					className="w-full h-[400px] object-cover object-center mb-5 rounded-btn"
					alt=""
				/>
				<div className="prose mx-auto">
					<h1 className="text-3xl font-bold mb-10">{blogPostData.title}</h1>
					{blogPostData.body}
					{blogPostData.body}
					{blogPostData.body}
					{blogPostData.body}
					{blogPostData.body}
					{blogPostData.body}
				</div>
			</div>
		</>
	);
};

export default BulettinPageDynamic;
