import { configure } from '@storybook/angular';

// automatically import all files ending in *.stories.ts
function loadStories() {
  require('../stories/index.ts');
}

configure(loadStories, module);
