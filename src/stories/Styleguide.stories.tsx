import React from 'react';
import Text from '../component/Text';
import '../index.scss';
import '../reset.scss';

export default {
  title: 'Introduction/Styleguide',
  component: Text,
};

export const Typography = () => (
  <div style={{ padding: 20 }}>
    <div style={{ marginBottom: 40 }}>
      <Text size='tit-md' block nonKorean>
        Title
      </Text>
      <Text size='tit-xxxl' block>
        타이틀 - 48pt
      </Text>
      <Text size='tit-xxl' block>
        타이틀 - 36pt
      </Text>
      <Text size='tit-xl' block>
        타이틀 - 24pt
      </Text>
      <Text size='tit-lg' block>
        타이틀 - 21pt
      </Text>
      <Text size='tit-md' block>
        타이틀 - 18pt
      </Text>
    </div>

    <div style={{ marginBottom: 40 }}>
      <Text size='tit-md' block nonKorean>
        UI, Button
      </Text>
      <div style={{ marginTop: 10 }}>
        <Text size='ui-lg' block>
          UI, 버튼 - 18pt
        </Text>
        <Text size='ui-md' block>
          UI, 버튼 - 16pt
        </Text>
        <Text size='ui-sm' block>
          UI, 버튼 - 14pt
        </Text>
        <Text size='ui-xs' block>
          UI, 버튼 - 12pt
        </Text>
      </div>
    </div>

    <div>
      <Text size='tit-md' block nonKorean>
        Description
      </Text>
      <Text size='desc-lg' block>
        <div
          style={{
            maxWidth: 500,
            wordBreak: 'break-word',
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <span>
            소학교 내 하나의 마리아 있습니다. 무덤 가득 별 듯합니다. 계집애들의
            말 딴은 언덕 오면 듯합니다. 애기 피어나듯이 별들을 시인의 듯합니다.
            - 18pt
          </span>
        </div>
      </Text>
      <Text size='desc-md' block>
        <div
          style={{ maxWidth: 500, wordBreak: 'break-word', marginBottom: 10 }}
        >
          <span>
            소학교 내 하나의 마리아 있습니다. 무덤 가득 별 듯합니다. 계집애들의
            말 딴은 언덕 오면 듯합니다. 애기 피어나듯이 별들을 시인의 듯합니다.
            - 16pt
          </span>
        </div>
      </Text>
      <Text size='desc-sm' block>
        <div
          style={{ maxWidth: 500, wordBreak: 'break-word', marginBottom: 10 }}
        >
          <span>
            소학교 내 하나의 마리아 있습니다. 무덤 가득 별 듯합니다. 계집애들의
            말 딴은 언덕 오면 듯합니다. 애기 피어나듯이 별들을 시인의 듯합니다.
            - 14pt
          </span>
        </div>
      </Text>
      <Text size='desc-xs' block>
        <div
          style={{ maxWidth: 500, wordBreak: 'break-word', marginBottom: 10 }}
        >
          <span>
            소학교 내 하나의 마리아 있습니다. 무덤 가득 별 듯합니다. 계집애들의
            말 딴은 언덕 오면 듯합니다. 애기 피어나듯이 별들을 시인의 듯합니다.
            - 12pt
          </span>
        </div>
      </Text>
    </div>
  </div>
);

export const Color = () => {
  const Palette = ({ name, color }: any) => (
    <div
      style={{
        display: 'inline-block',
        width: 150,
        height: 190,
        marginTop: 8,
        marginRight: 10,
        textAlign: 'center',
        borderRadius: 4,
        backgroundColor: '#fff',
        border: '1px solid #ced4da',
        overflow: 'hidden',
        fontSize: 12,
      }}
    >
      <div
        style={{
          width: '100%',
          height: 130,
          backgroundColor: color,
          marginBottom: 6,
        }}
      />

      <Text block size='ui-md' nonKorean>
        <span style={{ fontWeight: 500 }}>{name}</span>
      </Text>
      <Text block size='ui-xs' nonKorean>
        <span style={{ fontWeight: 300 }}>{color}</span>
      </Text>
    </div>
  );
  return (
    <div style={{ padding: 20 }}>
      <Text size='tit-md' block nonKorean>
        Yellow
      </Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name='Yellow0' color='#fff9db' />
        <Palette name='Yellow1' color='#fff3bf' />
        <Palette name='Yellow2' color='#ffec99' />
        <Palette name='Yellow3' color='#ffe066' />
        <Palette name='Yellow4' color='#ffd43b' />
        <Palette name='Yellow5' color='#fcc419' />
        <Palette name='Yellow6' color='#fab005' />
        <Palette name='Yellow7' color='#f59f00' />
        <Palette name='Yellow8' color='#f08c00' />
        <Palette name='Yellow9' color='#e67700' />
      </div>

      <Text size='tit-md' block nonKorean>
        Warm Gray
      </Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name='Gray0' color='#f8f8f8' />
        <Palette name='Gray1' color='#f1f1f1' />
        <Palette name='Gray2' color='#e9e9e9' />
        <Palette name='Gray3' color='#e0e0e0' />
        <Palette name='Gray4' color='#d0d0d0' />
        <Palette name='Gray5' color='#b0b0b0' />
        <Palette name='Gray6' color='#8b8b8b' />
        <Palette name='Gray7' color='#555555' />
        <Palette name='Gray8' color='#333333' />
        <Palette name='Gray9' color='#111111' />
      </div>

      <Text size='tit-md' block nonKorean>
        Cool Gray
      </Text>
      <div style={{ marginBottom: 30 }}>
        <Palette name='CGray0' color='#f8f9fa' />
        <Palette name='CGray1' color='#f1f3f5' />
        <Palette name='CGray2' color='#e9ecef' />
        <Palette name='CGray3' color='#dee2e6' />
        <Palette name='CGray4' color='#ced4da' />
        <Palette name='CGray5' color='#adb5bd' />
        <Palette name='CGray6' color='#868e96' />
        <Palette name='CGray7' color='#495057' />
        <Palette name='CGray8' color='#343a40' />
        <Palette name='CGray9' color='#212529' />
      </div>
    </div>
  );
};

export const Icon = () => <div>【ツ】</div>;

export const Spacing = () => <div>【ツ】</div>;
