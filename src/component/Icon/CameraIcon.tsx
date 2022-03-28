import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface ICameraIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
  variant?: 'solid' | 'border'
}

export const CameraIcon: React.FC<ICameraIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = 'solid',
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
      {variant === 'solid' ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.414 5H20C21.103 5 22 5.897 22 7V18C22 19.103 21.103 20 20 20H4C2.897 20 2 19.103 2 18V7C2 5.897 2.897 5 4 5H6.586L9.293 2.293C9.48 2.105 9.734 2 10 2H14C14.266 2 14.52 2.105 14.707 2.293L17.414 5ZM7 12C7 14.71 9.29 17 12 17C14.71 17 17 14.71 17 12C17 9.29 14.71 7 12 7C9.29 7 7 9.29 7 12ZM9 12C9 10.374 10.374 9 12 9C13.626 9 15 10.374 15 12C15 13.626 13.626 15 12 15C10.374 15 9 13.626 9 12Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.414 5H20C21.103 5 22 5.897 22 7V18C22 19.103 21.103 20 20 20H4C2.897 20 2 19.103 2 18V7C2 5.897 2.897 5 4 5H6.586L9.293 2.293C9.48 2.105 9.734 2 10 2H14C14.266 2 14.52 2.105 14.707 2.293L17.414 5ZM4 7V18H20.002L20 7H17C16.734 7 16.48 6.895 16.293 6.707L13.586 4H10.414L7.707 6.707C7.52 6.895 7.266 7 7 7H4ZM8 12C8 9.832 9.832 8 12 8C14.168 8 16 9.832 16 12C16 14.168 14.168 16 12 16C9.832 16 8 14.168 8 12ZM10 12C10 13.065 10.935 14 12 14C13.065 14 14 13.065 14 12C14 10.935 13.065 10 12 10C10.935 10 10 10.935 10 12Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  )
}
