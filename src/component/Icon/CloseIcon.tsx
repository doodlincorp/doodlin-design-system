import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface ICloseIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
  variant?: 'default' | 'circle'
}

export const CloseIcon: React.FC<ICloseIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = 'default',
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
      {variant === 'default' ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 13.4142L18.2929 19.7071L19.7071 18.2929L13.4142 12L19.7071 5.70712L18.2929 4.29291L12 10.5858L5.70712 4.29291L4.29291 5.70712L10.5858 12L4.29291 18.2929L5.70712 19.7071L12 13.4142Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill={color || EColorMap.gray_6}
          />
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5858 12L7.29291 15.2929L8.70712 16.7071L12 13.4142L15.2929 16.7071L16.7071 15.2929L13.4142 12L16.7071 8.70712L15.2929 7.29291L12 10.5858L8.70712 7.29291L7.29291 8.70712L10.5858 12Z"
            fill={color || EColorMap.gray_7}
          />
        </svg>
      )}
    </i>
  )
}
