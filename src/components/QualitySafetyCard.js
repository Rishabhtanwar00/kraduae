import React from 'react';

const QualitySafetyCard = ({ number, color, text, title }) => {
	return (
		<div className='commitments-item' style={{ '--color': `${color}` }}>
			<div className='commitments-item-numberWrap'>
				<div className='commitments-item-number'>{number}</div>
				<div className='commitments-item-coverWrap'>
					<div className='commitments-item-numberCover'></div>
				</div>
			</div>
			<div className='commitments-item-content'>
				<div className='commitments-item-header'>{title}</div>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default QualitySafetyCard;
