import React, { useState, useEffect, useRef } from 'react';
import { Container } from './ui/reused-ui/Container';
import { GlowButton } from './ui/reused-ui/GlowButton';

const StellarFusion = () => {
	const [showButton, setShowButton] = useState(true);
	const [backgroundColor, setBackgroundColor] = useState('#E8EDF5');
	const [stars, setStars] = useState([]);
	const [showStars, setShowStars] = useState(false);

	const handleExplore = () => {
		setShowButton(false);
		setTimeout(() => {
			setBackgroundColor('#000000');
		}, 50); // Wait for button fade before changing background
	};

	const handleReset = () => {
		setShowButton(true);
		setBackgroundColor('#E8EDF5');
		setShowStars(false);
		setStars([]);
	};

	useEffect(() => {
		if (showStars) {
			const newStars = Array.from({ length: 150 }, () => ({
				id: Math.random(),
				top: `${Math.random() * 100}%`,
				left: `${Math.random() * 100}%`,
				size: `${Math.random() * 1.5 + 0.5}px`,
				animationDelay: `${Math.random() * 1.5}s`,
			}));
			setStars(newStars);
		}
	}, [showStars]);

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
				onTransitionEnd={() => {
					// After background turns black, wait 500ms then show stars
					if (backgroundColor === '#000000') {
						setTimeout(() => {
							setShowStars(true);
						}, 500);
					}
				}}
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
				{showStars && stars.map(star => (
					<div
						key={star.id}
						className="absolute bg-white rounded-full"
						style={{
							top: star.top,
							left: star.left,
							width: star.size,
							height: star.size,
							animation: `fadeIn 1s ease-out forwards`,
							animationDelay: star.animationDelay,
							opacity: 0,
						}}
					/>
				))}
			</div>
		</Container>
	)
};

export default StellarFusion;