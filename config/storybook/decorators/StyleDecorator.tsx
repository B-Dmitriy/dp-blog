import '../../../src/07-shared/assets/styles/themes/dark.scss';
import '../../../src/07-shared/assets/styles/themes/light.scss';
import '../../../src/07-shared/assets/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: () => Story) => <div className="app light">{story()}</div>;
