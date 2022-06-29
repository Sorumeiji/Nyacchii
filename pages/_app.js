import '../styles/global.scss';
import Layout from '../src/components/layout';
import { useEffect } from 'react';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<Head>
				<title>NYACCHII - Full-Time Creative Streamer and Twitch Partner from Mexico.</title>
			</Head>

			<Layout>
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
		</>
	);
}

export default MyApp;
