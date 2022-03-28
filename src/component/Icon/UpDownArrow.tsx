import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface IUpDownArrowIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
}

export const UpDownArrowIcon: React.FC<IUpDownArrowIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
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
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="icon__fill"
          className="first-arrow"
          d="M6 9L12 3L18 9H6Z"
          fill={color || EColorMap.gray_8}
        />
        <path
          id="icon__fill"
          className="second-arrow"
          d="M18 15L12 21L6 15L18 15Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  )
}
