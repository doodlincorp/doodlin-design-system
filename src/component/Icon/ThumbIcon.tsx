import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface IThumbIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
  variant?: 'sobad' | 'bad' | 'soso' | 'good' | 'sogood' | 'default'
}

export const ThumbIcon: React.FC<IThumbIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = 'soso',
}) => {
  return (
    <i
      className={cn('dds-icon', className, { flip })}
      style={{
        width:
          variant === 'sobad'
            ? size * 2
            : variant === 'sogood'
            ? size * 2
            : variant === 'soso'
            ? size * 2
            : size,
        minWidth:
          variant === 'sobad'
            ? size * 2
            : variant === 'sogood'
            ? size * 2
            : variant === 'soso'
            ? size * 2
            : size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {variant === 'sobad' ? (
        <svg viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M4 11V15H10.5V18L12 19.5L15.5 12V5H5L4 11Z"
            fill={color || EColorMap.red_6}
            fillOpacity="0.3"
          />
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7097 20.1483C13.3172 21.1577 12.0169 21.4311 11.2511 20.6653L9.5 18.9142V16H5C3.89543 16 3 15.1046 3 14V10.9172L3.87434 5.6712C4.03507 4.70683 4.86945 4 5.84713 4H15H17H20V13H16.4896L13.7097 20.1483ZM15 11.3124L12.1235 18.7092L11.5 18.0858V14H5V11.0828L5.84713 6H15V11.3124Z"
            fill={color || EColorMap.red_6}
          />
          <path
            id="icon__fill"
            d="M28 11V15H34.5V18L36 19.5L39.5 12V5H29L28 11Z"
            fill={color || EColorMap.red_6}
            fillOpacity="0.3"
          />
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.7097 20.1483C37.3172 21.1577 36.0169 21.4311 35.2511 20.6653L33.5 18.9142V16H29C27.8954 16 27 15.1046 27 14V10.9172L27.8743 5.6712C28.0351 4.70683 28.8694 4 29.8471 4H39H41H44V13H40.4896L37.7097 20.1483ZM39 11.3124L36.1235 18.7092L35.5 18.0858V14H29V11.0828L29.8471 6H39V11.3124Z"
            fill={color || EColorMap.red_6}
          />
        </svg>
      ) : variant === 'bad' ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M4 11V15H10.5V18L12 19.5L15.5 12V5H5L4 11Z"
            fill={color || EColorMap.red_6}
            fillOpacity="0.3"
          />
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7097 20.1483C13.3172 21.1577 12.0169 21.4311 11.2511 20.6653L9.5 18.9142V16H5C3.89543 16 3 15.1046 3 14V10.9172L3.87434 5.6712C4.03507 4.70683 4.86945 4 5.84713 4H15H17H20V13H16.4896L13.7097 20.1483ZM15 11.3124L12.1235 18.7092L11.5 18.0858V14H5V11.0828L5.84713 6H15V11.3124Z"
            fill={color || EColorMap.red_6}
          />
        </svg>
      ) : variant === 'soso' ? (
        <svg viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M28 11V15H34.5V18L36 19.5L39.5 12V5H29L28 11Z"
            fill={color || EColorMap.gray_8}
            fillOpacity="0.3"
          />
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.7097 20.1483C37.3172 21.1577 36.0169 21.4311 35.2511 20.6653L33.5 18.9142V16H29C27.8954 16 27 15.1046 27 14V10.9172L27.8743 5.6712C28.0351 4.70683 28.8694 4 29.8471 4H39H41H44V13H40.4896L37.7097 20.1483ZM39 11.3124L36.1235 18.7092L35.5 18.0858V14H29V11.0828L29.8471 6H39V11.3124Z"
            fill={color || EColorMap.gray_8}
          />
          <path
            id="icon__fill"
            d="M20 13.1051V9.1051H13.5V6.1051L12 4.6051L8.5 12.1051V19.1051H19L20 13.1051Z"
            fill={color || EColorMap.gray_8}
            fillOpacity="0.3"
          />
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.2903 3.95681C10.6828 2.94737 11.9831 2.67397 12.7489 3.43982L14.5 5.19089V8.1051H19C20.1046 8.1051 21 9.00053 21 10.1051V13.1879L20.1257 18.4339C19.9649 19.3983 19.1306 20.1051 18.1529 20.1051H9H7H4V11.1051H7.51038L10.2903 3.95681ZM9 12.7927L11.8765 5.39586L12.5 6.01932V10.1051H19V13.0223L18.1529 18.1051H9V12.7927Z"
            fill={color || EColorMap.gray_8}
          />
        </svg>
      ) : variant === 'good' ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M4 13V9H10.5V6L12 4.5L15.5 12V19H5L4 13Z"
            fill={color || EColorMap.thumbs_green}
            fillOpacity="0.3"
          />
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7097 3.85171C13.3172 2.84227 12.0169 2.56887 11.2511 3.33472L9.5 5.08579V8H5C3.89543 8 3 8.89543 3 10V13.0828L3.87434 18.3288C4.03507 19.2932 4.86945 20 5.84713 20H15H17H20V11H16.4896L13.7097 3.85171ZM15 12.6876L12.1235 5.29076L11.5 5.91421V10H5V12.9172L5.84713 18H15V12.6876Z"
            fill={color || EColorMap.thumbs_green}
          />
        </svg>
      ) : variant === 'sogood' ? (
        <svg viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            d="M4 13V9H10.5V6L12 4.5L15.5 12V19H5L4 13Z"
            fill={color || EColorMap.thumbs_green}
            fillOpacity="0.3"
          />
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7097 3.85171C13.3172 2.84227 12.0169 2.56887 11.2511 3.33472L9.5 5.08579V8H5C3.89543 8 3 8.89543 3 10V13.0828L3.87434 18.3288C4.03507 19.2932 4.86945 20 5.84713 20H15H17H20V11H16.4896L13.7097 3.85171ZM15 12.6876L12.1235 5.29076L11.5 5.91421V10H5V12.9172L5.84713 18H15V12.6876Z"
            fill={color || EColorMap.thumbs_green}
          />
          <path
            id="icon__fill"
            d="M28 13V9H34.5V6L36 4.5L39.5 12V19H29L28 13Z"
            fill={color || EColorMap.thumbs_green}
            fillOpacity="0.3"
          />
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.7097 3.85171C37.3172 2.84227 36.0169 2.56887 35.2511 3.33472L33.5 5.08579V8H29C27.8954 8 27 8.89543 27 10V13.0828L27.8743 18.3288C28.0351 19.2932 28.8694 20 29.8471 20H39H41H44V11H40.4896L37.7097 3.85171ZM39 12.6876L36.1235 5.29076L35.5 5.91421V10H29V12.9172L29.8471 18H39V12.6876Z"
            fill={color || EColorMap.thumbs_green}
          />
        </svg>
      ) : (
        ''
      )}
    </i>
  )
}
