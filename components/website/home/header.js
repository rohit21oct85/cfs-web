// import { faBolt } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'

export default function Header() {
	
	return (
		<>
		<Head>
			<title>Crazy For Study</title>
			<link rel="icon" href="/favicon.ico" />
			{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>  */}
			<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>{/* needed for owl carousal */}
      	</Head>
		<header>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 text-left pl-5">
						<p>Get Best Price Guarantee + 30% Extra Discount <i className="fa fa-bolt"></i></p>
					</div>
					<div className="col-md-6 text-right pr-5">
						<p>support@crazyforstudy.com +1(775) 500-0051 </p>
					</div>
				</div>
			</div>
		</header>
		</>
	)
}
