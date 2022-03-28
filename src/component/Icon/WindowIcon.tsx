import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

import { colorMap } from '.'

export interface IWindowIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
  variant?: 'maximize' | 'minimize' | 'close'
}

export const WindowIcon: React.FC<IWindowIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = 'maximize',
}) => {
  return (
    <i
      className={cn('dds-icon', className, { flip })}
      style={{
        width: size,
        minWidth: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {variant === 'maximize' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 8H5L5 18H19V8ZM3 8V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V8V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V8Z"
            fill={color || colorMap.gray_8}
          />
        </svg>
      )}

      {variant === 'minimize' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M5 11H19V13H5V11Z"
            fill={color || colorMap.gray_8}
          />
        </svg>
      )}

      {variant === 'close' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.8 4H19.2C20.1927 4 21 4.79733 21 5.77778V18.2222C21 19.2027 20.1927 20 19.2 20H4.8C3.8073 20 3 19.2027 3 18.2222V5.77778C3 4.79733 3.8073 4 4.8 4ZM4.8 7.55556V18.2222H19.2009L19.2 7.55556H4.8ZM14.0049 9.59377L15.2637 10.8525L13.2224 12.8938L15.2637 14.935L14.0049 16.1938L11.9637 14.1525L9.92245 16.1938L8.6637 14.935L10.7049 12.8938L8.6637 10.8525L9.92245 9.59377L11.9637 11.635L14.0049 9.59377Z"
            fill={color || colorMap.gray_8}
          />
        </svg>
      )}
    </i>
  )
}
