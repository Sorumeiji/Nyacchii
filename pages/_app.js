import '../styles/global.scss';
import Layout from '../src/components/layout';
import { useEffect } from 'react';
import Head from 'next/head';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<>
			<Head>
				<title>NYACCHII - Full-Time Creative Streamer and Twitch Partner from Mexico.</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
