import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface IArrowIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean

  variant?: 'arrow' | 'chevron' | 'chevron-alt' | 'solid'
}

export const ArrowIcon: React.FC<IArrowIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = 'chevron',
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
      {variant === 'arrow' ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M21 11H6.414L11.707 5.707L10.293 4.293L2.586 12L10.293 19.707L11.707 18.293L6.414 13H21V11Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      ) : variant === 'chevron' ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M15.0143 4L7 12L15.0143 20L17 18.0179L10.9714 12L17 5.98213L15.0143 4Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      ) : variant === 'chevron-alt' ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            id="icon__fill"
            d="M13.168 5.44531L14.8321 6.55471L11.2019 12L14.8321 17.4453L13.168 18.5547L8.79816 12L13.168 5.44531Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M14.7499 7.057C14.6817 7.019 14.6075 7 14.5333 7C14.44 7 14.3476 7.03 14.2678 7.089L8.20113 11.5891C8.07513 11.6826 8 11.8361 8 12.0001C8 12.1641 8.07513 12.3176 8.20113 12.4111L14.2678 16.9112C14.4101 17.0167 14.5963 17.0292 14.7499 16.9432C14.9039 16.8567 15 16.6862 15 16.5002L15 7.50001C15 7.31401 14.9039 7.1435 14.7499 7.057Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  )
}
