import '../styles/global.scss';
import Layout from '../src/components/layout';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<Head>
				<title>NYACCHII - Full-Time Creative Streamer and Twitch Partner from Mexico.</title>
				<meta
					name='description'
					content='a Full-Time Creative Streamer and Twitch Partner from Mexico. Expertise in digital and traditional art.'
				/>
				<meta name='author' content='Nyacchii' />
			</Head>

			<AnimatePresence>
				<motion.div
					key={router.route}
					inital='pageInitial'
					animate='pageAnimate'
					exit='pageExit'
					variants={{
						pageInitial: {
							opacity: 0,
						},
						pageAnimate: {
							opacity: 1,
							transition: {
								ease: 'easeIn',
								duration: 0.5,
							},
						},
						pageExit: {
							opacity: 0,
							transition: {
								ease: 'easeOut',
								duration: 0.5,
							},
						},
					}}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</motion.div>
			</AnimatePresence>
		</>
	);
}

export default MyApp;
