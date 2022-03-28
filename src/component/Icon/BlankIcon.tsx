import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface IBlankIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
}

export const BlankIcon: React.FC<IBlankIconProps> = ({
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 4H20V6H4V4ZM18 10H6V14H18V10ZM6 8C4.89543 8 4 8.89543 4 10V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V10C20 8.89543 19.1046 8 18 8H6ZM20 18H4V20H20V18Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  )
}
