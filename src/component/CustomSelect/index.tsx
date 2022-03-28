import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { createPortal } from 'react-dom'
import { useToggle } from 'doodlin-hooks'

import './index.scss'

import { ArrowIcon } from '../Icon/ArrowIcon'
import { EColorMap } from '../../utils/colorMap'
import { usePortalNode } from '../../hooks/usePortalNode'
import { debounce } from '../../utils/debounce'
import { getOffset } from '../../utils/offset'

import { OptionsView } from './optionsView'

export interface ICustomSelectProps<T> {
  value: T
  options: T[]
  className?: string
  getCurrentViewFunc: (v: T) => JSX.Element
  getOptionViewFunc: (v: T) => JSX.Element
  a11yStateSetter?: React.Dispatch<React.SetStateAction<T>>
  maxHeight?: number
}

const CustomSelect: <T>(
  p: ICustomSelectProps<T>,
) => React.ReactElement<ICustomSelectProps<T>> = ({
  value,
  options,
  className,
  getOptionViewFunc,
  getCurrentViewFunc,
  a11yStateSetter,
  maxHeight,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const optionsViewRef = useRef<HTMLDivElement>(null)
  const [optionOpen, setOptionOpen] = useToggle(ref, optionsViewRef)
  const [offset, setOffset] = useState({ top: 0, left: 0 })
  const [visibility, setVisibility] = useState<'visible' | 'hidden'>('hidden')
  const portalNode = usePortalNode('custom-select-portal')

  useEffect(() => {
    setVisibility('hidden')
    const update = () => {
      if (optionOpen) {
        const offset_ = getOffset(ref.current as HTMLElement)
        offset_.top += (ref.current?.offsetHeight || 0) + 5
        setOffset(offset_)
        setVisibility('visible')
      }
    }
    const handler = debounce(() => {
      update()
    }, 100)
    let observer: MutationObserver
    if (optionOpen) {
      update()
      document.addEventListener('scroll', handler, true)
      // dropdown Item의 width, nested scroll등이 바뀌는 경우 대응
      observer = new MutationObserver(handler)
      if (ref.current) {
        observer.observe(ref.current, { attributes: true })
      }
    }
    return () => {
      if (observer) {
        observer.disconnect()
      }
      document.removeEventListener('scroll', handler, true)
    }
  }, [optionOpen])

  return (
    <div className={cn('_CUSTOM_SELECT_', className)} ref={ref}>
      <button
        className={cn('current', { selected: optionOpen })}
        tabIndex={0}
        onClick={(e) => {
          setOptionOpen()
          e.stopPropagation()
        }}
      >
        {getCurrentViewFunc(value)}
        <ArrowIcon
          className="chevron-icon"
          color={EColorMap.gray_6}
          size={16}
          rotate={optionOpen ? 90 : 270}
          variant="chevron"
        />
      </button>
      {optionOpen &&
        (portalNode.current ? (
          createPortal(
            <div
              className="isolated-customselect-options"
              ref={optionsViewRef}
              style={{
                width: ref.current?.offsetWidth || 0,
                top: offset.top,
                left: offset.left,
                visibility,
                zIndex: 10000000,
                overflow: 'hidden',
              }}
            >
              <div
                className="solated-customselect-options-inner"
                style={{
                  maxHeight: maxHeight || 'unset',
                }}
              >
                <OptionsView
                  options={options}
                  getOptionViewFunc={getOptionViewFunc}
                  setOptionOpen={setOptionOpen}
                  value={value}
                  a11yStateSetter={a11yStateSetter}
                />
              </div>
            </div>,
            portalNode.current,
          )
        ) : (
          <div className="options">
            <OptionsView
              options={options}
              getOptionViewFunc={getOptionViewFunc}
              setOptionOpen={setOptionOpen}
              value={value}
              a11yStateSetter={a11yStateSetter}
            />
          </div>
        ))}
    </div>
  )
}

export default CustomSelect
