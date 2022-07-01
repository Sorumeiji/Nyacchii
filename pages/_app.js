import '../styles/global.scss';
import Layout from '../src/components/layout';
import Head from 'next/head';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<Head>
				<title>NYACCHII - Full-Time Creative Streamer and Twitch Partner from Mexico.</title>
			</Head>

			<Layout>
				<Component {...pageProps} key={router.pathname} />
			</Layout>
		</>
	);
}

export default MyApp;
