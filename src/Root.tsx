import { Video } from '@riunge/junior-director-pro';

import { MyComposition } from './Composition';

export const RemotionRoot: React.FC = () => (
	<Video
		name="Flag"
		videoSource={MyComposition}
		durationInMinutes={5}
		durationInSeconds={0}
		format="horizontal"
	/>
);
