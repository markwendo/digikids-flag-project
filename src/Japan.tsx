import { AnimatedOpacity } from '@riunge/junior-director-pro';

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		backgroundColor: '#f9c30f',
		position: 'relative',
		width: 1920,
		height: 1080,
	},
	white: {
		backgroundColor: '#ffffff',
		width: '100%',
		height: '100%',
	},
	red: {
		backgroundColor: '#BC002D',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: '50%',
		width: 384,
		height: 384,
	},
};

export const Japan = () => {
	return (
		<div style={styles.container}>
			<AnimatedOpacity
				in={{
					startTime: 0,
					duration: 5,
				}}
				out={{
					startTime: -25,
					duration: 5,
				}}
				from={0}
				to={1}
			>
				<div style={styles.white} />
			</AnimatedOpacity>
			<AnimatedOpacity
				in={{
					startTime: 3,
					duration: 5,
				}}
				out={{
					startTime: -25,
					duration: 5,
				}}
				from={0}
				to={1}
			>
				<div style={styles.red} />
			</AnimatedOpacity>
		</div>
	);
};
