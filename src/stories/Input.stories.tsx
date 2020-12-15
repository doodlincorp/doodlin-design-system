import React from 'react';
import Input from '../components/Input/Input';
import '../reset.scss';

export default {
  title: 'Component/Input',
  component: Input,
};

export const Default = () => (
  <div style={{ padding: 10, maxWidth: 500 }}>
    <Input placeholder='내용을 입력하세요' />
    <Input placeholder='내용을 입력하세요' />
  </div>
);

export const Size = () => (
  <div style={{ padding: 10, maxWidth: 500 }}>
    <Input size='xxs' placeholder='내용을 입력하세요' />
    <Input size='xxs' placeholder='내용을 입력하세요' />
    <Input size='sm' placeholder='내용을 입력하세요' />
    <Input size='md' placeholder='내용을 입력하세요' />
    <Input size='lg' placeholder='내용을 입력하세요' />
    <Input size='xxxl' placeholder='내용을 입력하세요' />
  </div>
);

export const Disabled = () => (
  <div style={{ padding: 10, maxWidth: 500 }}>
    <Input size='xxs' placeholder='비활성화 되었습니다' disabled />
    <Input size='xxs' placeholder='비활성화 되었습니다' disabled />
    <Input size='sm' placeholder='비활성화 되었습니다' disabled />
    <Input size='md' placeholder='비활성화 되었습니다' disabled />
    <Input size='lg' placeholder='비활성화 되었습니다' disabled />
    <Input size='xxxl' placeholder='비활성화 되었습니다' disabled />
  </div>
);
