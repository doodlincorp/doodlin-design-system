import './reset.scss';
export { default as Button } from './component/Button';
export { default as Input } from './component/Input';
export { default as Spinner } from './component/Spinner';
export { default as Text } from './component/Text';
export { default as Textarea } from './component/Textarea';

export type TDefaultSize =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';
