import React from 'react'
import { Column, SvgIcon, NavItem } from '@ui'
import * as iconPath from '../../../source/svg'
interface MineBottomProps {}

const topButtons = [
  {
    title: '个人主页',
    type: 'normal',
    icon: <SvgIcon fill={['#333']} path={iconPath.homepage} size={22} />,
  },
  {
    title: '积分商城',
    type: 'normal',
    icon: <SvgIcon fill={['#333']} path={iconPath.integral} size={22} />,
  },
  {
    title: '系统设置',
    type: 'normal',
    icon: <SvgIcon fill={['#333']} path={iconPath.setting} size={22} />,
  },
  {
    title: '在线客服',
    type: 'normal',
    icon: <SvgIcon fill={['#333']} path={iconPath.service} size={22} />,
  },
]

const bottomButtons = [
  {
    title: '个性换肤',
    type: 'normal',
    icon: <SvgIcon fill={['#333']} path={iconPath.peeling} size={22} />,
  },
  {
    title: '分享豆米家',
    type: 'normal',
    icon: <SvgIcon fill={['#333']} path={iconPath.share} size={22} />,
  },
  // {
  //   title: '关于工作室',
  //   type: 'normal',
  //   icon: <SvgIcon fill={['#333']} path={iconPath.studio} size={22} />,
  // },
]
const MineBottom: React.FC<MineBottomProps> = React.memo(({}) => {
  return (
    <Column>
      <Column style={{ marginTop: 8 }}>
        {topButtons.map((item, index) => (
          <NavItem
            key={index}
            itemTitle={item.title}
            itemStyle={{ backgroundColor: '#fff', height: 46 }}
            itemTitleStyle={{ fontSize: 15 }}
            itemType={item.type}
            leftIcon={
              <Column
                align="center"
                justify="center"
                style={{ marginRight: 14, marginLeft: 18 }}
              >
                {item.icon}
              </Column>
            }
            showItemSeparator={index !== topButtons.length - 1}
          />
        ))}
      </Column>
      <Column style={{ marginVertical: 8 }}>
        {bottomButtons.map((item, index) => (
          <NavItem
            key={index}
            itemTitle={item.title}
            itemStyle={{ backgroundColor: '#fff', height: 46 }}
            itemTitleStyle={{ fontSize: 15 }}
            itemType={item.type}
            leftIcon={
              <Column
                align="center"
                justify="center"
                style={{ marginRight: 14, marginLeft: 18 }}
              >
                {item.icon}
              </Column>
            }
            showItemSeparator={index !== bottomButtons.length - 1}
          />
        ))}
      </Column>
    </Column>
  )
})

export { MineBottom }
