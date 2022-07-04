import '../styles/global.scss';
import Layout from '../src/components/layout';
import PageTransitions from '../src/components/PageTransitions';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
	// const router = useRouter();
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
