import '../styles/global.scss';
import Layout from '../src/components/layout';
import Head from 'next/head';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Full-Time Creative Streamer and Twitch Partner from Mexico.</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
