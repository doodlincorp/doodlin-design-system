import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface IMegaphoneIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
}

export const MegaphoneIcon: React.FC<IMegaphoneIconProps> = ({
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
          d="M20.664 3.478L8 8V15L8.748 15.267L7.621 17.521C7.49264 17.7772 7.42088 18.0581 7.41059 18.3445C7.4003 18.6309 7.45171 18.9162 7.56135 19.181C7.67099 19.4458 7.83628 19.6839 8.04603 19.8793C8.25578 20.0746 8.50507 20.2225 8.777 20.313L12.861 21.674C13.3179 21.8229 13.8129 21.8037 14.2568 21.6198C14.7007 21.4359 15.0643 21.0994 15.282 20.671L16.585 18.065L20.664 19.522C20.8148 19.5758 20.9764 19.5926 21.1351 19.571C21.2937 19.5493 21.4449 19.4899 21.5758 19.3977C21.7068 19.3055 21.8136 19.1832 21.8875 19.041C21.9613 18.8989 21.9999 18.7411 22 18.581V4.419C21.9999 4.25885 21.9613 4.10108 21.8875 3.95896C21.8136 3.81684 21.7068 3.69452 21.5758 3.6023C21.4449 3.51008 21.2937 3.45066 21.1351 3.42902C20.9764 3.40739 20.8148 3.42419 20.664 3.478ZM13.493 19.777L9.41 18.416L10.645 15.945L14.687 17.389L13.493 19.777ZM4 15H6V8H4C2.897 8 2 8.897 2 10V13C2 14.103 2.897 15 4 15Z"
          fill={color || EColorMap.gray_8}
        />
      </svg>
    </i>
  )
}
