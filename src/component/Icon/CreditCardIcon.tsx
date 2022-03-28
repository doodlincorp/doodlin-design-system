import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface ICreditCardIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
}

export const CreditCardIcon: React.FC<ICreditCardIconProps> = ({
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 4H20C21.103 4 22 4.897 22 6V18C22 19.103 21.103 20 20 20H4C2.897 20 2 19.103 2 18V6C2 4.897 2.897 4 4 4ZM20 6H4V8H20V6ZM4 12V18H20.002L20.001 12H4ZM12 14H6V16H12V14Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  )
}
