import React from 'react';

const ShowList = props => {
    return (
        <div id="colorlib-services">
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center animate-box intro-heading">
						<h2>Shows</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
						<div className="show-listing">
							Saturday, October 27th
							<br /> @ Live Wire Lounge
							<br /> Chicago, IL
						</div>

					</div>
				</div>
			</div>
		</div>
    );
}

export default ShowList;