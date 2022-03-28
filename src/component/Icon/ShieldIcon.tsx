import React from 'react'
import cn from 'classnames'

import { EColorMap } from '../../utils/colorMap'

import './index.scss'

export interface IShieldIconProps {
  color?: EColorMap
  className?: string
  size?: number
  rotate?: number
  flip?: boolean
  variant?: 'check' | 'question' | 'virus'
}

export const ShieldIcon: React.FC<IShieldIconProps> = ({
  color,
  className,
  size = 16,
  rotate,
  flip,
  variant = 'check',
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
      {variant === 'check' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2L3 6.5V12C3 18 12 22 12 22C12 22 21 18 21 12V6.5L12 2Z"
            fill={color || EColorMap.green}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.44098L21.5 6.19098V12C21.5 15.2485 19.0773 17.8789 16.807 19.6447C15.656 20.5398 14.508 21.2412 13.6491 21.7183C13.219 21.9572 12.86 22.1408 12.6075 22.265C12.4812 22.3272 12.3814 22.3746 12.3125 22.4067C12.2781 22.4228 12.2514 22.435 12.233 22.4434L12.2116 22.4531L12.2057 22.4557L12.204 22.4565C12.2038 22.4566 12.2031 22.4569 12 22C11.7969 22.4569 11.7968 22.4568 11.7966 22.4567L11.7943 22.4557L11.7884 22.4531L11.767 22.4434C11.7486 22.435 11.7219 22.4228 11.6875 22.4067C11.6186 22.3746 11.5188 22.3272 11.3925 22.265C11.14 22.1408 10.781 21.9572 10.3509 21.7183C9.49204 21.2412 8.34396 20.5398 7.19303 19.6447C4.92273 17.8789 2.5 15.2485 2.5 12V6.19098L12 1.44098ZM12 22L11.7966 22.4567L12 22.5472L12.204 22.4565L12 22ZM12 21.4483C12.0477 21.4255 12.1032 21.3986 12.166 21.3678C12.4056 21.2499 12.7497 21.074 13.1634 20.8442C13.992 20.3838 15.094 19.7102 16.193 18.8553C18.4227 17.1211 20.5 14.7515 20.5 12V6.80901L12 2.55901L3.5 6.80901V12C3.5 14.7515 5.57727 17.1211 7.80697 18.8553C8.90604 19.7102 10.008 20.3838 10.8366 20.8442C11.2503 21.074 11.5944 21.2499 11.834 21.3678C11.8968 21.3986 11.9523 21.4255 12 21.4483Z"
            fill="white"
          />
          <g filter="url(#filter0_dd_1783_15600)">
            <path
              d="M6.98615 12.4249C6.84465 12.2737 6.80791 12.0524 6.89563 11.8647L6.91071 11.8325C7.04205 11.5515 7.39498 11.4565 7.64551 11.6392C8.50159 12.2636 9.32088 12.9388 10.0991 13.6611C10.3321 13.8774 10.706 13.8328 10.8791 13.5661C12.2591 11.4401 13.8148 9.43775 15.5295 7.58104C15.6678 7.43124 15.8846 7.38382 16.0736 7.46037C16.3734 7.58181 16.4801 7.95304 16.2919 8.21609C15.3815 9.48881 13.0045 12.9349 11.3231 16.4783C11.1597 16.8227 10.6853 16.878 10.4514 16.5771C9.68567 15.5921 8.20966 13.7327 6.98615 12.4249Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_1783_15600"
              x="3.84836"
              y="5.42426"
              width="15.5372"
              height="15.3489"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1783_15600"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1783_15600"
                result="effect2_dropShadow_1783_15600"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1783_15600"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}

      {variant === 'question' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2L3 6.5V12C3 18 12 22 12 22C12 22 21 18 21 12V6.5L12 2Z"
            fill={color || EColorMap.warning_orange}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.44098L21.5 6.19098V12C21.5 15.2485 19.0773 17.8789 16.807 19.6447C15.656 20.5398 14.508 21.2412 13.6491 21.7183C13.219 21.9572 12.86 22.1408 12.6075 22.265C12.4812 22.3272 12.3814 22.3746 12.3125 22.4067C12.2781 22.4228 12.2514 22.435 12.233 22.4434L12.2116 22.4531L12.2057 22.4557L12.204 22.4565C12.2038 22.4566 12.2031 22.4569 12 22C11.7969 22.4569 11.7968 22.4568 11.7966 22.4567L11.7943 22.4557L11.7884 22.4531L11.767 22.4434C11.7486 22.435 11.7219 22.4228 11.6875 22.4067C11.6186 22.3746 11.5188 22.3272 11.3925 22.265C11.14 22.1408 10.781 21.9572 10.3509 21.7183C9.49204 21.2412 8.34396 20.5398 7.19303 19.6447C4.92273 17.8789 2.5 15.2485 2.5 12V6.19098L12 1.44098ZM12 22L11.7966 22.4567L12 22.5472L12.204 22.4565L12 22ZM12 21.4483C12.0477 21.4255 12.1032 21.3986 12.166 21.3678C12.4056 21.2499 12.7497 21.074 13.1634 20.8442C13.992 20.3838 15.094 19.7102 16.193 18.8553C18.4227 17.1211 20.5 14.7515 20.5 12V6.80901L12 2.55901L3.5 6.80901V12C3.5 14.7515 5.57727 17.1211 7.80697 18.8553C8.90604 19.7102 10.008 20.3838 10.8366 20.8442C11.2503 21.074 11.5944 21.2499 11.834 21.3678C11.8968 21.3986 11.9523 21.4255 12 21.4483Z"
            fill="white"
          />
          <g filter="url(#filter0_dd_1783_15599)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.1569 13.6188H12.4842C12.7256 13.6188 12.92 13.4378 12.9602 13.2032C13.0004 12.9082 13.1077 12.7339 13.3088 12.573C13.3403 12.5468 13.3963 12.5083 13.4609 12.4639C13.4789 12.4515 13.4976 12.4387 13.5166 12.4255C13.5844 12.3794 13.6616 12.3303 13.7448 12.2773C14.2785 11.9374 15.0592 11.4404 15.1925 10.582C15.3132 9.76418 15.0518 8.93292 14.4618 8.35641C14.0395 7.93407 13.3356 7.33745 11.9681 7.31063C11.1167 7.29052 10.4262 7.47152 9.46088 8.28937C9.23966 8.47707 9.05195 8.65807 8.90447 8.81896C8.70336 9.04018 8.73688 9.38878 8.98492 9.56307L9.78936 10.1396C9.93014 10.2401 10.1178 10.22 10.2318 10.0927C10.5804 9.71055 11.224 9.15415 11.8943 9.15415H11.9211C12.444 9.16085 12.8395 9.30163 13.0407 9.53626C13.1814 9.70385 13.2351 9.93848 13.1881 10.2267C13.1613 10.4278 12.6787 10.7563 12.4708 10.8971C12.418 10.9323 12.3691 10.9701 12.3211 11.0071C12.2596 11.0546 12.1997 11.1007 12.1357 11.1384C11.3379 11.5943 10.7279 12.0568 10.8016 13.2836C10.815 13.4713 10.9692 13.6188 11.1569 13.6188ZM13.1302 15.6782C13.1302 16.3038 12.6231 16.8109 11.9975 16.8109C11.3719 16.8109 10.8647 16.3038 10.8647 15.6782C10.8647 15.0526 11.3719 14.5454 11.9975 14.5454C12.6231 14.5454 13.1302 15.0526 13.1302 15.6782Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_1783_15599"
              x="5.77356"
              y="5.30917"
              width="12.4478"
              height="15.5017"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1783_15599"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1783_15599"
                result="effect2_dropShadow_1783_15599"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1783_15599"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}

      {variant === 'virus' && (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2L3 6.5V12C3 18 12 22 12 22C12 22 21 18 21 12V6.5L12 2Z"
            fill={color || EColorMap.red_8}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.44098L21.5 6.19098V12C21.5 15.2485 19.0773 17.8789 16.807 19.6447C15.656 20.5398 14.508 21.2412 13.6491 21.7183C13.219 21.9572 12.86 22.1408 12.6075 22.265C12.4812 22.3272 12.3814 22.3746 12.3125 22.4067C12.2781 22.4228 12.2514 22.435 12.233 22.4434L12.2116 22.4531L12.2057 22.4557L12.204 22.4565C12.2038 22.4566 12.2031 22.4569 12 22C11.7969 22.4569 11.7968 22.4568 11.7966 22.4567L11.7943 22.4557L11.7884 22.4531L11.767 22.4434C11.7486 22.435 11.7219 22.4228 11.6875 22.4067C11.6186 22.3746 11.5188 22.3272 11.3925 22.265C11.14 22.1408 10.781 21.9572 10.3509 21.7183C9.49204 21.2412 8.34396 20.5398 7.19303 19.6447C4.92273 17.8789 2.5 15.2485 2.5 12V6.19098L12 1.44098ZM12 22L11.7966 22.4567L12 22.5472L12.204 22.4565L12 22ZM12 21.4483C12.0477 21.4255 12.1032 21.3986 12.166 21.3678C12.4056 21.2499 12.7497 21.074 13.1634 20.8442C13.992 20.3838 15.094 19.7102 16.193 18.8553C18.4227 17.1211 20.5 14.7515 20.5 12V6.80901L12 2.55901L3.5 6.80901V12C3.5 14.7515 5.57727 17.1211 7.80697 18.8553C8.90604 19.7102 10.008 20.3838 10.8366 20.8442C11.2503 21.074 11.5944 21.2499 11.834 21.3678C11.8968 21.3986 11.9523 21.4255 12 21.4483Z"
            fill="white"
          />
          <g filter="url(#filter0_dd_1783_15598)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.5 7C11.2239 7 11 7.22386 11 7.5V12.5C11 12.7761 11.2239 13 11.5 13H12.5C12.7761 13 13 12.7761 13 12.5V7.5C13 7.22386 12.7761 7 12.5 7H11.5ZM11.5 15C11.2239 15 11 15.2239 11 15.5V16.5C11 16.7761 11.2239 17 11.5 17H12.5C12.7761 17 13 16.7761 13 16.5V15.5C13 15.2239 12.7761 15 12.5 15H11.5Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_1783_15598"
              x="8"
              y="5"
              width="8"
              height="16"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1783_15598"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_1783_15598"
                result="effect2_dropShadow_1783_15598"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_1783_15598"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}
    </i>
  )
}
