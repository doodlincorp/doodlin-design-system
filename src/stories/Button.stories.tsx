import React from 'react';
import Button from '../components/Button/Button';
import '../reset.scss';

export default {
  title: 'Component/Button',
  component: Button,
};

export const Size = () => (
  <>
    <Button size='xxs'>2XSMALL</Button>
    <Button size='xs'>XSMALL</Button>
    <Button size='sm'>SMALL</Button>
    <Button size='md'>MEDIUM</Button>
    <Button size='lg'>LARGE</Button>
    <Button size='xl'>XLARGE</Button>
    <Button size='xxl'>2XLARGE</Button>
    <Button size='xxxl'>3XLARGE</Button>
  </>
);

export const Ghost = () => (
  <>
    <Button>NULL</Button>
    <Button size='xxs' type='ghost'>
      2XSMALL
    </Button>
    <Button size='xs' type='ghost'>
      XSMALL
    </Button>
    <Button size='sm' type='ghost'>
      SMALL
    </Button>
    <Button size='md' type='ghost'>
      MEDIUM
    </Button>
    <Button size='lg' type='ghost'>
      LARGE
    </Button>
    <Button size='xl' type='ghost'>
      XLARGE
    </Button>
    <Button size='xxl' type='ghost'>
      2XLARGE
    </Button>
    <Button size='xxxl' type='ghost'>
      3XLARGE
    </Button>
  </>
);

export const Text = () => (
  <>
    <Button>NULL</Button>
    <Button size='xxs' type='text'>
      2XSMALL
    </Button>
    <Button size='xs' type='text'>
      XSMALL
    </Button>
    <Button size='sm' type='text'>
      SMALL
    </Button>
    <Button size='md' type='text'>
      MEDIUM
    </Button>
    <Button size='lg' type='text'>
      LARGE
    </Button>
    <Button size='xl' type='text'>
      XLARGE
    </Button>
    <Button size='xxl' type='text'>
      2XLARGE
    </Button>
    <Button size='xxxl' type='text'>
      3XLARGE
    </Button>
  </>
);

export const Disabled = () => <Button>파랑</Button>;
