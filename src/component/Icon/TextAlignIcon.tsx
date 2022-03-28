import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface ITextAlignIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
  variant?: 'left' | 'center' | 'right' | 'justify'
}

export const TextAlignIcon: React.FC<ITextAlignIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = 'left',
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
      {variant === 'left' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 19H20V21H4V19ZM4 15H15V17H4V15ZM4 11H20V13H4V11ZM4 3H20V5H4V3ZM4 7H15V9H4V7Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === 'center' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.3335 19H20.3335V21H4.3335V19ZM7.3335 15H17.3335V17H7.3335V15ZM4.3335 11H20.3335V13H4.3335V11ZM4.3335 3H20.3335V5H4.3335V3ZM7.3335 7H17.3335V9H7.3335V7Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === 'right' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.6665 19H19.6665V21H3.6665V19ZM8.6665 15H19.6665V17H8.6665V15ZM3.6665 11H19.6665V13H3.6665V11ZM3.6665 3H19.6665V5H3.6665V3ZM8.6665 7H19.6665V9H8.6665V7Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === 'justify' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 7H20V9H4V7ZM4 3H20V5H4V3ZM4 11H20V13H4V11ZM4 15H20V17H4V15ZM6 19H18V21H6V19Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  )
}
