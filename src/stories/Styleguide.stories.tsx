import React from 'react';
import Text from '../introduction/Styleguide/Text/Text';
import '../reset.scss';

export default {
  title: 'Introduction/Styleguide',
  component: Text,
};

export const Typography = () => (
  <div style={{ padding: 20 }}>
    <Text>NULL</Text>
    <Text variant='tit-xxxl' block>
      <span>타이틀 - 48pt</span>
    </Text>
    <Text variant='tit-xxl' block>
      <span>타이틀 - 36pt</span>
    </Text>
    <Text variant='tit-xl' block>
      <span>타이틀 - 24pt</span>
    </Text>
    <Text variant='tit-lg' block>
      <span>타이틀 - 21pt</span>
    </Text>
    <Text variant='tit-md' block>
      <span>타이틀 - 18pt</span>
    </Text>

    <Text variant='ui-lg' block>
      <span>UI, 버튼 - 18pt</span>
    </Text>
    <Text variant='ui-md' block>
      <span>UI, 버튼 - 16pt</span>
    </Text>
    <Text variant='ui-sm' block>
      <span>UI, 버튼 - 14pt</span>
    </Text>
    <Text variant='ui-xs' block>
      <span>UI, 버튼 - 12pt</span>
    </Text>

    <Text variant='desc-lg' block>
      <div style={{ maxWidth: 500, wordBreak: 'break-word' }}>
        <span>
          소학교 내 하나의 마리아 있습니다. 무덤 가득 별 듯합니다. 계집애들의 말
          딴은 언덕 오면 듯합니다. 애기 피어나듯이 별들을 시인의 듯합니다. -
          18pt
        </span>
      </div>
    </Text>
    <Text variant='desc-md' block>
      <div style={{ maxWidth: 500, wordBreak: 'break-word' }}>
        <span>
          소학교 내 하나의 마리아 있습니다. 무덤 가득 별 듯합니다. 계집애들의 말
          딴은 언덕 오면 듯합니다. 애기 피어나듯이 별들을 시인의 듯합니다. -
          16pt
        </span>
      </div>
    </Text>
    <Text variant='desc-sm' block>
      <div style={{ maxWidth: 500, wordBreak: 'break-word' }}>
        <span>
          소학교 내 하나의 마리아 있습니다. 무덤 가득 별 듯합니다. 계집애들의 말
          딴은 언덕 오면 듯합니다. 애기 피어나듯이 별들을 시인의 듯합니다. -
          14pt
        </span>
      </div>
    </Text>
    <Text variant='desc-xs' block>
      <div style={{ maxWidth: 500, wordBreak: 'break-word' }}>
        <span>
          소학교 내 하나의 마리아 있습니다. 무덤 가득 별 듯합니다. 계집애들의 말
          딴은 언덕 오면 듯합니다. 애기 피어나듯이 별들을 시인의 듯합니다. -
          12pt
        </span>
      </div>
    </Text>
  </div>
);

export const Color = () => <div>【ツ】</div>;

export const Icon = () => <div>【ツ】</div>;

export const Spacing = () => <div>【ツ】</div>;
