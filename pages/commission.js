import React from 'react';
import { useEffect, useRef } from 'react';
import Layout from '../src/components/layout';
import Navigation from '../src/components/Navigation';
import { gsap } from 'gsap/dist/gsap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Terms = () => {
	const boxRef = useRef();
	const boxRef2 = useRef();

	useEffect(() => {
		gsap.fromTo(boxRef.current, { opacity: 0 }, { opacity: 1, duration: 2, delay: 1.2 });
	}, []);

	return (
		<>
			<section className='hero'>
				<Navigation />
				<div className='container'>
					<div>
						<div>
							<h1>
								Commission & Pricing<span className=''>.</span>
							</h1>
							<p>
								Below are my prices for Digital Art, Twitch Emotes, and Traditonal Art. For any
								prices not listed, reach out for quote.
							</p>
							<div>
								<a role='button'>
									View Pricing &nbsp;
									<span className={`accent`}>
										<FontAwesomeIcon icon={faHeart} />
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='commission'>
				<div className='decoration'>
					<svg width='1163' height='235' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='m126.05 140.066.873.487.001-.002-.874-.485Zm-30.507 28.451.428.903.005-.002-.433-.901ZM.937 178h-1v1h1v-1Zm0-167.045v-1h-1v1h1Zm96.206 9.37-.445.895.004.002.44-.898Zm29.135 27.535-.871.49.001.003.87-.493Zm-24.794 11.997-.9.435.003.006.897-.44ZM82.518 40.205l-.464.886.01.005.454-.89Zm-54.159-6.513v-1h-1v1h1Zm0 121.342h-1v1h1v-1Zm107.203-62.156c0 18.694-3.482 34.246-10.387 46.704l1.749.969c7.112-12.831 10.638-28.739 10.638-47.673h-2Zm-10.386 46.701c-6.904 12.383-16.916 21.724-30.066 28.036l.866 1.803c13.51-6.485 23.836-16.111 30.947-28.865l-1.747-.974Zm-30.062 28.034C81.95 173.857 66.032 177 47.326 177v2c18.923 0 35.15-3.179 48.646-9.58l-.858-1.807ZM47.326 177H.937v2h46.39v-2Zm-45.389 1V10.955h-2V178h2Zm-1-166.045h51.416v-2H.938v2Zm51.416 0c17.172 0 31.943 3.101 44.345 9.265l.89-1.791c-12.735-6.33-27.824-9.474-45.234-9.474v2Zm44.349 9.267c12.387 6.08 21.949 15.118 28.705 27.129l1.743-.98c-6.955-12.365-16.817-21.686-29.567-27.944l-.881 1.795Zm28.706 27.13c6.75 11.925 10.154 26.75 10.154 44.526h2c0-18.025-3.452-33.212-10.413-45.51l-1.741.985Zm-16.411 45.326c0-13.808-2.185-25.245-6.615-34.262l-1.795.882c4.253 8.656 6.41 19.765 6.41 33.38h2Zm-6.612-34.255c-4.356-9.024-10.831-15.74-19.414-20.11l-.907 1.783c8.175 4.162 14.345 10.548 18.52 19.196l1.801-.87ZM82.981 39.319c-8.482-4.436-18.897-6.627-31.199-6.627v2c12.073 0 22.149 2.151 30.272 6.4l.927-1.773Zm-31.199-6.627H28.36v2h23.423v-2Zm-24.423 1v121.342h2V33.692h-2Zm1 122.342h19.424v-2H28.36v2Zm19.424 0c20.344 0 35.731-5.183 45.964-15.728l-1.435-1.393c-9.724 10.021-24.501 15.121-44.529 15.121v2Zm45.964-15.728c10.224-10.536 15.25-26.14 15.25-46.628h-2c0 20.187-4.952 35.204-14.685 45.235l1.435 1.393Zm102.914-88.79h1v-1h-1v1Zm0 126.484v1h1v-1h-1Zm-26.85 0h-1v1h1v-1Zm0-126.483v-1h-1v1h1Zm24.222-45.132-.597.802.01.007.587-.81Zm0 22.851.597.803.003-.003-.6-.8Zm-21.48 0-.62.785.011.01.012.008.597-.803Zm0-22.851-.597-.803-.01.008.607.795Zm23.108 45.132V178h2V51.517h-2Zm1 125.483h-26.85v2h26.85v-2Zm-25.85 1V51.517h-2V178h2Zm-1-125.483h26.85v-2h-26.85v2ZM183.407 4.07c3.924 0 7.25 1.05 10.03 3.116l1.193-1.605c-3.162-2.351-6.92-3.51-11.223-3.51v2Zm10.039 3.123c2.687 1.948 4.158 5.38 4.158 10.617h2c0-5.58-1.577-9.766-4.984-12.236l-1.174 1.62Zm4.158 10.617c0 5.15-1.467 8.597-4.171 10.625l1.2 1.6c3.39-2.542 4.971-6.713 4.971-12.226h-2Zm-4.167 10.623c-2.78 2.066-6.106 3.116-10.03 3.116v2c4.303 0 8.061-1.16 11.223-3.511l-1.193-1.605Zm-10.03 3.116c-4.084 0-7.485-1.054-10.258-3.116l-1.193 1.605c3.169 2.356 7.005 3.51 11.451 3.51v-2Zm-10.235-3.099c-2.561-2.022-3.961-5.472-3.961-10.64h-2c0 5.495 1.494 9.662 4.722 12.21l1.239-1.57Zm-3.961-10.64c0-5.254 1.404-8.69 3.948-10.631l-1.213-1.59c-3.245 2.476-4.735 6.658-4.735 12.22h2Zm3.938-10.624c2.773-2.062 6.174-3.116 10.258-3.116v-2c-4.446 0-8.282 1.155-11.451 3.511l1.193 1.605Zm52.305 172.07-.738-.675-.005.005.743.67Zm20.909-11.083.222.975 2.936-.666-2.752-1.223-.406.914Zm-8.912-7.084-.802.597.008.01.008.011.786-.618Zm12.34-32.678.505.863 1.716-1.005-1.83-.778-.391.92Zm-15.996-13.711-.85.527.007.011.843-.538Zm-.114-45.817.854.519.003-.005-.857-.514Zm17.024-14.74.41.913.007-.004-.417-.908Zm34.506-4.684-.114.993.016.002.015.002.083-.997Zm7.541.914-.164.986.018.003.018.003.128-.992Zm5.37 1.028-.298.955.145.045h.153v-1Zm43.761 0h1v-1h-1v1Zm0 14.968.183.983.817-.152v-.83h-1Zm-21.481 4-.183-.984-1.538.287.906 1.275.815-.579Zm4.913 9.94-.95.31.002.006.948-.316Zm-11.768 42.961.639.769v-.001l-.639-.768Zm-37.248 11.197-.04.999.02.001h.02v-1Zm-11.083-.914.126-.992-.348-.045-.3.183.522.854Zm-6.284 5.598.807.59.005-.007.005-.007-.817-.576Zm0 11.769-.667.745.011.01.012.01.644-.765Zm6.398 2.742-.211.978.005.001.206-.979Zm57.243 68.783-.547-.837-.004.003.551.834Zm-12.111-17.71-.715-.699-.008.008.723.691Zm-55.758-25.022-.371-.929-.008.004-.008.003.387.922Zm-8.912 6.855-.812-.583-.005.007-.005.007.822.569Zm4.57 24.109-.522.853.006.003.516-.856Zm44.675-100.204.746.666.006-.007-.752-.659Zm-.228-37.477-.74.673.007.007.733-.68Zm-34.621.114-.738-.674-.007.008.745.666Zm0 37.363-.745.666.006.007.007.007.732-.68Zm11.083 122.741c-17.041 0-29.952-3.072-38.859-9.084l-1.119 1.658c9.374 6.327 22.743 9.426 39.978 9.426v-2Zm-38.859-9.084c-8.862-5.982-13.27-14.315-13.27-25.108h-2c0 11.45 4.732 20.408 14.151 26.766l1.119-1.658Zm-13.27-25.108c0-7.54 2.357-13.885 7.055-19.097l-1.486-1.339c-5.052 5.605-7.569 12.438-7.569 20.436h2Zm7.05-19.091c4.703-5.144 11.47-8.759 20.393-10.783l-.443-1.95c-9.207 2.088-16.379 5.863-21.426 11.383l1.476 1.35Zm20.577-12.672c-3.266-1.452-6.11-3.706-8.532-6.788l-1.572 1.236c2.606 3.316 5.703 5.784 9.292 7.38l.812-1.828Zm-8.516-6.767c-2.313-3.109-3.458-6.519-3.458-10.258h-2c0 4.183 1.292 8.01 3.854 11.452l1.604-1.194Zm-3.458-10.258c0-4.521 1.271-8.332 3.782-11.488l-1.566-1.246c-2.821 3.547-4.216 7.81-4.216 12.734h2Zm3.782-11.488c2.563-3.223 6.451-6.386 11.719-9.472l-1.01-1.726c-5.396 3.16-9.506 6.472-12.275 9.952l1.566 1.246Zm11.605-11.255c-6.433-2.736-11.611-7.169-15.544-13.329l-1.686 1.076c4.141 6.485 9.627 11.193 16.448 14.093l.782-1.84Zm-15.537-13.317c-3.849-6.219-5.791-13.534-5.791-21.983h-2c0 8.766 2.018 16.457 6.091 23.036l1.7-1.053Zm-5.791-21.983c0-8.998 1.911-16.579 5.681-22.79l-1.709-1.037c-3.999 6.586-5.972 14.544-5.972 23.827h2Zm5.684-22.794c3.771-6.284 9.282-11.066 16.577-14.341l-.82-1.825c-7.634 3.428-13.473 8.473-17.472 15.137l1.715 1.03Zm16.584-14.345c7.302-3.353 16.178-5.05 26.662-5.05v-2c-10.692 0-19.868 1.73-27.496 5.233l.834 1.817Zm26.662-5.05c2.242 0 4.679.15 7.313.45l.227-1.987c-2.697-.308-5.211-.463-7.54-.463v2Zm7.344.453c2.72.227 5.206.529 7.46.904l.328-1.972c-2.316-.386-4.857-.694-7.622-.925l-.166 1.993Zm7.496.91c2.344.302 4.065.636 5.2.99l.596-1.908c-1.303-.407-3.161-.759-5.54-1.066l-.256 1.984Zm5.498 1.036h43.761v-2h-43.761v2Zm42.761-1V66.37h2V51.402h-2Zm.817 13.985-21.481 3.999.366 1.966 21.481-3.999-.366-1.966Zm-22.113 5.561c1.993 2.804 3.587 6.025 4.778 9.672l1.901-.62c-1.247-3.82-2.928-7.225-5.048-10.21l-1.631 1.158Zm4.78 9.678c1.181 3.542 1.777 7.433 1.777 11.68h2c0-4.435-.623-8.542-1.88-12.313l-1.897.633Zm1.777 11.68c0 12.842-4.428 22.867-13.237 30.196l1.279 1.537c9.32-7.753 13.958-18.371 13.958-31.732h-2Zm-13.236 30.195c-8.754 7.27-20.916 10.967-36.609 10.967v2c15.994 0 28.664-3.769 37.887-11.428l-1.278-1.539Zm-36.569 10.968a127.275 127.275 0 0 1-10.997-.907l-.253 1.984a128.7 128.7 0 0 0 11.17.921l.08-1.998Zm-11.645-.769c-2.827 1.728-5.036 3.682-6.58 5.877l1.635 1.151c1.35-1.918 3.332-3.698 5.988-5.321l-1.043-1.707Zm-6.57 5.862c-1.575 2.157-2.363 4.611-2.363 7.332h2c0-2.308.659-4.347 1.978-6.152l-1.615-1.18Zm-2.363 7.332c0 2.322.831 4.275 2.504 5.772l1.333-1.49c-1.221-1.093-1.837-2.491-1.837-4.282h-2Zm2.527 5.792c1.62 1.364 3.929 2.327 6.831 2.955l.422-1.955c-2.735-.592-4.691-1.457-5.965-2.53l-1.288 1.53Zm6.836 2.956c2.983.628 6.56.935 10.718.935v-2c-4.069 0-7.5-.302-10.306-.892l-.412 1.957Zm10.718.935h21.823v-2h-21.823v2Zm21.823 0c13.741 0 24.07 2.909 31.138 8.578l1.251-1.56c-7.557-6.062-18.403-9.018-32.389-9.018v2Zm31.138 8.578c7.026 5.635 10.594 13.925 10.594 25.042h2c0-11.582-3.743-20.507-11.343-26.602l-1.251 1.56Zm10.594 25.042c0 14.065-5.775 24.831-17.371 32.412l1.094 1.674c12.171-7.957 18.277-19.357 18.277-34.086h-2Zm-17.375 32.415c-11.651 7.692-28.526 11.603-50.751 11.603v2c22.412 0 39.738-3.935 51.853-11.934l-1.102-1.669Zm-49.722-5.25c9.427 0 17.41-.919 23.926-2.78l-.55-1.923c-6.281 1.794-14.065 2.703-23.376 2.703v2Zm23.926-2.78c6.504-1.859 11.521-4.557 14.959-8.155l-1.446-1.382c-3.113 3.258-7.769 5.816-14.063 7.614l.55 1.923Zm14.951-8.147c3.456-3.536 5.198-7.786 5.198-12.696h-2c0 4.383-1.534 8.132-4.628 11.298l1.43 1.398Zm5.198-12.696c0-4.273-1.07-7.712-3.353-10.165l-1.464 1.363c1.83 1.966 2.817 4.849 2.817 8.802h2Zm-3.353-10.165c-2.245-2.41-5.547-4.005-9.787-4.868l-.399 1.959c3.986.813 6.853 2.265 8.722 4.272l1.464-1.363Zm-9.787-4.868c-4.201-.856-9.377-1.277-15.51-1.277v2c6.053 0 11.085.416 15.111 1.236l.399-1.959Zm-15.51-1.277h-19.881v2h19.881v-2Zm-19.881 0c-5.053 0-9.563.777-13.511 2.356l.742 1.857c3.669-1.467 7.919-2.213 12.769-2.213v-2Zm-13.527 2.363c-3.956 1.662-7.083 4.055-9.337 7.194l1.624 1.167c2.012-2.802 4.826-4.98 8.487-6.517l-.774-1.844ZM244.97 186c-2.19 3.164-3.263 6.95-3.263 11.31h2c0-4.02.984-7.394 2.907-10.171L244.97 186Zm-3.263 11.31c0 6.151 2.745 10.923 8.133 14.221l1.044-1.706c-4.818-2.949-7.177-7.089-7.177-12.515h-2Zm8.139 14.224c5.4 3.256 12.92 4.828 22.454 4.828v-2c-9.357 0-16.462-1.55-21.421-4.541l-1.033 1.713Zm27.71-93.662c8.02 0 14.166-2.184 18.227-6.732l-1.492-1.332c-3.556 3.982-9.064 6.064-16.735 6.064v2Zm18.233-6.739c4.018-4.581 5.961-10.94 5.961-18.94h-2c0 7.69-1.866 13.518-5.465 17.621l1.504 1.319Zm5.961-18.94c0-8.668-2.011-15.355-6.209-19.876l-1.465 1.36c3.724 4.01 5.674 10.12 5.674 18.515h2Zm-6.202-19.87c-4.132-4.536-10.23-6.724-18.107-6.724v2c7.511 0 12.99 2.077 16.628 6.071l1.479-1.346ZM277.441 65.6c-7.737 0-13.791 2.234-17.991 6.838l1.477 1.348c3.721-4.079 9.17-6.186 16.514-6.186v-2Zm-17.998 6.846c-4.11 4.594-6.082 11.31-6.082 19.976h2c0-8.397 1.914-14.554 5.573-18.643l-1.491-1.334Zm-6.082 19.976c0 7.859 1.987 14.142 6.082 18.719l1.491-1.333c-3.674-4.106-5.573-9.858-5.573-17.386h-2Zm6.095 18.733c4.204 4.527 10.295 6.718 18.1 6.718v-2c-7.43 0-12.917-2.075-16.635-6.079l-1.465 1.361Zm132.357-59.637h1v-1h-1v1Zm0 126.483v1h1v-1h-1Zm-26.85 0h-1v1h1v-1Zm0-126.483v-1h-1v1h1Zm24.223-45.132-.597.802.01.007.587-.81Zm0 22.851.596.803.004-.003-.6-.8Zm-21.481 0-.62.785.012.01.011.008.597-.803Zm0-22.851-.597-.803-.01.008.607.795Zm23.108 45.132V178h2V51.517h-2Zm1 125.483h-26.85v2h26.85v-2Zm-25.85 1V51.517h-2V178h2Zm-1-125.483h26.85v-2h-26.85v2ZM378.56 4.07c3.923 0 7.25 1.05 10.029 3.116l1.193-1.605c-3.162-2.351-6.919-3.51-11.222-3.51v2Zm10.039 3.123c2.686 1.948 4.157 5.38 4.157 10.617h2c0-5.58-1.577-9.766-4.983-12.236l-1.174 1.62Zm4.157 10.617c0 5.15-1.466 8.597-4.17 10.625l1.2 1.6c3.389-2.542 4.97-6.713 4.97-12.226h-2Zm-4.167 10.623c-2.779 2.066-6.106 3.116-10.029 3.116v2c4.303 0 8.06-1.16 11.222-3.511l-1.193-1.605ZM378.56 31.55c-4.085 0-7.485-1.054-10.258-3.116l-1.194 1.605c3.169 2.356 7.005 3.51 11.452 3.51v-2Zm-10.235-3.099c-2.562-2.022-3.962-5.472-3.962-10.64h-2c0 5.495 1.495 9.662 4.722 12.21l1.24-1.57Zm-3.962-10.64c0-5.254 1.405-8.69 3.949-10.631l-1.214-1.59c-3.245 2.476-4.735 6.658-4.735 12.22h2Zm3.939-10.624c2.773-2.062 6.173-3.116 10.258-3.116v-2c-4.447 0-8.283 1.155-11.452 3.511l1.194 1.605ZM487.79 157.662l.175.985.011-.002.01-.002-.196-.981Zm9.369-2.399h1v-1.376l-1.308.424.308.952Zm0 20.338.4.916.6-.261v-.655h-1Zm-45.589 1.142-.392.92.01.004.382-.924ZM432.946 71.969h1v-1h-1v1Zm-17.253 0h-1v1h1v-1Zm0-11.997-.456-.89-.544.278v.612h1Zm18.51-9.484.456.89.368-.188.127-.393-.951-.309Zm8.798-27.079v-1h-.727l-.224.691.951.31Zm16.91 0h1v-1h-1v1Zm0 28.108h-1v1h1v-1Zm36.22 0h1v-1h-1v1Zm0 20.452v1h1v-1h-1Zm-36.22 0v-1h-1v1h1Zm17.482 87.607c3.562 0 7.086-.31 10.572-.929l-.35-1.969c-3.37.599-6.777.898-10.222.898v2Zm10.593-.933c3.459-.692 6.621-1.501 9.482-2.429l-.617-1.903c-2.776.901-5.861 1.691-9.257 2.371l.392 1.961Zm8.173-3.38v20.338h2v-20.338h-2Zm.601 19.421c-2.88 1.255-6.649 2.342-11.331 3.248l.38 1.964c4.764-.922 8.688-2.044 11.75-3.379l-.799-1.833Zm-11.331 3.248c-4.656.902-9.506 1.353-14.549 1.353v2c5.163 0 10.14-.462 14.929-1.389l-.38-1.964Zm-14.549 1.353c-7.05 0-13.354-1.162-18.928-3.466l-.764 1.848c5.852 2.419 12.421 3.618 19.692 3.618v-2Zm-18.917-3.462c-5.495-2.344-9.868-6.337-13.121-12.03l-1.737.992c3.45 6.037 8.142 10.347 14.073 12.878l.785-1.84Zm-13.121-12.03c-3.231-5.654-4.896-13.57-4.896-23.841h-2c0 10.448 1.687 18.757 5.159 24.833l1.737-.992Zm-4.896-23.841V71.969h-2v67.983h2Zm-1-68.983h-17.253v2h17.253v-2Zm-16.253 1V59.972h-2v11.997h2Zm-.544-11.107 18.51-9.484-.912-1.78-18.51 9.484.912 1.78Zm19.005-10.065 8.798-27.079-1.902-.618-8.798 27.08 1.902.617Zm7.847-26.388h16.91v-2h-16.91v2Zm15.91-1v28.108h2V23.409h-2Zm1 29.108h36.22v-2h-36.22v2Zm35.22-1v20.452h2V51.517h-2Zm1 19.452h-36.22v2h36.22v-2Zm-37.22 1v67.64h2v-67.64h-2Zm0 67.64c0 6.551 1.638 11.618 5.1 14.998l1.397-1.431c-2.936-2.866-4.497-7.32-4.497-13.567h-2Zm5.1 14.998c3.419 3.337 7.914 4.969 13.382 4.969v-2c-5.044 0-9.005-1.491-11.985-4.4l-1.397 1.431Zm144.664-94.864-.656.755.003.003.653-.758ZM621.015 178v1h1v-1h-1Zm-19.081 0-.962.276.208.724h.754v-1Zm-5.142-17.938.961-.276-.207-.724h-.754v1Zm-.914 0v-1h-.487l-.3.383.787.617ZM571.541 178l-.277-.961-.008.003-.009.002.294.956Zm-38.391-1.828-.428.903.009.005.419-.908Zm-4.684-63.87-.558-.83-.003.002.561.828Zm44.103-10.855.035 1h.002l-.037-1Zm21.938-.8.036 1 .964-.035v-.965h-1Zm-6.17-25.365-.679.734.007.007.672-.74Zm-52.901 3.885-.91.416.422.92.915-.432-.427-.904ZM526.752 60.2l-.469-.883-.833.442.393.858.909-.417Zm21.023-7.998-.251-.968h-.002l.253.968Zm46.618 65.356h1v-1.036l-1.035.036.035 1Zm-16.339.571.034.999h.001l-.035-.999Zm-30.736 37.476-.613.791.011.008.602-.799Zm37.82-3.656.653.757h.001l-.654-.757ZM572.455 50.117c15.868 0 27.666 3.516 35.564 10.38l1.312-1.509c-8.403-7.303-20.752-10.87-36.876-10.87v2Zm35.567 10.384c7.931 6.83 11.993 17.546 11.993 32.377h2c0-15.18-4.165-26.554-12.688-33.893l-1.305 1.516Zm11.993 32.377V178h2V92.878h-2Zm1 84.122h-19.081v2h19.081v-2Zm-18.12.724-5.142-17.938-1.922.551 5.141 17.939 1.923-.552Zm-6.103-18.662h-.914v2h.914v-2Zm-1.701.383c-3.54 4.519-7.178 8.228-10.911 11.14l1.23 1.577c3.884-3.03 7.635-6.862 11.255-11.484l-1.574-1.233Zm-10.911 11.14c-3.7 2.885-8.001 5.039-12.916 6.454l.554 1.922c5.14-1.48 9.675-3.744 13.592-6.799l-1.23-1.577Zm-12.933 6.459c-4.827 1.486-10.777 2.241-17.873 2.241v2c7.225 0 13.386-.768 18.461-2.329l-.588-1.912Zm-17.873 2.241c-7.418 0-14.013-1.348-19.805-4.021l-.838 1.816c6.092 2.811 12.979 4.205 20.643 4.205v-2Zm-19.795-4.017c-5.761-2.732-10.297-6.861-13.625-12.407l-1.715 1.028c3.528 5.88 8.361 10.282 14.483 13.186l.857-1.807Zm-13.625-12.407c-3.309-5.516-4.999-12.561-4.999-21.195h-2c0 8.885 1.738 16.314 5.284 22.223l1.715-1.028Zm-4.999-21.195c0-12.738 4.707-22.195 14.072-28.536l-1.122-1.656c-9.983 6.76-14.95 16.879-14.95 30.192h2Zm14.069-28.534c9.522-6.398 24.002-10.002 43.58-10.685l-.07-1.999c-19.726.688-34.649 4.32-44.626 11.024l1.116 1.66Zm43.582-10.685 21.937-.8-.073-1.999-21.937.8.073 1.999Zm22.901-1.8V94.02h-2v6.627h2Zm0-6.627c0-8.881-2.081-15.47-6.498-19.478l-1.344 1.48c3.81 3.458 5.842 9.36 5.842 17.998h2Zm-6.491-19.472c-4.278-3.955-10.266-5.864-17.818-5.864v2c7.225 0 12.664 1.823 16.46 5.332l1.358-1.468Zm-17.818-5.864c-6.42 0-12.651.928-18.689 2.786l.588 1.912c5.844-1.799 11.877-2.698 18.101-2.698v-2Zm-18.689 2.786a130.924 130.924 0 0 0-17.501 6.793l.855 1.808a128.944 128.944 0 0 1 17.234-6.69l-.588-1.911Zm-16.164 7.28-8.684-18.966-1.818.833 8.683 18.966 1.819-.832Zm-9.124-17.666c6.092-3.234 13.025-5.874 20.808-7.915l-.507-1.934c-7.909 2.073-14.991 4.765-21.239 8.082l.938 1.767Zm20.806-7.914c7.836-2.034 15.978-3.053 24.428-3.053v-2c-8.612 0-16.924 1.038-24.931 3.117l.503 1.936Zm46.331 63.388-16.339.572.07 1.998 16.339-.571-.07-1.999Zm-16.338.571c-13.445.459-23.124 2.747-28.793 7.059l1.21 1.592c5.147-3.914 14.283-6.196 27.651-6.652l-.068-1.999Zm-28.793 7.059c-5.672 4.314-8.507 10.254-8.507 17.707h2c0-6.868 2.573-12.202 7.717-16.115l-1.21-1.592Zm-8.507 17.707c0 6.447 1.935 11.359 5.986 14.501l1.225-1.581c-3.414-2.647-5.211-6.876-5.211-12.92h-2Zm5.996 14.509c3.952 2.984 9.096 4.429 15.342 4.429v-2c-5.943 0-10.624-1.373-14.137-4.026l-1.205 1.597Zm15.342 4.429c9.493 0 17.43-2.69 23.733-8.127l-1.306-1.514c-5.885 5.075-13.335 7.641-22.427 7.641v2Zm23.734-8.127c6.444-5.57 9.601-13.688 9.601-24.18h-2c0 10.075-3.014 17.572-8.909 22.667l1.308 1.513Zm9.601-24.18v-10.968h-2v10.968h2ZM685.57 178v1h1v-1h-1Zm-26.965 0h-1v1h1v-1Zm0-177.785v-1h-1v1h1Zm26.965 0h1v-1h-1v1Zm0 176.785h-26.965v2h26.965v-2Zm-25.965 1V.215h-2V178h2Zm-1-176.785h26.965v-2h-26.965v2Zm25.965-1V178h2V.215h-2ZM891.006 178l-.943.332.235.668h.708v-1Zm-16.339-46.389.943-.332-.235-.668h-.708v1Zm-63.87 0v-1h-.708l-.235.668.943.332ZM794.458 178v1h.708l.235-.668-.943-.332Zm-28.907 0-.938-.347-.499 1.347h1.437v-1Zm62.156-167.73v-1h-.696l-.242.652.938.348Zm30.393 0 .938-.347-.242-.653h-.696v1ZM920.142 178v1h1.436l-.499-1.347-.937.347Zm-52.559-69.926v1h1.406l-.461-1.328-.945.328Zm-15.882-45.703-.956.294.006.017.006.017.944-.328Zm-2.628-8.34-.954.298.002.005.952-.304Zm-3.427-11.084-.958.288.001.005.957-.293Zm-2.857-9.597.959-.283-1.049-3.568-.881 3.614.971.237Zm-2.856 10.511-.96-.282-.003.013.963.27Zm-3.2 10.74-.953-.303-.003.01-.003.01.959.284Zm-2.285 7.77.944.33.009-.025.007-.025-.96-.28Zm-15.996 45.703-.944-.33-.465 1.33h1.409v-1Zm73.497 69.594-16.339-46.389-1.886.665 16.339 46.388 1.886-.664Zm-17.282-47.057h-63.87v2h63.87v-2Zm-64.813.668-16.339 46.389 1.886.664 16.339-46.388-1.886-.665ZM794.458 177h-28.907v2h28.907v-2Zm-27.97 1.347 62.157-167.73-1.876-.695-62.156 167.731 1.875.694Zm61.219-167.078H858.1v-2h-30.393v2Zm29.455-.652 62.042 167.73 1.875-.694-62.041-167.73-1.876.694ZM920.142 177h-29.136v2h29.136v-2Zm-51.614-69.254-15.882-45.703-1.889.656 15.881 45.703 1.89-.656Zm-15.871-45.669a897.601 897.601 0 0 0-2.631-8.35l-1.905.607a871.67 871.67 0 0 1 2.624 8.331l1.912-.588Zm-2.629-8.345a1990.448 1990.448 0 0 1-3.426-11.077l-1.913.585c1.143 3.734 2.287 7.43 3.43 11.088l1.909-.596Zm-3.425-11.072a1929.037 1929.037 0 0 1-2.855-9.593l-1.918.565c.762 2.592 1.715 5.793 2.858 9.603l1.915-.575Zm-4.785-9.547c-.758 3.104-1.706 6.593-2.845 10.466l1.919.565c1.146-3.897 2.102-7.416 2.869-10.557l-1.943-.474Zm-2.848 10.479a319.162 319.162 0 0 1-3.19 10.706l1.906.607a322.046 322.046 0 0 0 3.21-10.774l-1.926-.54Zm-3.196 10.726c-.99 3.352-1.752 5.943-2.286 7.773l1.92.56c.533-1.826 1.294-4.415 2.284-7.766l-1.918-.567Zm-2.27 7.723-15.996 45.703 1.888.661 15.996-45.704-1.888-.66Zm-15.052 47.033h49.131v-2h-49.131v2Zm198.578-58.7 1 .1.09-.895-.88-.184-.21.979Zm-2.51 25.137-.28.961 1.15.329.12-1.19-.99-.1Zm-5.94-1.029-.1.996.1-.996Zm-19.884 2.057.331.944.008-.003.007-.003-.346-.938Zm-11.54 7.084.682.732.009-.009-.691-.723ZM966.416 178v1h1v-1h-1Zm-26.965 0h-1v1h1v-1Zm0-126.483v-1h-1v1h1Zm21.024 0 .986-.162-.137-.838h-.849v1Zm3.656 22.28-.987.162.138.838h.849v-1Zm1.257 0v1h.586l.286-.512-.872-.488Zm9.369-12.34.707.707-.707-.707Zm12.797-8.912.418.908.006-.003-.424-.905Zm15.996-2.428c2.1 0 4.39.113 6.88.339l.18-1.992c-2.54-.23-4.89-.347-7.06-.347v2Zm6.88.339c2.49.226 4.62.526 6.4.897l.41-1.958c-1.88-.39-4.09-.7-6.63-.93l-.18 1.99Zm5.61-.181-2.52 25.136 1.99.2 2.52-25.138-1.99-.198Zm-1.25 24.274c-1.67-.479-3.72-.83-6.12-1.062l-.19 1.99c2.32.226 4.24.56 5.76.995l.55-1.923Zm-6.11-1.062c-2.31-.23-4.4-.347-6.27-.347v2c1.78 0 3.81.111 6.07.338l.2-1.99Zm-6.27-.347c-4.915 0-9.603.819-14.059 2.46l.691 1.877c4.227-1.557 8.68-2.337 13.368-2.337v-2Zm-14.045 2.456c-4.477 1.57-8.446 4.007-11.899 7.304l1.381 1.446a30.768 30.768 0 0 1 11.18-6.863l-.662-1.888Zm-11.89 7.295c-3.471 3.234-6.177 7.283-8.13 12.127l1.855.748c1.856-4.603 4.405-8.399 7.638-11.411l-1.363-1.464Zm-8.13 12.127c-1.962 4.865-2.929 10.481-2.929 16.827h2c0-6.146.937-11.499 2.784-16.08l-1.855-.747Zm-2.929 16.827V178h2v-66.155h-2Zm1 65.155h-26.965v2h26.965v-2Zm-25.965 1V51.517h-2V178h2Zm-1-125.483h21.024v-2h-21.024v2Zm20.037-.839 3.656 22.28 1.974-.323-3.657-22.28-1.973.324Zm4.643 23.119h1.257v-2h-1.257v2Zm2.129-.512c2.468-4.412 5.535-8.452 9.204-12.12l-1.414-1.415c-3.796 3.796-6.975 7.982-9.535 12.559l1.745.976Zm9.204-12.12a42.938 42.938 0 0 1 12.508-8.712l-.836-1.817a44.93 44.93 0 0 0-13.086 9.114l1.414 1.414Zm12.514-8.715c4.733-2.218 9.918-3.333 15.572-3.333v-2c-5.925 0-11.403 1.17-16.421 3.523l.849 1.81Zm109.952 104.212.17.985.01-.002.01-.002-.19-.981Zm9.37-2.399h1v-1.376l-1.31.424.31.952Zm0 20.338.4.916.6-.261v-.655h-1Zm-45.59 1.142-.4.92.02.004.38-.924Zm-18.63-104.774h1v-1h-1v1Zm-17.25 0h-1v1h1v-1Zm0-11.997-.46-.89-.54.278v.612h1Zm18.51-9.484.46.89.36-.188.13-.393-.95-.309Zm8.8-27.079v-1h-.73l-.22.691.95.31Zm16.91 0h1v-1h-1v1Zm0 28.108h-1v1h1v-1Zm36.22 0h1v-1h-1v1Zm0 20.452v1h1v-1h-1Zm-36.22 0v-1h-1v1h1Zm17.48 87.607c3.56 0 7.09-.31 10.57-.929l-.35-1.969c-3.37.599-6.78.898-10.22.898v2Zm10.59-.933c3.46-.692 6.62-1.501 9.48-2.429l-.61-1.903c-2.78.901-5.86 1.691-9.26 2.371l.39 1.961Zm8.18-3.38v20.338h2v-20.338h-2Zm.6 19.421c-2.88 1.255-6.65 2.342-11.33 3.248l.38 1.964c4.76-.922 8.68-2.044 11.75-3.379l-.8-1.833Zm-11.33 3.248c-4.66.902-9.51 1.353-14.55 1.353v2c5.16 0 10.14-.462 14.93-1.389l-.38-1.964Zm-14.55 1.353c-7.05 0-13.36-1.162-18.93-3.466l-.76 1.848c5.85 2.419 12.42 3.618 19.69 3.618v-2Zm-18.92-3.462c-5.5-2.344-9.87-6.337-13.12-12.03l-1.74.992c3.45 6.037 8.14 10.347 14.07 12.878l.79-1.84Zm-13.12-12.03c-3.23-5.654-4.9-13.57-4.9-23.841h-2c0 10.448 1.69 18.757 5.16 24.833l1.74-.992Zm-4.9-23.841V71.969h-2v67.983h2Zm-1-68.983h-17.25v2h17.25v-2Zm-16.25 1V59.972h-2v11.997h2Zm-.54-11.107 18.51-9.484-.92-1.78-18.51 9.484.92 1.78Zm19-10.065 8.8-27.079-1.9-.618-8.8 27.08 1.9.617Zm7.85-26.388h16.91v-2h-16.91v2Zm15.91-1v28.108h2V23.409h-2Zm1 29.108h36.22v-2h-36.22v2Zm35.22-1v20.452h2V51.517h-2Zm1 19.452h-36.22v2h36.22v-2Zm-37.22 1v67.64h2v-67.64h-2Zm0 67.64c0 6.551 1.64 11.618 5.1 14.998l1.4-1.431c-2.94-2.866-4.5-7.32-4.5-13.567h-2Zm5.1 14.998c3.42 3.337 7.91 4.969 13.38 4.969v-2c-5.04 0-9-1.491-11.98-4.4l-1.4 1.431Zm59.77-3.915.62.787v-.002l-.62-.785Zm23.76 0-.62.785.01.008.01.007.6-.8Zm0 26.394.63.776.01-.002-.64-.774Zm-23.76 0-.65.759.01.008.01.008.63-.775Zm-3.8-13.254c0-6.106 1.56-10.113 4.42-12.353l-1.24-1.573c-3.55 2.787-5.18 7.54-5.18 13.926h2Zm4.42-12.355c3.08-2.435 6.81-3.669 11.26-3.669v-2c-4.84 0-9.03 1.355-12.5 4.1l1.24 1.569Zm11.26-3.669c4.45 0 8.18 1.234 11.26 3.669l1.24-1.569c-3.47-2.745-7.65-4.1-12.5-4.1v2Zm11.28 3.684c3 2.246 4.63 6.248 4.63 12.34h2c0-6.4-1.72-11.158-5.43-13.94l-1.2 1.6Zm4.63 12.34c0 5.922-1.62 9.996-4.66 12.48l1.27 1.548c3.66-3.001 5.39-7.762 5.39-14.028h-2Zm-4.66 12.478c-3.08 2.506-6.81 3.775-11.25 3.775v2c4.85 0 9.04-1.398 12.51-4.224l-1.26-1.551Zm-11.25 3.775c-4.44 0-8.17-1.269-11.25-3.775l-1.26 1.551c3.47 2.826 7.66 4.224 12.51 4.224v-2Zm-11.23-3.758c-2.89-2.48-4.45-6.559-4.45-12.495h-2c0 6.252 1.64 11.008 5.15 14.013l1.3-1.518Z'
							fill='url(#a)'
							fill-opacity='.2'
						/>
						<defs>
							<linearGradient
								id='a'
								x1='188.474'
								y1='221'
								x2='720.5'
								y2='221'
								gradientUnits='userSpaceOnUse'>
								<stop offset='.264' stop-color='#FC8A6B' />
								<stop offset='.528' stop-color='#CF818D' />
								<stop offset='.861' stop-color='#9577B9' />
								<stop offset='1' stop-color='#3E66FB' />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<article className='container'>
					<h2>Digital Art.</h2>
					<p>
						Digital drawings are my speciality. They are created in my own cute and simplistic style
						with soft, and warm colors.
					</p>
					<ul>
						<li>Bust - $35 USD</li>
						<li>Half Body - $45 USD</li>
						<li>Full Body - $55 USD</li>
					</ul>
					<div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</article>

				<article className='container'>
					<h2>Twitch Emotes.</h2>
					<p>
						I offer static and animated emotes. Each emote goes through a process of detailed work,
						from initial sketch, to the final drawing.
					</p>
					<ul>
						<li>Static - $25 USD / PER</li>
						<li>Animated - $75 - 115 USD / PER</li>
					</ul>
					<div>
						<div>
							<div></div>
							<div></div>
							<div></div>

							<div></div>
							<div></div>
							<div></div>

							<div></div>
							<div></div>
							<div></div>
						</div>
						<div>
							<div></div>
							<div></div>
							<div></div>

							<div></div>
							<div></div>
							<div></div>

							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</article>

				<article className='container'>
					<h2>Traditonal Art.</h2>
					<p>
						Mostly with water colors, I create clean and detailed traditional art. I love to blend
						with creative colors and present in a frame style.
					</p>
					<ul>
						<li>Traditional - Pricing based on project.</li>
					</ul>
					<div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</article>
			</section>
		</>
	);
};

export default Terms;
