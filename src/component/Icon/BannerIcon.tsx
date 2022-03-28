import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface IBannerIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
}

export const BannerIcon: React.FC<IBannerIconProps> = ({
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
          d="M20 7H4V17H20V7ZM4 5C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5H4ZM6 9H18V11H6V9ZM16 13H8V15H16V13Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  )
}
