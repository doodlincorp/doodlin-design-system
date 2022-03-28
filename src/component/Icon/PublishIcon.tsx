import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface IPublishIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
  variant?: 'default' | 'put-out'
}

export const PublishIcon: React.FC<IPublishIconProps> = ({
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
      {variant === 'default' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            id="icon__fill"
            d="M4 2C2.89543 2 2 2.89543 2 4V18C2 19.1046 2.89543 20 4 20H8V18H4L4 6H20V18H16V20H20C21.1046 20 22 19.1046 22 18V4C22 2.89543 21.1046 2 20 2H4ZM12 9.58578L16.7071 14.2929L15.2929 15.7071L13 13.4142V22H11V13.4142L8.70712 15.7071L7.29291 14.2929L12 9.58578Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === 'put-out' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            id="icon__fill"
            d="M4 2C2.89543 2 2 2.89543 2 4V14C2 15.1046 2.89543 16 4 16H7V14H4L4 6H20V14H17V16H20C21.1046 16 22 15.1046 22 14V4C22 2.89543 21.1046 2 20 2H4ZM12 23L7.29291 18.2929L8.70712 16.8787L11 19.1716L11 10.5858L13 10.5858L13 19.1716L15.2929 16.8787L16.7071 18.2929L12 23Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  )
}
