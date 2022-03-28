import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface IPhoneIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
}

export const PhoneIcon: React.FC<IPhoneIconProps> = ({
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
          d="M20.487 17.14L16.422 13.444C16.023 13.081 15.407 13.1 15.031 13.487L12.638 15.948C12.062 15.838 10.904 15.477 9.712 14.288C8.52 13.095 8.159 11.934 8.052 11.362L10.511 8.968C10.899 8.592 10.917 7.977 10.554 7.577L6.859 3.513C6.496 3.112 5.879 3.074 5.468 3.426L3.298 5.287C3.125 5.461 3.022 5.691 3.008 5.936C2.993 6.186 2.707 12.108 7.299 16.702C11.305 20.707 16.323 21 17.705 21C17.907 21 18.031 20.994 18.064 20.992C18.309 20.978 18.539 20.875 18.712 20.701L20.572 18.53C20.926 18.119 20.887 17.503 20.487 17.14Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  )
}
