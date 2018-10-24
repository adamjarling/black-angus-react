import React from 'react';
import imgTaran from '../../images/ba-taran.jpg';
import imgDave from '../../images/ba-dave.jpg';
import imgRb from '../../images/ba-rb3.jpg';
import imgTony from '../../images/ba-tony3.jpg';
import imgAdam from '../../images/ba-adam.jpg';
import imgManager from '../../images/ba-manager.jpg';
import BandMemberSquare from './BandMemberSquare';

const Band = props => {
    return (
        <div id="colorlib-work">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8 col-md-offset-2 text-center animate-box intro-heading">
						<h2>The Band</h2>
					</div>
				</div>
				<div className="row">
					<BandMemberSquare bgImage={imgTaran} position="Vocals" label="Taran as Bon Scott" />
					<BandMemberSquare bgImage={imgRb} position="Lead Guitar" label="RB Green as Angus Young" />
					<BandMemberSquare bgImage={imgTony} position="Guitar" label="Tony Mac as Malcom Young" />
					<BandMemberSquare bgImage={imgDave} position="Drums" label="Dave Hornyak as Phil Rudd" />
					<BandMemberSquare bgImage={imgAdam} position="Bass" label="Adam Arling as Cliff Williams" />
					<BandMemberSquare bgImage={imgManager} position="Dirty Deeds, Done Dirt Cheap" label="The Manager" />
				</div>
			</div>
		</div>
    );
}

export default Band;