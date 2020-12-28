import React from 'react';
import Spinner from '../component/Spinner';
import '../reset.scss';

export default {
  title: 'Component/Spinner',
  component: Spinner,
};

export const Default = () => (
  <div style={{ padding: 10 }}>
    <Spinner></Spinner>
  </div>
);

export const Size = () => (
  <div style={{ padding: 10 }}>
    <Spinner size='xxs'></Spinner>
    <Spinner size='xs'></Spinner>
    <Spinner size='sm'></Spinner>
    <Spinner size='md'></Spinner>
    <Spinner size='lg'></Spinner>
    <Spinner size='xl'></Spinner>
    <Spinner size='xxl'></Spinner>
    <Spinner size='xxxl'></Spinner>
  </div>
);
