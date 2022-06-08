import React from 'react';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../src/components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faDollarSign, faList } from '@fortawesome/free-solid-svg-icons';

import feature01 from '../img/digital/01_72ppi_Watermark.png';
import feature02 from '../img/digital/INOCHI_001_72ppi _Watermark.png';

const commission = () => {
	return (
		<>
			<section className='hero'>
				<Navigation />
				<div className='container'>
					<div>
						<div>
							<h1>
								Commission & Pricing<span className='accent'>.</span>
							</h1>
							<h4>Status: Closed</h4>
							<p>
								Below are my prices for Digital Art, Twitch Emotes, and Traditonal Art. For any
								prices not listed, reach out for quote.
							</p>
							<ul>
								<li>
									<a href='#prices' role='button'>
										View my Prices &nbsp;
										<span className='accent'>
											<FontAwesomeIcon icon={faDollarSign} />
										</span>
									</a>
								</li>
								<li>
									<a
										href='https://trello.com/b/DSUJQavY/nyacchii-commissions'
										target='_blank'
										role='outlineButton'>
										Waiting List &nbsp;
										<span>
											<FontAwesomeIcon icon={faClipboardList} />
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className='commission' id='prices'>
				<div className='decoration'>
					<svg width='1102' height='151' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<mask
							id='b'
							maskUnits='userSpaceOnUse'
							x='0'
							y='0'
							width='1102'
							height='151'
							fill='#000'>
							<path fill='#fff' d='M0 0h1102v151H0z' />
							<path d='M67.342 25.085c-13.128 0-23.452 4.65-30.972 13.953-7.52 9.303-11.28 22.142-11.28 38.517 0 17.14 3.6 30.106 10.802 38.898 7.265 8.793 17.748 13.19 31.45 13.19 5.927 0 11.663-.574 17.207-1.721 5.545-1.21 11.312-2.739 17.303-4.587v19.593c-10.962 4.141-23.389 6.212-37.282 6.212-20.457 0-36.166-6.181-47.128-18.542C6.481 118.174 1 100.429 1 77.364 1 62.836 3.645 50.125 8.934 39.23 14.288 28.334 22 19.987 32.068 14.19c10.07-5.799 21.891-8.698 35.465-8.698 14.276 0 27.468 2.995 39.576 8.984l-8.22 19.02c-4.717-2.23-9.72-4.174-15.009-5.83-5.226-1.721-10.738-2.581-16.538-2.581Zm156.01 69.1c0 17.267-4.43 30.743-13.288 40.428-8.858 9.684-21.19 14.527-36.995 14.527-9.878 0-18.609-2.23-26.193-6.69-7.583-4.46-13.415-10.864-17.493-19.211-4.079-8.347-6.118-18.031-6.118-29.054 0-17.14 4.397-30.52 13.192-40.141 8.794-9.621 21.19-14.432 37.186-14.432 15.295 0 27.403 4.938 36.325 14.814 8.923 9.812 13.384 23.065 13.384 39.759Zm-76.954 0c0 24.403 9.018 36.605 27.054 36.605 17.844 0 26.766-12.202 26.766-36.605 0-24.149-8.986-36.223-26.958-36.223-9.432 0-16.282 3.122-20.552 9.366-4.206 6.245-6.31 15.197-6.31 26.857Zm191.953 53.043h-22.56V82.047c0-8.092-1.53-14.113-4.589-18.064-3.059-4.014-7.838-6.02-14.339-6.02-8.667 0-15.04 2.834-19.118 8.505-4.015 5.607-6.023 14.974-6.023 28.099v52.661h-22.464V41.523h17.589l3.154 13.859h1.148c2.931-5.034 7.169-8.92 12.714-11.66 5.608-2.74 11.758-4.11 18.449-4.11 16.251 0 27.021 5.543 32.311 16.63h1.529c3.123-5.225 7.521-9.303 13.192-12.234 5.672-2.93 12.173-4.396 19.502-4.396 12.618 0 21.795 3.186 27.531 9.557 5.799 6.372 8.699 16.089 8.699 29.15v68.909h-22.465V82.047c0-8.092-1.561-14.113-4.684-18.064-3.059-4.014-7.839-6.02-14.339-6.02-8.731 0-15.136 2.739-19.214 8.218-4.015 5.416-6.023 13.763-6.023 25.04v56.007Zm120.544 0h-22.464V41.523h22.464v105.705ZM435.092 13.52c0-4.014 1.084-7.104 3.25-9.27 2.231-2.167 5.386-3.25 9.464-3.25 3.951 0 7.01 1.083 9.177 3.25 2.231 2.166 3.346 5.256 3.346 9.27 0 3.823-1.115 6.85-3.346 9.08-2.167 2.166-5.226 3.25-9.177 3.25-4.078 0-7.233-1.084-9.464-3.25-2.166-2.23-3.25-5.257-3.25-9.08Zm127.045 103.603c0 10.322-3.76 18.254-11.28 23.797-7.52 5.48-18.291 8.22-32.311 8.22-14.084 0-25.396-2.135-33.936-6.404v-19.401c12.427 5.734 23.994 8.601 34.701 8.601 13.829 0 20.743-4.173 20.743-12.52 0-2.676-.764-4.906-2.294-6.69-1.529-1.784-4.047-3.632-7.552-5.543-3.505-1.912-8.38-4.078-14.626-6.499-12.172-4.715-20.425-9.43-24.758-14.145-4.27-4.715-6.405-10.832-6.405-18.35 0-9.048 3.632-16.057 10.897-21.027 7.329-5.033 17.271-7.55 29.826-7.55 12.427 0 24.185 2.517 35.274 7.55l-7.265 16.917c-11.408-4.715-20.999-7.073-28.774-7.073-11.854 0-17.78 3.377-17.78 10.131 0 3.314 1.529 6.117 4.588 8.41 3.123 2.295 9.878 5.449 20.266 9.463 8.731 3.377 15.072 6.467 19.023 9.27 3.951 2.804 6.883 6.053 8.795 9.749 1.912 3.632 2.868 7.996 2.868 13.094Zm95.402 0c0 10.322-3.76 18.254-11.28 23.797-7.52 5.48-18.29 8.22-32.31 8.22-14.085 0-25.397-2.135-33.936-6.404v-19.401c12.427 5.734 23.994 8.601 34.7 8.601 13.83 0 20.744-4.173 20.744-12.52 0-2.676-.764-4.906-2.294-6.69-1.53-1.784-4.047-3.632-7.552-5.543-3.505-1.912-8.38-4.078-14.626-6.499-12.172-4.715-20.425-9.43-24.759-14.145-4.27-4.715-6.404-10.832-6.404-18.35 0-9.048 3.632-16.057 10.897-21.027 7.329-5.033 17.271-7.55 29.826-7.55 12.427 0 24.185 2.517 35.274 7.55l-7.265 16.917c-11.408-4.715-20.999-7.073-28.774-7.073-11.854 0-17.781 3.377-17.781 10.131 0 3.314 1.53 6.117 4.589 8.41 3.123 2.295 9.878 5.449 20.266 9.463 8.731 3.377 15.072 6.467 19.023 9.27 3.951 2.804 6.883 6.053 8.795 9.749 1.912 3.632 2.867 7.996 2.867 13.094Zm46.842 30.105h-22.465V41.523h22.465v105.705ZM680.578 13.52c0-4.014 1.083-7.104 3.25-9.27 2.23-2.167 5.385-3.25 9.464-3.25 3.951 0 7.01 1.083 9.177 3.25 2.23 2.166 3.345 5.256 3.345 9.27 0 3.823-1.115 6.85-3.345 9.08-2.167 2.166-5.226 3.25-9.177 3.25-4.079 0-7.234-1.084-9.464-3.25-2.167-2.23-3.25-5.257-3.25-9.08Zm149.795 80.665c0 17.267-4.429 30.743-13.287 40.428-8.859 9.684-21.19 14.527-36.995 14.527-9.878 0-18.609-2.23-26.193-6.69-7.584-4.46-13.415-10.864-17.493-19.211-4.079-8.347-6.119-18.031-6.119-29.054 0-17.14 4.398-30.52 13.192-40.141 8.795-9.621 21.19-14.432 37.187-14.432 15.295 0 27.403 4.938 36.325 14.814 8.922 9.812 13.383 23.065 13.383 39.759Zm-76.953 0c0 24.403 9.018 36.605 27.053 36.605 17.845 0 26.767-12.202 26.767-36.605 0-24.149-8.986-36.223-26.958-36.223-9.432 0-16.283 3.122-20.553 9.366-4.206 6.245-6.309 15.197-6.309 26.857Zm195.872 53.043h-22.56v-64.99c0-8.156-1.657-14.24-4.971-18.255-3.25-4.014-8.444-6.02-15.582-6.02-9.495 0-16.442 2.803-20.839 8.41-4.397 5.607-6.596 15.005-6.596 28.194v52.661h-22.465V41.523h17.59l3.154 13.859h1.147c3.187-5.034 7.712-8.92 13.575-11.66 5.863-2.74 12.363-4.11 19.501-4.11 25.364 0 38.046 12.902 38.046 38.707v68.909Zm102.288-30.105c0 10.322-3.76 18.254-11.28 23.797-7.52 5.48-18.29 8.22-32.31 8.22-14.087 0-25.399-2.135-33.939-6.404v-19.401c12.427 5.734 23.994 8.601 34.699 8.601 13.83 0 20.75-4.173 20.75-12.52 0-2.676-.77-4.906-2.3-6.69-1.53-1.784-4.05-3.632-7.55-5.543-3.51-1.912-8.38-4.078-14.63-6.499-12.169-4.715-20.422-9.43-24.755-14.145-4.27-4.715-6.405-10.832-6.405-18.35 0-9.048 3.633-16.057 10.898-21.027 7.329-5.033 17.272-7.55 29.822-7.55 12.43 0 24.19 2.517 35.28 7.55l-7.27 16.917c-11.41-4.715-21-7.073-28.77-7.073-11.86 0-17.782 3.377-17.782 10.131 0 3.314 1.529 6.117 4.592 8.41 3.12 2.295 9.87 5.449 20.26 9.463 8.73 3.377 15.07 6.467 19.03 9.27 3.95 2.804 6.88 6.053 8.79 9.749 1.91 3.632 2.87 7.996 2.87 13.094Zm21.03 18.159c0-4.652 1.21-8.22 3.63-10.705 2.42-2.485 5.93-3.727 10.52-3.727 4.65 0 8.19 1.306 10.61 3.918 2.42 2.549 3.63 6.053 3.63 10.514 0 4.523-1.24 8.123-3.73 10.799-2.42 2.613-5.93 3.919-10.51 3.919-4.59 0-8.1-1.306-10.52-3.919-2.42-2.612-3.63-6.212-3.63-10.799Z' />
						</mask>
						<path
							d='M67.342 25.085c-13.128 0-23.452 4.65-30.972 13.953-7.52 9.303-11.28 22.142-11.28 38.517 0 17.14 3.6 30.106 10.802 38.898 7.265 8.793 17.748 13.19 31.45 13.19 5.927 0 11.663-.574 17.207-1.721 5.545-1.21 11.312-2.739 17.303-4.587v19.593c-10.962 4.141-23.389 6.212-37.282 6.212-20.457 0-36.166-6.181-47.128-18.542C6.481 118.174 1 100.429 1 77.364 1 62.836 3.645 50.125 8.934 39.23 14.288 28.334 22 19.987 32.068 14.19c10.07-5.799 21.891-8.698 35.465-8.698 14.276 0 27.468 2.995 39.576 8.984l-8.22 19.02c-4.717-2.23-9.72-4.174-15.009-5.83-5.226-1.721-10.738-2.581-16.538-2.581Zm156.01 69.1c0 17.267-4.43 30.743-13.288 40.428-8.858 9.684-21.19 14.527-36.995 14.527-9.878 0-18.609-2.23-26.193-6.69-7.583-4.46-13.415-10.864-17.493-19.211-4.079-8.347-6.118-18.031-6.118-29.054 0-17.14 4.397-30.52 13.192-40.141 8.794-9.621 21.19-14.432 37.186-14.432 15.295 0 27.403 4.938 36.325 14.814 8.923 9.812 13.384 23.065 13.384 39.759Zm-76.954 0c0 24.403 9.018 36.605 27.054 36.605 17.844 0 26.766-12.202 26.766-36.605 0-24.149-8.986-36.223-26.958-36.223-9.432 0-16.282 3.122-20.552 9.366-4.206 6.245-6.31 15.197-6.31 26.857Zm191.953 53.043h-22.56V82.047c0-8.092-1.53-14.113-4.589-18.064-3.059-4.014-7.838-6.02-14.339-6.02-8.667 0-15.04 2.834-19.118 8.505-4.015 5.607-6.023 14.974-6.023 28.099v52.661h-22.464V41.523h17.589l3.154 13.859h1.148c2.931-5.034 7.169-8.92 12.714-11.66 5.608-2.74 11.758-4.11 18.449-4.11 16.251 0 27.021 5.543 32.311 16.63h1.529c3.123-5.225 7.521-9.303 13.192-12.234 5.672-2.93 12.173-4.396 19.502-4.396 12.618 0 21.795 3.186 27.531 9.557 5.799 6.372 8.699 16.089 8.699 29.15v68.909h-22.465V82.047c0-8.092-1.561-14.113-4.684-18.064-3.059-4.014-7.839-6.02-14.339-6.02-8.731 0-15.136 2.739-19.214 8.218-4.015 5.416-6.023 13.763-6.023 25.04v56.007Zm120.544 0h-22.464V41.523h22.464v105.705ZM435.092 13.52c0-4.014 1.084-7.104 3.25-9.27 2.231-2.167 5.386-3.25 9.464-3.25 3.951 0 7.01 1.083 9.177 3.25 2.231 2.166 3.346 5.256 3.346 9.27 0 3.823-1.115 6.85-3.346 9.08-2.167 2.166-5.226 3.25-9.177 3.25-4.078 0-7.233-1.084-9.464-3.25-2.166-2.23-3.25-5.257-3.25-9.08Zm127.045 103.603c0 10.322-3.76 18.254-11.28 23.797-7.52 5.48-18.291 8.22-32.311 8.22-14.084 0-25.396-2.135-33.936-6.404v-19.401c12.427 5.734 23.994 8.601 34.701 8.601 13.829 0 20.743-4.173 20.743-12.52 0-2.676-.764-4.906-2.294-6.69-1.529-1.784-4.047-3.632-7.552-5.543-3.505-1.912-8.38-4.078-14.626-6.499-12.172-4.715-20.425-9.43-24.758-14.145-4.27-4.715-6.405-10.832-6.405-18.35 0-9.048 3.632-16.057 10.897-21.027 7.329-5.033 17.271-7.55 29.826-7.55 12.427 0 24.185 2.517 35.274 7.55l-7.265 16.917c-11.408-4.715-20.999-7.073-28.774-7.073-11.854 0-17.78 3.377-17.78 10.131 0 3.314 1.529 6.117 4.588 8.41 3.123 2.295 9.878 5.449 20.266 9.463 8.731 3.377 15.072 6.467 19.023 9.27 3.951 2.804 6.883 6.053 8.795 9.749 1.912 3.632 2.868 7.996 2.868 13.094Zm95.402 0c0 10.322-3.76 18.254-11.28 23.797-7.52 5.48-18.29 8.22-32.31 8.22-14.085 0-25.397-2.135-33.936-6.404v-19.401c12.427 5.734 23.994 8.601 34.7 8.601 13.83 0 20.744-4.173 20.744-12.52 0-2.676-.764-4.906-2.294-6.69-1.53-1.784-4.047-3.632-7.552-5.543-3.505-1.912-8.38-4.078-14.626-6.499-12.172-4.715-20.425-9.43-24.759-14.145-4.27-4.715-6.404-10.832-6.404-18.35 0-9.048 3.632-16.057 10.897-21.027 7.329-5.033 17.271-7.55 29.826-7.55 12.427 0 24.185 2.517 35.274 7.55l-7.265 16.917c-11.408-4.715-20.999-7.073-28.774-7.073-11.854 0-17.781 3.377-17.781 10.131 0 3.314 1.53 6.117 4.589 8.41 3.123 2.295 9.878 5.449 20.266 9.463 8.731 3.377 15.072 6.467 19.023 9.27 3.951 2.804 6.883 6.053 8.795 9.749 1.912 3.632 2.867 7.996 2.867 13.094Zm46.842 30.105h-22.465V41.523h22.465v105.705ZM680.578 13.52c0-4.014 1.083-7.104 3.25-9.27 2.23-2.167 5.385-3.25 9.464-3.25 3.951 0 7.01 1.083 9.177 3.25 2.23 2.166 3.345 5.256 3.345 9.27 0 3.823-1.115 6.85-3.345 9.08-2.167 2.166-5.226 3.25-9.177 3.25-4.079 0-7.234-1.084-9.464-3.25-2.167-2.23-3.25-5.257-3.25-9.08Zm149.795 80.665c0 17.267-4.429 30.743-13.287 40.428-8.859 9.684-21.19 14.527-36.995 14.527-9.878 0-18.609-2.23-26.193-6.69-7.584-4.46-13.415-10.864-17.493-19.211-4.079-8.347-6.119-18.031-6.119-29.054 0-17.14 4.398-30.52 13.192-40.141 8.795-9.621 21.19-14.432 37.187-14.432 15.295 0 27.403 4.938 36.325 14.814 8.922 9.812 13.383 23.065 13.383 39.759Zm-76.953 0c0 24.403 9.018 36.605 27.053 36.605 17.845 0 26.767-12.202 26.767-36.605 0-24.149-8.986-36.223-26.958-36.223-9.432 0-16.283 3.122-20.553 9.366-4.206 6.245-6.309 15.197-6.309 26.857Zm195.872 53.043h-22.56v-64.99c0-8.156-1.657-14.24-4.971-18.255-3.25-4.014-8.444-6.02-15.582-6.02-9.495 0-16.442 2.803-20.839 8.41-4.397 5.607-6.596 15.005-6.596 28.194v52.661h-22.465V41.523h17.59l3.154 13.859h1.147c3.187-5.034 7.712-8.92 13.575-11.66 5.863-2.74 12.363-4.11 19.501-4.11 25.364 0 38.046 12.902 38.046 38.707v68.909Zm102.288-30.105c0 10.322-3.76 18.254-11.28 23.797-7.52 5.48-18.29 8.22-32.31 8.22-14.087 0-25.399-2.135-33.939-6.404v-19.401c12.427 5.734 23.994 8.601 34.699 8.601 13.83 0 20.75-4.173 20.75-12.52 0-2.676-.77-4.906-2.3-6.69-1.53-1.784-4.05-3.632-7.55-5.543-3.51-1.912-8.38-4.078-14.63-6.499-12.169-4.715-20.422-9.43-24.755-14.145-4.27-4.715-6.405-10.832-6.405-18.35 0-9.048 3.633-16.057 10.898-21.027 7.329-5.033 17.272-7.55 29.822-7.55 12.43 0 24.19 2.517 35.28 7.55l-7.27 16.917c-11.41-4.715-21-7.073-28.77-7.073-11.86 0-17.782 3.377-17.782 10.131 0 3.314 1.529 6.117 4.592 8.41 3.12 2.295 9.87 5.449 20.26 9.463 8.73 3.377 15.07 6.467 19.03 9.27 3.95 2.804 6.88 6.053 8.79 9.749 1.91 3.632 2.87 7.996 2.87 13.094Zm21.03 18.159c0-4.652 1.21-8.22 3.63-10.705 2.42-2.485 5.93-3.727 10.52-3.727 4.65 0 8.19 1.306 10.61 3.918 2.42 2.549 3.63 6.053 3.63 10.514 0 4.523-1.24 8.123-3.73 10.799-2.42 2.613-5.93 3.919-10.51 3.919-4.59 0-8.1-1.306-10.52-3.919-2.42-2.612-3.63-6.212-3.63-10.799Z'
							stroke='url(#a)'
							strokeOpacity='.2'
							strokeWidth='2'
							mask='url(#b)'
						/>
						<defs>
							<linearGradient
								id='a'
								x1='32.338'
								y1='150'
								x2='961.272'
								y2='150'
								gradientUnits='userSpaceOnUse'>
								<stop offset='.245' stopColor='#FC8A6B' />
								<stop offset='.411' stopColor='#CF818D' />
								<stop offset='.589' stopColor='#9577B9' />
								<stop offset='1' stopColor='#3E66FB' />
							</linearGradient>
						</defs>
					</svg>
				</div>

				<article id='information' className='container comm-information'>
					<h2>
						General Information<span className='accent'>.</span>
					</h2>
					<div>
						<p>Current work and waiting list via Trello : </p>
						<a
							className='accent'
							href='https://trello.com/b/DSUJQavY/nyacchii-commissions'
							target='_blank'>
							https://trello.com/b/DSUJQavY/nyacchii-commissions
						</a>
					</div>
					<div>
						<p>To enable notifications from Trello, you can follow these easy instructions : </p>
						<a
							className='accent'
							target='_blank'
							href='https://help.trello.com/article/799-watching-cards-lists-and-boards '>
							https://help.trello.com/article/799-watching-cards-lists-and-boards
						</a>
					</div>
					<div>
						<p>
							In order to save a spot on the waiting list, you have to wait until commissions are
							open; then a Google form link will be available for you to add all your commission
							info, and I'll pick the ones I'll be adding to the waitlist.
						</p>
					</div>
					<div>
						<p>Payment is accepted via PayPal only.</p>
					</div>
				</article>

				<div className='container button-group'>
					<ul>
						<li>
							<a href='#emotes' role='buttonGroup'>
								Emotes
							</a>
						</li>
						<li>
							<a href='#digital' role='buttonGroup'>
								Illustrations
							</a>
						</li>
						<li>
							<a href='#vtuber' role='buttonGroup'>
								Vtubers
							</a>
						</li>
					</ul>
				</div>

				<article id='emotes' className='container'>
					<h2>
						Emotes<span className='accent'>.</span>
					</h2>

					<div className='displayEmotes'>
						<div className='displayContent'>
							<h4>Normal Emotes</h4>
							<div className='displayEmotesGallery'>
								<div className='displayEmotesGallery-item'>
									<img src='https://ik.imagekit.io/sorudev/Nyacchii/emotes/normal/millie3_tssDLseay.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650489616819' />
								</div>
								<div className='displayEmotesGallery-item'>
									<img src='https://ik.imagekit.io/sorudev/Nyacchii/emotes/normal/millie2_ylpdpd-Y9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650489616807' />
								</div>
								<div className='displayEmotesGallery-item'>
									<img src='https://ik.imagekit.io/sorudev/Nyacchii/emotes/normal/millie1_6eyf0SNI_x.png?ik-sdk-version=javascript-1.4.3&updatedAt=1650489616932' />
								</div>
							</div>
							<hr />
							<div className='displayContent_price'>
								<div>
									<ul className='list'>
										<li>
											Normal: <span className='opacity'> $30 USD (each).</span>
										</li>
									</ul>
								</div>
								<div></div>
								<div className='accordian'>
									<div>
										<input
											type='checkbox'
											name='accoridan'
											id='normal'
											className='accordian__input'
										/>
										<label for='normal' className='accordian__label'>
											Normal Emote Specs.
										</label>
										<div className='accordian__content'>
											<ul className='list'>
												<li>
													Size: <span className='opacity'>112px, 56px & 28px</span>
												</li>
												<li>
													Resolution: <span className='opacity'>72ppi</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='displayContent'>
							<h4>Animated Emotes</h4>
							<div className='displayEmotesGallery'>
								<div className='displayEmotesGallery-item'>
									<img src='https://ik.imagekit.io/sorudev/Nyacchii/emotes/animated/inochi2_nEQCxWdpB.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1650489652708' />
								</div>
								<div className='displayEmotesGallery-item'>
									<img src='https://ik.imagekit.io/sorudev/Nyacchii/emotes/animated/inochi1_wS5PkBATB.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1650489652821' />
								</div>
								<div className='displayEmotesGallery-item'>
									<img src='https://ik.imagekit.io/sorudev/Nyacchii/emotes/animated/nyacchii1_Z-rHvj0uk.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1650489651375' />
								</div>
							</div>
							<hr />
							<div className='displayContent_price'>
								<div>
									<ul className='list'>
										<li>
											Animated: <span className='opacity'>$80 - $120 USD (each).</span>
										</li>
									</ul>
								</div>

								<div className='accordian'>
									<div>
										<input
											type='checkbox'
											name='accoridan'
											id='animated'
											className='accordian__input'
										/>
										<label for='animated' className='accordian__label'>
											Animated Emote Specs.
										</label>
										<div className='accordian__content'>
											<ul className='list'>
												<li>
													Twitch: <span className='opacity'>112px at 30fps</span>
												</li>
												<li>
													Discord: <span className='opacity'>56px at 60fps</span>
												</li>
												<li>
													Thumbnail: <span className='opacity'>112px, 56px & 28px</span>
												</li>
												<li>
													Resolution: <span className='opacity'>72ppi</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='displayContent-extra'>
						<h4>Terms.</h4>
						<p>
							For work with a tight deadline, price will increase a 30%. In the case of animation,
							if length is bigger than 60 frames total for Twitch emotes, the frame rate will be
							reduced as necessary. If the file size is bigger than 256kb for Discord emotes, the
							frame rate will be lowered to 30fps.
						</p>
						<p>
							The emotes created for the commission is only for personal use only, in channels such
							as: Twitch, Picarto, Discord, any social network, etc. It is forbidden to use the
							commission for business purposes (such as merchandise) without my express permission.
						</p>
						<p>
							Please
							<Link href='/contact'>
								<a className='accent'> contact me </a>
							</Link>
							directly if you would like to use a commission for business purposes.
						</p>
					</div>
				</article>

				<article id='digital' className='container'>
					<h2>
						Illustrations<span className='accent'>.</span>
					</h2>

					<div className='displayDigital'>
						<div className='displayContent'>
							<h4>
								Character art<span className='accent'>.</span>
							</h4>
							<div className='displayGallery'>
								<div className='displayGallery__item'>
									<Image src={feature01} />
								</div>
							</div>
							<hr />
							<div className='displayContent_price'>
								<div>
									<ul role='list' className='list'>
										<li>
											Headshot: <span className='opacity'> $60 USD</span>
										</li>
										<li>
											Half Body: <span className='opacity'> $90 USD</span>
										</li>
										<li>
											Full Body:<span className='opacity'> $120 USD</span>
										</li>
									</ul>
								</div>
								<div></div>
								<div className='accordian'>
									<div>
										<input
											type='checkbox'
											name='accoridan'
											id='character'
											className='accordian__input'
										/>
										<label for='character' className='accordian__label'>
											Character Specs.
										</label>
										<div className='accordian__content'>
											<ul role='list' className='list'>
												<li>
													Size: <span className='opacity'>1000 px</span>
												</li>
												<li>
													Resolution: <span className='opacity'>72 ppi</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='displayContent'>
							<h4>
								Backgrounds<span className='accent'>.</span>
							</h4>
							<div className='displayGallery'>
								<div className='displayGallery__item'>
									<Image src={feature02} />
								</div>
							</div>
							<hr />
							<div className='displayContent_price'>
								<div>
									<ul className='list'>
										<li>
											Background: <span className='opacity'>$60 - $500 USD</span>
										</li>
									</ul>
								</div>
								<div></div>
								<div className='accordian'>
									<div>
										<input
											type='checkbox'
											name='accoridan'
											id='background'
											className='accordian__input'
										/>
										<label for='background' className='accordian__label'>
											Background Specs.
										</label>
										<div className='accordian__content'>
											<ul role='list' className='list'>
												<li>
													Size: <span className='opacity'>1000px</span>
												</li>
												<li>
													Resolution: <span className='opacity'>72ppi</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='displayContent-extra'>
						<h4>Terms.</h4>
						<p>Price may change based on complexity.</p>
						<p>
							Every extra character drawn within the same image will be priced at 80% of the
							original price. For work with a tight deadline, price will increase a 30%.
						</p>
						<p>
							The illustrations created for the commission is only for personal use only, in
							channels such as: Twitch, Picarto, Discord, any social network, etc. It is forbidden
							to use the commission for business purposes (such as merchandise) without my express
							permission.
						</p>
						<p>
							Please
							<Link href='/contact'>
								<a className='accent'> contact me </a>
							</Link>
							directly if you would like to use a commission for business purposes.
						</p>
					</div>
				</article>

				<article id='vtuber' className='container'>
					<h2>
						Vtubers / GIFtubers<span className='accent'>.</span>
					</h2>
					<div className='displayVtuber'>
						<div className='displayContent'>
							<h4>Coming Soon!</h4>
						</div>
					</div>

					<div className='displayContent-extra'>
						<p>
							Vtubers / Pngtubers are coming soon! Prices and speficiations are still being decided
							upon, with no planned release date. I ask on your patience on this. Keep an eye on my
							Twitter, Discord or Trello waiting list for updates.
						</p>
					</div>
				</article>
			</section>
		</>
	);
};

export default commission;
