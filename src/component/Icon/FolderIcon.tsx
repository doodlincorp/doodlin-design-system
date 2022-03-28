import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface IFolderIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
  variant?: 'solid' | 'border' | 'solid-add' | 'border-add'
}

export const FolderIcon: React.FC<IFolderIconProps> = ({
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
      {variant === 'solid' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M20 5H10.414L8.707 3.293C8.52 3.105 8.265 3 8 3H4C2.897 3 2 3.897 2 5V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V7C22 5.897 21.103 5 20 5Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === 'solid-add' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M20 5H10.414L8.707 3.293C8.61426 3.2 8.50406 3.12624 8.38273 3.07596C8.2614 3.02568 8.13134 2.99986 8 3H4C2.897 3 2 3.897 2 5V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V7C22 5.897 21.103 5 20 5ZM16 14H13V17H11V14H8V12H11V9H13V12H16V14Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === 'border' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M20 5H11.414L9.707 3.293C9.61426 3.2 9.50406 3.12624 9.38273 3.07596C9.2614 3.02568 9.13134 2.99986 9 3H4C2.897 3 2 3.897 2 5V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V7C22 5.897 21.103 5 20 5ZM4 19V7H20L20.002 19H4Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}

      {variant === 'border-add' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.414 5H20C21.103 5 22 5.897 22 7V19C22 20.103 21.103 21 20 21H4C2.897 21 2 20.103 2 19V5C2 3.897 2.897 3 4 3H9C9.13134 2.99981 9.26143 3.0256 9.38276 3.07589C9.5041 3.12617 9.61429 3.19996 9.707 3.293L11.414 5ZM4 7V19H20.002L20 7H4ZM11 9H13V12H16V14H13V17H11V14H8V12H11V9Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      )}
    </i>
  )
}
