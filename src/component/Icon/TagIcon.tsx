import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface ITagIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
  variant?: 'border' | 'solid'
}

export const TagIcon: React.FC<ITagIconProps> = ({
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
      {variant === 'border' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 3C13.266 3 13.52 3.105 13.707 3.293L21.707 11.293C22.098 11.684 22.098 12.316 21.707 12.707L12.707 21.707C12.512 21.902 12.256 22 12 22C11.744 22 11.488 21.902 11.293 21.707L3.293 13.707C3.105 13.52 3 13.266 3 13V4C3 3.447 3.447 3 4 3H13ZM5 12.586L12 19.586L19.586 12L12.586 5H5V12.586ZM10.001 8.495C10.001 9.32619 9.32719 10 8.496 10C7.66481 10 6.991 9.32619 6.991 8.495C6.991 7.66381 7.66481 6.99 8.496 6.99C9.32719 6.99 10.001 7.66381 10.001 8.495Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
      {variant === 'solid' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M12.586 2.586C12.211 2.211 11.702 2 11.172 2H4C2.896 2 2 2.896 2 4V11.172C2 11.702 2.211 12.211 2.586 12.586L10.586 20.586C11.367 21.367 12.633 21.367 13.414 20.586L20.586 13.414C21.367 12.633 21.367 11.367 20.586 10.586L12.586 2.586ZM7 9C5.896 9 5 8.104 5 7C5 5.896 5.896 5 7 5C8.104 5 9 5.896 9 7C9 8.104 8.104 9 7 9Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  )
}
