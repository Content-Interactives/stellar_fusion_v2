import React, { useState, useEffect, useRef } from 'react';
import { Container } from './ui/reused-ui/Container';
import { GlowButton } from './ui/reused-ui/GlowButton';

const StellarFusion = () => {
	const [showButton, setShowButton] = useState(true);
	const [backgroundColor, setBackgroundColor] = useState('#E8EDF5');

	const handleExplore = () => {
		setShowButton(false);
		setTimeout(() => {
			setBackgroundColor('#000000');
		}, 300); // Wait for button fade before changing background
	};

	const handleReset = () => {
		setShowButton(true);
		setBackgroundColor('#E8EDF5');
	};

	return (
		<Container 
			text="Stellar Fusion"
			maxWidth="max-w-[532px]"
			className="mx-auto"
			titleColor="#008545"
			borderColor="#66B68F"
			showResetButton={true}
			onReset={handleReset}
		>
			<div 
				className="w-[500px] h-[500px] rounded-md relative transition-colors duration-[2000ms] ease-in-out" 
				style={{ backgroundColor }}
			>
				{showButton && (
					<div 
						className="absolute bottom-2 right-8"
					>
						<GlowButton 
							onClick={handleExplore}
							bgColor="#E8EDF5"
						>
							Explore
						</GlowButton>
					</div>
				)}
			</div>
		</Container>
	)
};


export default StellarFusion;