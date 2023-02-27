import "@/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
	const tanStackQueryClient = new QueryClient();

	return (
		<>
			<main className='flex justify-center'>
				<div className="w-full max-w-5xl px-5 lg:px-0">
					<Navbar />
					<QueryClientProvider client={tanStackQueryClient}>
						<Component {...pageProps} />
						<ReactQueryDevtools initialIsOpen={false} />
					</QueryClientProvider>
					<Footer />
				</div>
			</main>
		</>
	);
}
