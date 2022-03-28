import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface IMenuIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
  variant?: 'default' | 'alt'
}

export const MenuIcon: React.FC<IMenuIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = 'default',
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
      {variant === 'default' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M4 11H20V13H4V11ZM4 6H20V8H4V6ZM4 18H13.5V16H4V18Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === 'alt' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 4H22V6H2V4ZM2 18H22V20H2V18ZM22 11H2V13H22V11Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  )
}
