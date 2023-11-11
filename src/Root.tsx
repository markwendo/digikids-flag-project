import { Video } from '@riunge/junior-director-pro';

import { Japan } from './Japan';
import { Kenya } from './Kenya';
import { UAE } from './UAE';

export const RemotionRoot: React.FC = () => (
	<>
		<Video
			name="flag-of-kenya"
			videoSource={Kenya}
			durationInMinutes={1}
			durationInSeconds={0}
			format="horizontal"
		/>
		<Video
			name="flag-of-uae"
			videoSource={UAE}
			durationInMinutes={1}
			durationInSeconds={0}
			format="horizontal"
		/>
		<Video
			name="flag-of-japan"
			videoSource={Japan}
			durationInMinutes={1}
			durationInSeconds={0}
			format="horizontal"
		/>
	</>
);
