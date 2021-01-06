import React from 'react';
import Spinner from '../component/Spinner';
import '../reset.scss';

export default {
  title: 'Component/Spinner',
  component: Spinner,
};

export const Default = () => (
  <div style={{ padding: 10 }}>
    <Spinner />
  </div>
);

export const Size = () => (
  <div style={{ padding: 10 }}>
    <Spinner size="xxs" />
    <Spinner size="xs" />
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
    <Spinner size="xl" />
    <Spinner size="xxl" />
    <Spinner size="xxxl" />
  </div>
);
