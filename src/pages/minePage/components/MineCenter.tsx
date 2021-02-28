import React from 'react'
import { Column, GHOpacity, MyText, Row, SvgIcon, Badge } from '@ui'
import * as iconPath from '../../../source/svg'
import { deviceWidth } from '@util'
interface MineCenterProps {}
const MineCenter: React.FC<MineCenterProps> = React.memo(({}) => {
  const items = [
    {
      title: '消息',
      icon: <SvgIcon fill={['#607D8B']} path={iconPath.message} size={28} />,
    },
    {
      title: '订单',
      icon: <SvgIcon fill={['#607D8B']} path={iconPath.mall} size={28} />,
    },
    {
      title: '收藏',
      icon: <SvgIcon fill={['#607D8B']} path={iconPath.favorites} size={28} />,
    },
    {
      title: '浏览记录',
      icon: <SvgIcon fill={['#607D8B']} path={iconPath.recording} size={28} />,
    },
  ]
  return (
    <Row
      style={{
        backgroundColor: '#fff',
      }}
      justify="space-around"
    >
      {items.map((item, index) => {
        return (
          <GHOpacity
            key={index}
            style={{
              alignItems: 'center',
              width: deviceWidth / 4,
              paddingVertical: 15,
            }}
          >
            <Column>
              {item.icon}
              <Badge
                style={{ position: 'absolute', top: -9, right: -9 }}
                number={10}
              />
            </Column>
            <MyText size={13} style={{ marginTop: 10 }}>
              {item.title}
            </MyText>
          </GHOpacity>
        )
      })}
    </Row>
  )
})

export { MineCenter }
