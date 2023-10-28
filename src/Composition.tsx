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
		backgroundColor: '#000000',
		width: '100%',
		height: '100%',
	},
	white: {
		backgroundColor: '#FFFFFF',
	},
	red: {
		backgroundColor: '#99292D',
	},
	green: {
		backgroundColor: '#31905F',
	},
};

export const MyComposition = () => {
	return (
		<div style={styles.container}>
			<AnimatedHorizontalPosition
				in={{
					startTime: 0,
					endTime: 60,
				}}
				out={{
					startTime: -60,
					endTime: 0,
				}}
				from={-100}
				to={0}
			>
				<div style={styles.black} />
			</AnimatedHorizontalPosition>
			<div style={styles.white} />
			<div style={styles.red} />
			<div style={styles.white} />
			<div style={styles.green} />
		</div>
	);
};
