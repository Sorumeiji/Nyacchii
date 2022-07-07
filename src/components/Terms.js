const Terms = () => {
	return (
		<div className='pricing__content container'>
			<div className='pricing__details'>
				<div className='flow'>
					<h3>
						Terms of Service<span className='accent'>.</span>
					</h3>
					<div className='termsContent flow'>
						<ul className='flow'>
							<li>
								<p className='openSansBold'>
									{/* <span className='accent '>+ </span> */}
									By commissioning me, you agree to the following terms of service.
								</p>
							</li>
							<li>
								<p className='accent-gray'>
									<span className='accent'>+ </span>
									If the client requesting the commission does not send the payment within 48 hours
									of receiving the invoice, the commission will be canceled (unless I extend this
									deadline at my discretion).
								</p>
							</li>
							<li>
								<p className='accent-gray'>
									<span className='accent'>+ </span>
									Acceptance of the invoice and subsequent payment will be taken as a confirmation
									that the client agrees with the terms and conditions of the commission outlined
									below:
								</p>
							</li>
							<li>
								<p className='accent-gray'>
									<span className='accent'>+ </span>
									Once I begin working on the commission, I will not refund the payment. If the
									client asks for a refund before I start the commission, the PayPal fee will be
									discounted from the refund.
								</p>
							</li>
							<li>
								<p className='accent-gray'>
									<span className='accent'>+ </span>
									The drawing is a digital piece, and, because of this, I will not send any kind of
									package or physical delivery to the address given by the client. Instead, I will
									send an e-mail with the proper image files. If the client does not provide an
									e-mail address, the images will be sent to the same e-mail address used in the
									PayPal invoice.
								</p>
							</li>
							<li>
								<p className='accent-gray'>
									<span className='accent'>+ </span>
									The client will receive one sketch where they will be able to request a maximum of
									three drastic changes. Once the client accepts the sketch and I start working on
									the details, there will be no more changes made to the sketch. If the client asks
									for more changes at the sketch stage (beyond the three drastic changes) or a
									modification is needed after I have started detailing the commission, an extra fee
									will be charged.
								</p>
							</li>
						</ul>
						<ul className='flow'>
							<li>
								<p className='accent-gray'>
									<span className='accent'>+ </span>
									The client accepts that the estimated time to complete the commission I have
									provided is an estimate and that this waiting time may change due to my workload.
								</p>
							</li>
							<li>
								<p className='accent-gray'>
									<span className='accent'>+ </span>
									Once I start working on the commission, it will be finished in within one to four
									weeks, depending on the complexity of the commission (this does not include the
									time taken to do the modifications asked by the client).
								</p>
							</li>
							<li>
								<p className='accent-gray'>
									<span className='accent'>+ </span>
									Communication with the client is very important. If I ask for information from the
									client, and they do not reply in a timely manner, the project may be delayed, and
									the delivery date will be postponed until I have received the needed information.
									If the client does not get in contact with me within two weeks, the commission
									will be canceled.
								</p>
							</li>
							<li>
								<p className='accent-gray'>
									<span className='accent'>+ </span>
									The client accepts that the style of the drawings will be the same as the images
									attached to this invoice.
								</p>
							</li>
							<li>
								<p className='accent-gray'>
									<span className='accent'>+ </span>
									The project will be finished once the digital file is sent by e-mail to the
									client. The client understands that I will no longer make any modifications to the
									final drawing as a part of this commission.
								</p>
							</li>
							<li>
								<p className='accent-gray'>
									<span className='accent'>+ </span>
									The emote, layout or drawing created in this commission is only for personal use
									in channels such as Twitch, Picarto, Discord, any social network, etc. It is
									forbidden to use the commission for business purposes (such as merchandise)
									without my express permission. Please contact me directly if you would like to use
									this commission for business purposes.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Terms;
