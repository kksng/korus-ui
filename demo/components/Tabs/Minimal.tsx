import * as React from 'react';
import * as L from '../../../leda';
import { StoryProps } from '../../types';

export const Minimal = (storyProps: StoryProps) => {
  return (
    <L.Div>
      <L.Tabs>
        <L.Tab title="tab 1" tabKey={0}>
          <L.Div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Non sodales neque sodales ut etiam sit. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Morbi blandit cursus risus at.
            Accumsan sit amet nulla facilisi morbi tempus iaculis. Feugiat nibh sed pulvinar proin gravida hendrerit. Nulla facilisi etiam dignissim diam
            quis enim lobortis. Leo integer malesuada nunc vel risus commodo viverra maecenas. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames.
          </L.Div>
        </L.Tab>
        <L.Tab title="tab 2" tabKey={1}>
          <L.Div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Non sodales neque sodales ut etiam sit. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Morbi blandit cursus risus at.
          </L.Div>
        </L.Tab>
      </L.Tabs>
    </L.Div>
  );
};
