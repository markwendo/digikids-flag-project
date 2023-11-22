import { AnimatedHorizontalPosition } from '@riunge/junior-director-pro';

const styles = {
	container: {
		backgroundColor: '#f9c30f',
		width: 1920,
		height: 1080,
		display: 'grid',
		gridTemplateRows: '6fr 1fr 6fr 1fr 6fr',
	},
	black: {
		backgroundColor: '#ADD8E6',
		width: '100%',
		height: '100%',
	},
	white: {
		backgroundColor: '#FFFFFF',
		width: '100%',
		height: '100%',
	},
	red: {
		backgroundColor: '#FF0000',
		width: '100%',
		height: '100%',
	},
	green: {
		backgroundColor: '#ADD8E6',
		width: '100%',
		height: '100%',
	},
};

export const Kenya = () => {
	return (
		<div style={styles.container}>
			<AnimatedHorizontalPosition
				in={{
					startTime: 0,
					duration: 5,
				}}
				out={{
					startTime: -25,
					duration: 5,
				}}
				from={-100}
				to={0}
			>
				<div style={styles.black} />
			</AnimatedHorizontalPosition>
			<AnimatedHorizontalPosition
				in={{
					startTime: 5,
					duration: 5,
				}}
				out={{
					startTime: -20,
					duration: 5,
				}}
				from={100}
				to={0}
			>
				<div style={styles.white} />
			</AnimatedHorizontalPosition>
			<AnimatedHorizontalPosition
				in={{
					startTime: 10,
					duration: 5,
				}}
				out={{
					startTime: -15,
					duration: 5,
				}}
				from={-100}
				to={0}
			>
				<div style={styles.red} />
			</AnimatedHorizontalPosition>
			<AnimatedHorizontalPosition
				in={{
					startTime: 15,
					duration: 5,
				}}
				out={{
					startTime: -10,
					duration: 5,
				}}
				from={100}
				to={0}
			>
				<div style={styles.white} />
			</AnimatedHorizontalPosition>
			<AnimatedHorizontalPosition
				in={{
					startTime: 20,
					duration: 5,
				}}
				out={{
					startTime: -5,
					duration: 5,
				}}
				from={-100}
				to={0}
			>
				<div style={styles.green} />
			</AnimatedHorizontalPosition>
		</div>
	);
};
