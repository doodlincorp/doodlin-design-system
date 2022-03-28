import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface IShapeIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
  variant?: 'circle' | 'triangle' | 'x'
}

export const ShapeIcon: React.FC<IShapeIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = 'circle',
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
      {variant === 'circle' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            id="icon__fill"
            d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill={color || EColorMap.thumbs_green}
          />
        </svg>
      )}
      {variant === 'triangle' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            id="icon__fill"
            d="M12.866 3.5C12.4811 2.83333 11.5189 2.83333 11.134 3.5L2.47372 18.5C2.08882 19.1667 2.56995 20 3.33975 20H20.6603C21.4301 20 21.9112 19.1667 21.5263 18.5L12.866 3.5ZM12 8L6.80385 17H17.1962L12 8Z"
            fill={color || EColorMap.gray_7}
          />
        </svg>
      )}
      {variant === 'x' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            id="icon__fill"
            d="M14.1819 12L20.4142 5.76776C20.8047 5.37724 20.8047 4.74407 20.4142 4.35355L19.7071 3.64644C19.3166 3.25591 18.6834 3.25591 18.2929 3.64644L12.0606 9.87868L5.8284 3.64645C5.43787 3.25593 4.80471 3.25593 4.41418 3.64645L3.70708 4.35356C3.31655 4.74408 3.31655 5.37725 3.70708 5.76777L9.9393 12L3.70708 18.2322C3.31655 18.6228 3.31655 19.2559 3.70708 19.6464L4.41418 20.3535C4.80471 20.7441 5.43787 20.7441 5.8284 20.3535L12.0606 14.1213L18.2929 20.3536C18.6834 20.7441 19.3166 20.7441 19.7071 20.3536L20.4142 19.6465C20.8047 19.2559 20.8047 18.6228 20.4142 18.2322L14.1819 12Z"
            fill={color || EColorMap.red_6}
          />
        </svg>
      )}
    </i>
  )
}
