import React from 'react';
import Navigation from '../src/components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { createClient } from 'contentful';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const eg = await client.getEntries({ content_type: 'emoteGallery' });
	const ig = await client.getEntries({ content_type: 'illustrationGallery' });

	return {
		props: {
			egallery: eg.items,
			igallery: ig.items,
		},
	};
}

const portfolio = ({ egallery, igallery }) => {
	let emotes = egallery[0].fields.assets;
	let digital = igallery[0].fields.assets;

	console.log(egallery);

	return (
		<>
			<section className='hero'>
				<Navigation />
				<div className='[ container ] [ flow ]'>
					<div>
						<h1>
							Portfolio, Works, & Displays<span className='accent'>.</span>
						</h1>
					</div>
					<p>
						Here is a gallery of most of my work, and my favorite drawings.I hope you enjoy taking a
						look.
					</p>
					<ul>
						<li>
							<a href='#view' role='button'>
								View Portfolio &nbsp;
								<span className='accent'>
									<FontAwesomeIcon icon={faMoneyCheck} />
								</span>
							</a>
						</li>
					</ul>
				</div>
			</section>

			<section className='portfolio'>
				<section className='[ decoration ] [ container ]'>
					<svg
						width='100%'
						height='359'
						viewBox='0 0 1773 359'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<mask
							id='path-1-outside-1_2640_40733'
							maskUnits='userSpaceOnUse'
							x='0'
							y='0'
							width='1773'
							height='359'
							fill='black'>
							<rect fill='white' width='1773' height='359' />
							<path d='M207.744 142.371C207.744 171.075 202.403 195.072 191.72 214.363C181.038 233.538 165.536 248.006 145.216 257.768C124.896 267.414 100.395 272.236 71.7146 272.236H1V17.3857H79.3782C105.737 17.3857 128.495 22.1504 147.654 31.6797C166.814 41.0928 181.618 55.0962 192.069 73.6899C202.519 92.1675 207.744 115.061 207.744 142.371ZM164.201 143.591C164.201 122.673 160.892 105.474 154.273 91.9932C147.771 78.5127 138.133 68.5186 125.36 62.0107C112.704 55.3867 97.0859 52.0747 78.5074 52.0747H42.8017V237.199H72.4113C103.182 237.199 126.173 229.355 141.384 213.666C156.595 197.978 164.201 174.619 164.201 143.591ZM299.36 79.2681V272.236H258.429V79.2681H299.36ZM279.156 5.35791C285.426 5.35791 290.825 7.04297 295.354 10.4131C299.998 13.7832 302.321 19.5938 302.321 27.8447C302.321 35.9795 299.998 41.79 295.354 45.2764C290.825 48.6465 285.426 50.3315 279.156 50.3315C272.653 50.3315 267.138 48.6465 262.609 45.2764C258.197 41.79 255.991 35.9795 255.991 27.8447C255.991 19.5938 258.197 13.7832 262.609 10.4131C267.138 7.04297 272.653 5.35791 279.156 5.35791ZM413.095 358C386.969 358 366.939 353.293 353.005 343.88C339.071 334.467 332.105 321.277 332.105 304.311C332.105 292.457 335.82 282.405 343.252 274.154C350.683 266.019 361.308 260.383 375.125 257.245C369.9 254.921 365.372 251.318 361.54 246.438C357.824 241.44 355.966 235.92 355.966 229.877C355.966 222.672 357.998 216.513 362.062 211.4C366.126 206.287 372.223 201.348 380.351 196.583C370.249 192.283 362.12 185.311 355.966 175.665C349.928 165.903 346.909 154.457 346.909 141.325C346.909 127.379 349.87 115.526 355.792 105.764C361.714 95.8862 370.365 88.3906 381.744 83.2773C393.123 78.0479 406.883 75.4331 423.023 75.4331C426.507 75.4331 430.281 75.6655 434.345 76.1304C438.525 76.479 442.357 76.9438 445.84 77.5249C449.44 77.9897 452.168 78.5127 454.026 79.0938H520.735V101.929L487.99 108.03C491.125 112.446 493.622 117.501 495.48 123.196C497.337 128.774 498.266 134.875 498.266 141.499C498.266 161.487 491.357 177.234 477.54 188.739C463.838 200.127 444.911 205.822 420.759 205.822C414.953 205.589 409.322 205.125 403.864 204.427C399.684 206.984 396.491 209.831 394.285 212.969C392.078 215.99 390.975 219.418 390.975 223.253C390.975 226.391 392.078 228.948 394.285 230.923C396.491 232.783 399.742 234.177 404.038 235.107C408.451 236.037 413.792 236.501 420.062 236.501H453.33C474.463 236.501 490.603 240.976 501.75 249.924C512.897 258.872 518.471 272.004 518.471 289.319C518.471 311.283 509.414 328.192 491.299 340.045C473.185 352.015 447.117 358 413.095 358ZM414.663 329.238C428.945 329.238 440.963 327.843 450.717 325.054C460.471 322.265 467.844 318.256 472.837 313.026C477.83 307.913 480.327 301.812 480.327 294.723C480.327 288.448 478.759 283.625 475.624 280.255C472.489 276.885 467.786 274.561 461.516 273.282C455.245 272.004 447.466 271.365 438.176 271.365H407.87C400.323 271.365 393.646 272.527 387.84 274.851C382.034 277.292 377.506 280.778 374.255 285.31C371.119 289.842 369.552 295.304 369.552 301.696C369.552 310.528 373.442 317.326 381.222 322.091C389.117 326.855 400.265 329.238 414.663 329.238ZM422.675 178.977C434.635 178.977 443.518 175.723 449.324 169.215C455.129 162.591 458.032 153.294 458.032 141.325C458.032 128.309 455.013 118.547 448.975 112.04C443.053 105.532 434.228 102.278 422.501 102.278C411.005 102.278 402.239 105.59 396.201 112.214C390.279 118.838 387.318 128.658 387.318 141.673C387.318 153.411 390.279 162.591 396.201 169.215C402.239 175.723 411.063 178.977 422.675 178.977ZM596.849 79.2681V272.236H555.918V79.2681H596.849ZM576.645 5.35791C582.915 5.35791 588.314 7.04297 592.843 10.4131C597.487 13.7832 599.81 19.5938 599.81 27.8447C599.81 35.9795 597.487 41.79 592.843 45.2764C588.314 48.6465 582.915 50.3315 576.645 50.3315C570.142 50.3315 564.627 48.6465 560.098 45.2764C555.686 41.79 553.48 35.9795 553.48 27.8447C553.48 19.5938 555.686 13.7832 560.098 10.4131C564.627 7.04297 570.142 5.35791 576.645 5.35791ZM727.305 242.603C732.646 242.603 737.93 242.138 743.155 241.208C748.38 240.162 753.141 238.942 757.437 237.547V268.576C752.909 270.551 747.045 272.236 739.846 273.631C732.646 275.025 725.157 275.723 717.377 275.723C706.462 275.723 696.65 273.921 687.942 270.319C679.233 266.6 672.324 260.267 667.215 251.318C662.106 242.37 659.551 229.994 659.551 214.189V110.471H633.251V92.1675L661.467 77.6992L674.879 36.3862H700.656V79.2681H755.87V110.471H700.656V213.666C700.656 223.428 703.095 230.691 707.972 235.456C712.849 240.22 719.293 242.603 727.305 242.603ZM872.218 75.6074C896.602 75.6074 915.006 81.0112 927.431 91.8188C939.971 102.626 946.242 119.477 946.242 142.371V272.236H917.155L909.317 244.869H907.923C902.466 251.841 896.834 257.594 891.029 262.126C885.223 266.658 878.488 270.028 870.824 272.236C863.277 274.561 854.046 275.723 843.131 275.723C831.635 275.723 821.359 273.631 812.302 269.447C803.245 265.147 796.104 258.64 790.879 249.924C785.653 241.208 783.041 230.168 783.041 216.804C783.041 196.932 790.414 181.999 805.161 172.004C820.024 162.01 842.434 156.49 872.392 155.444L905.833 154.224V144.114C905.833 130.75 902.698 121.22 896.428 115.526C890.274 109.832 881.565 106.984 870.302 106.984C860.664 106.984 851.317 108.379 842.26 111.168C833.203 113.957 824.378 117.385 815.785 121.453L802.548 92.5161C811.954 87.519 822.636 83.4517 834.596 80.314C846.672 77.1763 859.213 75.6074 872.218 75.6074ZM905.659 180.023L880.752 180.895C860.316 181.592 845.975 185.078 837.731 191.354C829.487 197.629 825.365 206.229 825.365 217.152C825.365 226.682 828.21 233.654 833.899 238.07C839.589 242.37 847.079 244.52 856.368 244.52C870.534 244.52 882.262 240.511 891.551 232.492C900.956 224.357 905.659 212.446 905.659 196.757V180.023ZM1044.65 272.236H1003.54V1H1044.65V272.236ZM1357.81 272.236L1332.91 201.464H1235.54L1210.64 272.236H1166.57L1261.32 16.3398H1307.65L1402.23 272.236H1357.81ZM1322.11 165.555L1297.9 95.8281C1296.97 92.8066 1295.63 88.5649 1293.89 83.103C1292.15 77.5249 1290.41 71.8887 1288.67 66.1943C1286.93 60.3838 1285.47 55.5029 1284.31 51.5518C1283.15 56.3164 1281.7 61.6621 1279.96 67.5889C1278.33 73.3994 1276.71 78.8613 1275.08 83.9746C1273.57 89.0879 1272.41 93.0391 1271.6 95.8281L1247.21 165.555H1322.11ZM1529.38 75.6074C1532.63 75.6074 1536.17 75.7817 1540 76.1304C1543.83 76.479 1547.14 76.9438 1549.93 77.5249L1546.1 115.875C1543.66 115.177 1540.64 114.654 1537.04 114.306C1533.56 113.957 1530.42 113.783 1527.63 113.783C1520.32 113.783 1513.35 115.003 1506.73 117.443C1500.11 119.768 1494.25 123.37 1489.14 128.251C1484.03 133.016 1480.03 139 1477.12 146.206C1474.22 153.411 1472.77 161.778 1472.77 171.307V272.236H1431.66V79.2681H1463.71L1469.29 113.26H1471.2C1475.03 106.403 1479.79 100.128 1485.48 94.4336C1491.17 88.7393 1497.68 84.207 1504.99 80.8369C1512.42 77.3506 1520.55 75.6074 1529.38 75.6074ZM1657.39 242.603C1662.73 242.603 1668.02 242.138 1673.24 241.208C1678.47 240.162 1683.23 238.942 1687.53 237.547V268.576C1683 270.551 1677.13 272.236 1669.93 273.631C1662.73 275.025 1655.25 275.723 1647.47 275.723C1636.55 275.723 1626.74 273.921 1618.03 270.319C1609.32 266.6 1602.41 260.267 1597.3 251.318C1592.19 242.37 1589.64 229.994 1589.64 214.189V110.471H1563.34V92.1675L1591.56 77.6992L1604.97 36.3862H1630.74V79.2681H1685.96V110.471H1630.74V213.666C1630.74 223.428 1633.18 230.691 1638.06 235.456C1642.94 240.22 1649.38 242.603 1657.39 242.603ZM1720.79 250.621C1720.79 241.092 1723.23 234.41 1728.11 230.575C1733.1 226.624 1739.14 224.648 1746.22 224.648C1753.31 224.648 1759.34 226.624 1764.34 230.575C1769.45 234.41 1772 241.092 1772 250.621C1772 259.918 1769.45 266.658 1764.34 270.842C1759.34 274.909 1753.31 276.943 1746.22 276.943C1739.14 276.943 1733.1 274.909 1728.11 270.842C1723.23 266.658 1720.79 259.918 1720.79 250.621Z' />
						</mask>
						<path
							d='M207.744 142.371C207.744 171.075 202.403 195.072 191.72 214.363C181.038 233.538 165.536 248.006 145.216 257.768C124.896 267.414 100.395 272.236 71.7146 272.236H1V17.3857H79.3782C105.737 17.3857 128.495 22.1504 147.654 31.6797C166.814 41.0928 181.618 55.0962 192.069 73.6899C202.519 92.1675 207.744 115.061 207.744 142.371ZM164.201 143.591C164.201 122.673 160.892 105.474 154.273 91.9932C147.771 78.5127 138.133 68.5186 125.36 62.0107C112.704 55.3867 97.0859 52.0747 78.5074 52.0747H42.8017V237.199H72.4113C103.182 237.199 126.173 229.355 141.384 213.666C156.595 197.978 164.201 174.619 164.201 143.591ZM299.36 79.2681V272.236H258.429V79.2681H299.36ZM279.156 5.35791C285.426 5.35791 290.825 7.04297 295.354 10.4131C299.998 13.7832 302.321 19.5938 302.321 27.8447C302.321 35.9795 299.998 41.79 295.354 45.2764C290.825 48.6465 285.426 50.3315 279.156 50.3315C272.653 50.3315 267.138 48.6465 262.609 45.2764C258.197 41.79 255.991 35.9795 255.991 27.8447C255.991 19.5938 258.197 13.7832 262.609 10.4131C267.138 7.04297 272.653 5.35791 279.156 5.35791ZM413.095 358C386.969 358 366.939 353.293 353.005 343.88C339.071 334.467 332.105 321.277 332.105 304.311C332.105 292.457 335.82 282.405 343.252 274.154C350.683 266.019 361.308 260.383 375.125 257.245C369.9 254.921 365.372 251.318 361.54 246.438C357.824 241.44 355.966 235.92 355.966 229.877C355.966 222.672 357.998 216.513 362.062 211.4C366.126 206.287 372.223 201.348 380.351 196.583C370.249 192.283 362.12 185.311 355.966 175.665C349.928 165.903 346.909 154.457 346.909 141.325C346.909 127.379 349.87 115.526 355.792 105.764C361.714 95.8862 370.365 88.3906 381.744 83.2773C393.123 78.0479 406.883 75.4331 423.023 75.4331C426.507 75.4331 430.281 75.6655 434.345 76.1304C438.525 76.479 442.357 76.9438 445.84 77.5249C449.44 77.9897 452.168 78.5127 454.026 79.0938H520.735V101.929L487.99 108.03C491.125 112.446 493.622 117.501 495.48 123.196C497.337 128.774 498.266 134.875 498.266 141.499C498.266 161.487 491.357 177.234 477.54 188.739C463.838 200.127 444.911 205.822 420.759 205.822C414.953 205.589 409.322 205.125 403.864 204.427C399.684 206.984 396.491 209.831 394.285 212.969C392.078 215.99 390.975 219.418 390.975 223.253C390.975 226.391 392.078 228.948 394.285 230.923C396.491 232.783 399.742 234.177 404.038 235.107C408.451 236.037 413.792 236.501 420.062 236.501H453.33C474.463 236.501 490.603 240.976 501.75 249.924C512.897 258.872 518.471 272.004 518.471 289.319C518.471 311.283 509.414 328.192 491.299 340.045C473.185 352.015 447.117 358 413.095 358ZM414.663 329.238C428.945 329.238 440.963 327.843 450.717 325.054C460.471 322.265 467.844 318.256 472.837 313.026C477.83 307.913 480.327 301.812 480.327 294.723C480.327 288.448 478.759 283.625 475.624 280.255C472.489 276.885 467.786 274.561 461.516 273.282C455.245 272.004 447.466 271.365 438.176 271.365H407.87C400.323 271.365 393.646 272.527 387.84 274.851C382.034 277.292 377.506 280.778 374.255 285.31C371.119 289.842 369.552 295.304 369.552 301.696C369.552 310.528 373.442 317.326 381.222 322.091C389.117 326.855 400.265 329.238 414.663 329.238ZM422.675 178.977C434.635 178.977 443.518 175.723 449.324 169.215C455.129 162.591 458.032 153.294 458.032 141.325C458.032 128.309 455.013 118.547 448.975 112.04C443.053 105.532 434.228 102.278 422.501 102.278C411.005 102.278 402.239 105.59 396.201 112.214C390.279 118.838 387.318 128.658 387.318 141.673C387.318 153.411 390.279 162.591 396.201 169.215C402.239 175.723 411.063 178.977 422.675 178.977ZM596.849 79.2681V272.236H555.918V79.2681H596.849ZM576.645 5.35791C582.915 5.35791 588.314 7.04297 592.843 10.4131C597.487 13.7832 599.81 19.5938 599.81 27.8447C599.81 35.9795 597.487 41.79 592.843 45.2764C588.314 48.6465 582.915 50.3315 576.645 50.3315C570.142 50.3315 564.627 48.6465 560.098 45.2764C555.686 41.79 553.48 35.9795 553.48 27.8447C553.48 19.5938 555.686 13.7832 560.098 10.4131C564.627 7.04297 570.142 5.35791 576.645 5.35791ZM727.305 242.603C732.646 242.603 737.93 242.138 743.155 241.208C748.38 240.162 753.141 238.942 757.437 237.547V268.576C752.909 270.551 747.045 272.236 739.846 273.631C732.646 275.025 725.157 275.723 717.377 275.723C706.462 275.723 696.65 273.921 687.942 270.319C679.233 266.6 672.324 260.267 667.215 251.318C662.106 242.37 659.551 229.994 659.551 214.189V110.471H633.251V92.1675L661.467 77.6992L674.879 36.3862H700.656V79.2681H755.87V110.471H700.656V213.666C700.656 223.428 703.095 230.691 707.972 235.456C712.849 240.22 719.293 242.603 727.305 242.603ZM872.218 75.6074C896.602 75.6074 915.006 81.0112 927.431 91.8188C939.971 102.626 946.242 119.477 946.242 142.371V272.236H917.155L909.317 244.869H907.923C902.466 251.841 896.834 257.594 891.029 262.126C885.223 266.658 878.488 270.028 870.824 272.236C863.277 274.561 854.046 275.723 843.131 275.723C831.635 275.723 821.359 273.631 812.302 269.447C803.245 265.147 796.104 258.64 790.879 249.924C785.653 241.208 783.041 230.168 783.041 216.804C783.041 196.932 790.414 181.999 805.161 172.004C820.024 162.01 842.434 156.49 872.392 155.444L905.833 154.224V144.114C905.833 130.75 902.698 121.22 896.428 115.526C890.274 109.832 881.565 106.984 870.302 106.984C860.664 106.984 851.317 108.379 842.26 111.168C833.203 113.957 824.378 117.385 815.785 121.453L802.548 92.5161C811.954 87.519 822.636 83.4517 834.596 80.314C846.672 77.1763 859.213 75.6074 872.218 75.6074ZM905.659 180.023L880.752 180.895C860.316 181.592 845.975 185.078 837.731 191.354C829.487 197.629 825.365 206.229 825.365 217.152C825.365 226.682 828.21 233.654 833.899 238.07C839.589 242.37 847.079 244.52 856.368 244.52C870.534 244.52 882.262 240.511 891.551 232.492C900.956 224.357 905.659 212.446 905.659 196.757V180.023ZM1044.65 272.236H1003.54V1H1044.65V272.236ZM1357.81 272.236L1332.91 201.464H1235.54L1210.64 272.236H1166.57L1261.32 16.3398H1307.65L1402.23 272.236H1357.81ZM1322.11 165.555L1297.9 95.8281C1296.97 92.8066 1295.63 88.5649 1293.89 83.103C1292.15 77.5249 1290.41 71.8887 1288.67 66.1943C1286.93 60.3838 1285.47 55.5029 1284.31 51.5518C1283.15 56.3164 1281.7 61.6621 1279.96 67.5889C1278.33 73.3994 1276.71 78.8613 1275.08 83.9746C1273.57 89.0879 1272.41 93.0391 1271.6 95.8281L1247.21 165.555H1322.11ZM1529.38 75.6074C1532.63 75.6074 1536.17 75.7817 1540 76.1304C1543.83 76.479 1547.14 76.9438 1549.93 77.5249L1546.1 115.875C1543.66 115.177 1540.64 114.654 1537.04 114.306C1533.56 113.957 1530.42 113.783 1527.63 113.783C1520.32 113.783 1513.35 115.003 1506.73 117.443C1500.11 119.768 1494.25 123.37 1489.14 128.251C1484.03 133.016 1480.03 139 1477.12 146.206C1474.22 153.411 1472.77 161.778 1472.77 171.307V272.236H1431.66V79.2681H1463.71L1469.29 113.26H1471.2C1475.03 106.403 1479.79 100.128 1485.48 94.4336C1491.17 88.7393 1497.68 84.207 1504.99 80.8369C1512.42 77.3506 1520.55 75.6074 1529.38 75.6074ZM1657.39 242.603C1662.73 242.603 1668.02 242.138 1673.24 241.208C1678.47 240.162 1683.23 238.942 1687.53 237.547V268.576C1683 270.551 1677.13 272.236 1669.93 273.631C1662.73 275.025 1655.25 275.723 1647.47 275.723C1636.55 275.723 1626.74 273.921 1618.03 270.319C1609.32 266.6 1602.41 260.267 1597.3 251.318C1592.19 242.37 1589.64 229.994 1589.64 214.189V110.471H1563.34V92.1675L1591.56 77.6992L1604.97 36.3862H1630.74V79.2681H1685.96V110.471H1630.74V213.666C1630.74 223.428 1633.18 230.691 1638.06 235.456C1642.94 240.22 1649.38 242.603 1657.39 242.603ZM1720.79 250.621C1720.79 241.092 1723.23 234.41 1728.11 230.575C1733.1 226.624 1739.14 224.648 1746.22 224.648C1753.31 224.648 1759.34 226.624 1764.34 230.575C1769.45 234.41 1772 241.092 1772 250.621C1772 259.918 1769.45 266.658 1764.34 270.842C1759.34 274.909 1753.31 276.943 1746.22 276.943C1739.14 276.943 1733.1 274.909 1728.11 270.842C1723.23 266.658 1720.79 259.918 1720.79 250.621Z'
							stroke='url(#paint0_linear_2640_40733)'
							strokeOpacity='0.5'
							strokeWidth='2'
							mask='url(#path-1-outside-1_2640_40733)'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_2640_40733'
								x1='286.879'
								y1='337.839'
								x2='1097.9'
								y2='337.839'
								gradientUnits='userSpaceOnUse'>
								<stop offset='0.264148' stopColor='#FC8A6B' />
								<stop offset='0.528149' stopColor='#CF818D' />
								<stop offset='0.861395' stopColor='#9577B9' />
								<stop offset='1' stopColor='#3E66FB' />
							</linearGradient>
						</defs>
					</svg>
				</section>
				<article id='view' className='[ portfolio__emoteGallery ] [ flow ]'>
					<div className='[ flow ] [ portfolio__emotesContent ]'>
						<div className='container'>
							<h2>
								Emotes<span className='accent'>.</span>
							</h2>
						</div>
						<div className='wrapper'>
							<div className='portfolio__gallery'>
								{emotes.map((emotes, index) => (
									<img key={index} src={emotes.fields.file.url} />
								))}
							</div>
						</div>
					</div>
				</article>
				<article className='[ portfolio__digitalGallery ] [ flow ]'>
					<div className='[ flow ] [ portfolio__digitalContent ]'>
						<div className='container'>
							<h2>
								Digital Art<span className='accent'>.</span>
							</h2>
						</div>
						<div className='wrapper'>
							<div className='portfolio__gallery'>
								{digital.map((digital, index) => (
									<img key={index} src={digital.fields.file.url} />
								))}
							</div>
						</div>
					</div>
				</article>
			</section>
		</>
	);
};

export default portfolio;
