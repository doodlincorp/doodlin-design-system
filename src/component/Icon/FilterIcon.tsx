import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface IFilterIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
  variant?: 'default' | 'chevron'
}

export const FilterIcon: React.FC<IFilterIconProps> = ({
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
        width: variant === 'chevron' ? size * 2 : size,
        minWidth: variant === 'chevron' ? size * 2 : size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {variant === 'default' ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 14V20L10 22V14L3.58579 7.58579C3.21071 7.21071 3 6.70201 3 6.17157V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V6.17157C21 6.70201 20.7893 7.21071 20.4142 7.58579L14 14Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 20V14L20.4142 7.58579C20.7893 7.21071 21 6.70201 21 6.17157V4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V6.17157C3 6.70201 3.21071 7.21071 3.58579 7.58579L10 14V22L14 20ZM40.414 12L34.707 17.707L33.293 16.293L37.586 12L33.293 7.70703L34.707 6.29303L40.414 12Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  )
}
