import React from 'react';
import Button from '../components/Button/Button';
import '../reset.scss';

export default {
  title: 'Component/Button',
  component: Button,
};

export const Default = () => (
  <div>
    <Button>NULL</Button>
    <Button>기본 버튼</Button>
  </div>
);

export const Size = () => (
  <div style={{ padding: 10 }}>
    <Button>NULL</Button>
    <Button size='xxs'>2XSMALL</Button>
    <Button size='xs'>XSMALL</Button>
    <Button size='sm'>SMALL</Button>
    <Button size='md'>MEDIUM</Button>
    <Button size='lg'>LARGE</Button>
    <Button size='xl'>XLARGE</Button>
    <Button size='xxl'>2XLARGE</Button>
    <Button size='xxxl'>3XLARGE</Button>
  </div>
);

export const Ghost = () => (
  <div style={{ padding: 10 }}>
    <Button>NULL</Button>
    <Button size='xxs' variant='ghost'>
      2XSMALL
    </Button>
    <Button size='xs' variant='ghost'>
      XSMALL
    </Button>
    <Button size='sm' variant='ghost'>
      SMALL
    </Button>
    <Button size='md' variant='ghost'>
      MEDIUM
    </Button>
    <Button size='lg' variant='ghost'>
      LARGE
    </Button>
    <Button size='xl' variant='ghost'>
      XLARGE
    </Button>
    <Button size='xxl' variant='ghost'>
      2XLARGE
    </Button>
    <Button size='xxxl' variant='ghost'>
      3XLARGE
    </Button>
  </div>
);

export const Text = () => (
  <div style={{ padding: 10 }}>
    <Button>NULL</Button>
    <Button size='xxs' variant='text'>
      2XSMALL
    </Button>
    <Button size='xs' variant='text'>
      XSMALL
    </Button>
    <Button size='sm' variant='text'>
      SMALL
    </Button>
    <Button size='md' variant='text'>
      MEDIUM
    </Button>
    <Button size='lg' variant='text'>
      LARGE
    </Button>
    <Button size='xl' variant='text'>
      XLARGE
    </Button>
    <Button size='xxl' variant='text'>
      2XLARGE
    </Button>
    <Button size='xxxl' variant='text'>
      3XLARGE
    </Button>
  </div>
);

// Q. div 바로 다음 오는 태그는 스타일이 무시됨. 왜지?
export const Disabled = () => (
  <div style={{ padding: 10 }}>
    <Button>NULL</Button>
    <Button size='md' disabled>
      비활성화
    </Button>
    <Button size='md' variant='ghost' disabled>
      비활성화
    </Button>
    <Button size='md' variant='text' disabled>
      비활성화
    </Button>
  </div>
);

export const FullWidth = () => (
  <div style={{ padding: 10 }}>
    <Button>NULL</Button>
    <Button size='xxs' fullWidth>
      2XSMALL
    </Button>
    <Button size='xs' fullWidth>
      XSMALL
    </Button>
    <Button size='sm' fullWidth>
      SMALL
    </Button>
    <Button size='md' fullWidth>
      MEDIUM
    </Button>
    <Button size='lg' fullWidth>
      LARGE
    </Button>
    <Button size='xl' fullWidth>
      XLARGE
    </Button>
    <Button size='xxl' fullWidth>
      2XLARGE
    </Button>
    <Button size='xxxl' fullWidth>
      3XLARGE
    </Button>
  </div>
);

export const WithIcon = () => (
  <div style={{ padding: 10 }}>
    <Button>NULL</Button>
    <Button size='md'>버튼</Button>
    <Button size='md' variant='ghost'>
      버튼
    </Button>
    <Button size='md' variant='text'>
      버튼
    </Button>
  </div>
);
