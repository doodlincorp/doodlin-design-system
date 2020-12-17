import React from 'react';
import Button from '../components/Button/Button';
import '../reset.scss';
import { BsCheck } from 'react-icons/bs';

export default {
  title: 'Component/Button',
  component: Button,
};

export const Default = () => (
  <div style={{ padding: 10 }}>
    <Button>NULL</Button>
    <Button>기본 버튼</Button>
  </div>
);

// Problem) div 바로 다음 오는 태그는 스타일이 무시되는 것 같음.
// ㄴ> 일단 차선책으로 scss에서 Button의 first-child는 display:none으로 숨겨놓음.

export const Size = () => (
  <div style={{ padding: 10 }}>
    <Button>NULL</Button>
    <Button size='xxs'>
      <span>2XSMALL</span>
    </Button>
    <Button size='xs'>
      <span>XSMALL</span>
    </Button>
    <Button size='sm'>
      <span>SMALL</span>
    </Button>
    <Button size='md'>
      <span>MEDIUM</span>
    </Button>
    <Button size='lg'>
      <span>LARGE</span>
    </Button>
    <Button size='xl'>
      <span>XLARGE</span>
    </Button>
    <Button size='xxl'>
      <span>2XLARGE</span>
    </Button>
    <Button size='xxxl'>
      <span>3XLARGE</span>
    </Button>
  </div>
);

export const Ghost = () => (
  <div style={{ padding: 10 }}>
    <Button>NULL</Button>
    <Button size='xxs' variant='ghost'>
      <span>2XSMALL</span>
    </Button>
    <Button size='xs' variant='ghost'>
      <span>XSMALL</span>
    </Button>
    <Button size='sm' variant='ghost'>
      <span>SMALL</span>
    </Button>
    <Button size='md' variant='ghost'>
      <span>MEDIUM</span>
    </Button>
    <Button size='lg' variant='ghost'>
      <span>LARGE</span>
    </Button>
    <Button size='xl' variant='ghost'>
      <span>XLARGE</span>
    </Button>
    <Button size='xxl' variant='ghost'>
      <span>2XLARGE</span>
    </Button>
    <Button size='xxxl' variant='ghost'>
      <span>3XLARGE</span>
    </Button>
  </div>
);

export const Text = () => (
  <div style={{ padding: 10 }}>
    <Button>NULL</Button>
    <Button size='xxs' variant='text'>
      <span>2XSMALL</span>
    </Button>
    <Button size='xs' variant='text'>
      <span>XSMALL</span>
    </Button>
    <Button size='sm' variant='text'>
      <span>SMALL</span>
    </Button>
    <Button size='md' variant='text'>
      <span>MEDIUM</span>
    </Button>
    <Button size='lg' variant='text'>
      <span>LARGE</span>
    </Button>
    <Button size='xl' variant='text'>
      <span>XLARGE</span>
    </Button>
    <Button size='xxl' variant='text'>
      <span>2XLARGE</span>
    </Button>
    <Button size='xxxl' variant='text'>
      <span>3XLARGE</span>
    </Button>
  </div>
);

export const Disabled = () => (
  <div style={{ padding: 10 }}>
    <Button>NULL</Button>
    <Button disabled>
      <span>비활성화</span>
    </Button>
    <Button variant='ghost' disabled>
      <span>비활성화</span>
    </Button>
    <Button variant='text' disabled>
      <span>비활성화</span>
    </Button>
  </div>
);

export const FullWidth = () => (
  <div style={{ padding: 10 }}>
    <Button>NULL</Button>
    <Button size='xxs' fullWidth>
      <span>2XSMALL</span>
    </Button>
    <Button size='xs' fullWidth>
      <span>XSMALL</span>
    </Button>
    <Button size='sm' fullWidth>
      <span>SMALL</span>
    </Button>
    <Button size='md' fullWidth>
      <span>MEDIUM</span>
    </Button>
    <Button size='lg' fullWidth>
      <span>LARGE</span>
    </Button>
    <Button size='xl' fullWidth>
      <span>XLARGE</span>
    </Button>
    <Button size='xxl' fullWidth>
      <span>2XLARGE</span>
    </Button>
    <Button size='xxxl' fullWidth>
      <span>3XLARGE</span>
    </Button>
  </div>
);

// P) component 사이에 다른 태그 끼우니까 component 속성이 사라져버림.
export const WithIcon = () => (
  <div style={{ padding: 10 }}>
    <Button>NULL</Button>
    <Button>
      <BsCheck />
      <span>버튼</span>
    </Button>
    <Button size='xxxl' variant='ghost'>
      <span>버튼</span>
      <BsCheck />
    </Button>
    <Button variant='text'>
      <span>버튼</span>
    </Button>
    <Button>
      <BsCheck />
    </Button>
  </div>
);

export const Loading = () => (
  <div style={{ padding: 10 }}>
    <Button>NULL</Button>
    <Button size='xxs' loading='spin-sm'>
      <span>2XSMALL</span>
    </Button>
    <Button size='xs' loading='spin-sm'>
      <span>XSMALL</span>
    </Button>
    <Button size='sm' loading='spin-sm'>
      <span>SMALL</span>
    </Button>
    <Button size='md' loading='spin-md'>
      <span>MEDIUM</span>
    </Button>
    <Button size='lg' loading='spin-md'>
      <span>LARGE</span>
    </Button>
    <Button size='xl' loading='spin-md'>
      <span>XLARGE</span>
    </Button>
    <Button size='xxl' loading='spin-md'>
      <span>2XLARGE</span>
    </Button>
    <Button size='xxxl' loading='spin-lg'>
      <span>3XLARGE</span>
    </Button>
  </div>
);
