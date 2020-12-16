import React from 'react';
import Spinner from '../components/Spinner/Spinner';
import '../reset.scss';

export default {
  title: 'Component/Spinner',
  component: Spinner,
};

export const Default = () => (
  <div style={{ padding: 10 }}>
    <Spinner>NULL</Spinner>
    <Spinner></Spinner>
  </div>
);

export const Size = () => (
  <div style={{ padding: 10 }}>
    <Spinner>NULL</Spinner>
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
