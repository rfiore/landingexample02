import React, { Component } from 'react';
import style from '../App.module.scss';

import qr from '../images/qr-code-lvr-ios-app-1024x1024.png';
import appStore from '../images/CTA-App-Store.png';
import newsletter from '../images/ico-mail.svg';
import notification from '../images/ico-notification.svg';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isTab1Active: true,
			isTab2Active: false
		};

		this.switchTab = this.switchTab.bind(this);
	}

	switchTab(tab1, tab2){
		this.setState({
			isTab1Active: tab1,
			isTab2Active: tab2
		})
	}

	render() {
		let isNotification = window.Notification ? true : false;

		return (
			<div className={style.header}>
				<div className={style.container}>
					<div className={style.row}>
						<div className={`${style["col-lg-6"]} ${style["header-content"]}`}>
							<h2>Black Friday</h2>
							<p>
								Minim sit non culpa eu. Anim nulla est sunt incididunt dolore nisi est incididunt pariatur sit laborum fugiat id qui. Est enim ea occaecat exercitation sint cillum. Tempor ullamco sunt deserunt ipsum labore consectetur incididunt veniam fugiat exercitation esse cillum. Ex laboris officia sit non aliquip cupidatat sunt id. Magna in deserunt ut minim nostrud incididunt.
							</p>
						</div>

						<div className={`${style["col-lg-6"]} ${style["header-nav"]}`}>
							<ul className={`${style["nav"]} ${style["nav-tabs"]} ${style["nav-fill"]}`}>
								<li className={style["nav-item"]}>
									<a className={`${style["nav-link"]} ${this.state.isTab1Active ? style["tab-active"] : ''}`} href="#" onClick={()=>this.switchTab(true, false)}>
										<img src={newsletter} className={`${style["img-fluid"]} ${style["qr"]}`}/>
									</a>
								</li>
								<li className={style["nav-item"]}>
									<a className={`${style["nav-link"]} ${this.state.isTab2Active ? style["tab-active"] : ''}`} href="#" onClick={()=>this.switchTab(false, true)}>
										<img src={notification} className={`${style["img-fluid"]} ${style["qr"]}`}/>
									</a>
								</li>
							</ul>
						</div>

						
						<div className={`${style["col-lg-3"]} ${style["header-tab"]} ${this.state.isTab1Active ? style["tab-active"] : ""}`}>
							<div>
								<div>
									<p>Newsletter</p>
									<p>Receive updates on sales and offers directly in your inbox</p>
								</div>
								<form action="">
									<div className={style["form-group"]}>
										<label>Email:</label>
										<input type="email" className={style["form-control"]} required placeholder="Insert your email address"/>
									</div>

									<div className={`${style["form-check"]} ${style["form-check-inline"]} ${style["form-group"]}` }>
										<input className={style["form-check-input"]} type="checkbox" name="check" value="" />
										<label className={`${style["form-check-label"]} ${style["text-muted"]}`} htmlFor="check">Cillum pariatur sint ea dolore anim fugiat aliquip fugiat consequat sunt elit.</label>
									</div>
									<input type="submit" value="SUBSCRIBE" className={`${style["btn"]} ${style["btn-primary"]}  ${style["btn-block"]}`} />
								</form>
							</div>
						</div>
						<div className={`${style["col-lg-3"]} ${style["header-tab"]} ${this.state.isTab2Active ? style["tab-active"] : ''}`}>
							{	isNotification && 
								<div>
									<div>
										<p>Web Push Notication</p>
										<p>Be the first to know about special deals</p>
	
										<ul>
											<li>Real time first notification</li>
											<li>No need to fill or download anything</li>
											<li>Turn on notifications anytime from your browser settings</li>
										</ul>
									</div>
	
									<button className={`${style["btn"]} ${style["btn-primary"]} ${style["btn-block"]}`}>KEEP ME UPDATED</button>
								</div>
							}

							{	!isNotification && 
								<div>
									<div>
										<p>Download iOS App</p>	
										<p>Dolor labore reprehenderit ullamco duis voluptate nulla ea excepteur proident.</p>
									</div>
									<img src={qr} className={`${style["img-fluid"]} ${style["qr"]}`}/>
									<img src={appStore} className={`${style["img-fluid"]} ${style["app-store"]}`}/>
								</div>
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;