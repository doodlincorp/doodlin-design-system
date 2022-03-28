import React from 'react'
import { Button } from '..'
import Divider from '../component/Divider'
import Tooltip from '../component/Tooltip'
import '../reset.scss'

export default {
  title: 'Component/Tooltip',
  component: Tooltip,
}

export const Default = () => {
  return (
    <>
      <div style={{ padding: 20 }}>
        <Tooltip tooltipText={'【ツ】'} placement="_right">
          <Button size="md">커서를 올려보세요!</Button>
        </Tooltip>
      </div>
      <div style={{ padding: 20 }}>
        <Tooltip tooltipText={'【ツ】'} placement="_right">
          <Button size="md">portal Node사용</Button>
        </Tooltip>
      </div>
    </>
  )
}

export const variant = () => {
  return (
    <div style={{ paddingLeft: 120, paddingTop: 20 }}>
      <Tooltip tooltipText={'Box'}>
        <Button size="md">Box</Button>
      </Tooltip>
      <Divider />
      <Tooltip tooltipText={'Information'} variant="_info">
        <Button size="md">Info</Button>
      </Tooltip>
      <Divider />
      <Tooltip tooltipText={'Question'} variant="_question">
        <Button size="md">Question</Button>
      </Tooltip>
      <Tooltip tooltipText={'Question'} variant="_question" usingPortalNode>
        <Button size="md">Question</Button>
      </Tooltip>
    </div>
  )
}

export const placement = () => {
  return (
    <div style={{ padding: 150 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '400px',
        }}
      >
        <Tooltip
          variant="_info"
          tooltipText={'왼쪽 상단 정렬'}
          placement="_top-left"
        >
          <Button size="md">top left</Button>
        </Tooltip>
        <Tooltip variant="_info" tooltipText={'위쪽 정렬'} placement="_top">
          <Button size="md">top</Button>
        </Tooltip>
        <Tooltip
          variant="_info"
          tooltipText={'오른쪽 상단 정렬'}
          placement="_top-right"
        >
          <Button size="md">top right</Button>
        </Tooltip>
      </div>

      <Divider size={20} width={400} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '400px',
        }}
      >
        <Tooltip variant="_info" tooltipText={'왼쪽 정렬'} placement="_left">
          <Button size="md">left</Button>
        </Tooltip>
        <Tooltip variant="_info" tooltipText={'오른쪽 정렬'} placement="_right">
          <Button size="md">right</Button>
        </Tooltip>
      </div>

      <Divider size={20} width={400} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '400px',
        }}
      >
        <Tooltip
          variant="_info"
          tooltipText={'왼쪽 하단 정렬'}
          placement="_bottom-left"
        >
          <Button size="md">bottom left</Button>
        </Tooltip>
        <Tooltip
          variant="_info"
          tooltipText={'중앙 하단 정렬'}
          placement="_bottom"
        >
          <Button size="md">bottom</Button>
        </Tooltip>
        <Tooltip
          variant="_info"
          tooltipText={'오른쪽 하단 정렬'}
          placement="_bottom-right"
        >
          <Button size="md">bottom right</Button>
        </Tooltip>
      </div>
    </div>
  )
}
