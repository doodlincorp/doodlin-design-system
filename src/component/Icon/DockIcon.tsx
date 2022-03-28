import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface IDockIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
}

export const DockIcon: React.FC<IDockIconProps> = ({
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
          d="M21 19V5C21 3.897 20.103 3 19 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19ZM10 19V5H19L19.002 19H10Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  )
}
