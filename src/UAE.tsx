import {
	AnimatedHorizontalPosition,
	AnimatedVerticalPosition,
} from '@riunge/junior-director-pro';

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		backgroundColor: '#f9c30f',
		width: 1920,
		height: 1080,
		display: 'grid',
		gridTemplateColumns: '1fr 3fr',
	},
	threeContainer: {
		display: 'grid',
		gridTemplateRows: '1fr 1fr 1fr',
	},
	red: {
		backgroundColor: '#EF3340',
		width: '100%',
		height: '100%',
	},
	green: {
		backgroundColor: '#009739',
		width: '100%',
		height: '100%',
	},
	white: {
		backgroundColor: '#ffffff',
		width: '100%',
		height: '100%',
	},
	black: {
		backgroundColor: '#000000',
		width: '100%',
		height: '100%',
	},
};

export const UAE = () => {
	return (
		<div style={styles.container}>
			<AnimatedVerticalPosition
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
				<div style={styles.red} />
			</AnimatedVerticalPosition>
			<div style={styles.threeContainer}>
				<AnimatedVerticalPosition
					in={{
						startTime: 3,
						duration: 5,
					}}
					out={{
						startTime: -25,
						duration: 5,
					}}
					from={-100}
					to={0}
				>
					<div style={styles.green} />
				</AnimatedVerticalPosition>
				<AnimatedHorizontalPosition
					in={{
						startTime: 6,
						duration: 5,
					}}
					out={{
						startTime: -25,
						duration: 5,
					}}
					from={100}
					to={0}
				>
					<div style={styles.white} />
				</AnimatedHorizontalPosition>
				<AnimatedVerticalPosition
					in={{
						startTime: 9,
						duration: 5,
					}}
					out={{
						startTime: -25,
						duration: 5,
					}}
					from={100}
					to={0}
				>
					<div style={styles.black} />
				</AnimatedVerticalPosition>
			</div>
		</div>
	);
};
