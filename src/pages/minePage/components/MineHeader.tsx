import React from 'react'
import { Avatar, Column, GHOpacity, Linear, MyText, Row } from '@ui'
import { mineStyles } from '../mineCss'
import { hexToRgb, px2Dp } from '@util'

const ACTIONS = ['关 注', '粉 丝', '积 分', '编辑资料']

interface MineHeaderProps {}
const MineHeader: React.FC<MineHeaderProps> = React.memo(({}) => {
  return (
    <Linear
      style={mineStyles.surfaceGradient}
      colors={['#f4f2f2', hexToRgb('#607D8B', 0.54)]}
    >
      <Column style={mineStyles.wordArt}>
        <Linear
          style={mineStyles.lineOneGradient}
          colors={[hexToRgb('#FFFFFFFF', 1), hexToRgb('#607D8B', 0.18)]}
        />
        <Linear
          style={mineStyles.lineTwoGradient}
          colors={[hexToRgb('#FFFFFFFF', 0.4), hexToRgb('#607D8B', 0.42)]}
        />
        <Linear
          style={mineStyles.lineThreeGradient}
          colors={[hexToRgb('#607D8B', 1), hexToRgb('#607D8B', 0.05)]}
        />
        <Linear
          style={mineStyles.lineFourGradient}
          colors={[hexToRgb('#607D8B', 0.45), hexToRgb('#607D8B', 0.46)]}
        />
      </Column>
      <Row style={{ paddingHorizontal: 30 }}>
        <Avatar size={px2Dp(100)} style={{ marginRight: 20 }} />
        <MyText color="white" size={16} weight="medium">
          登录 / 注册
        </MyText>
      </Row>
      <Row justify="space-around">
        {ACTIONS.map((item, index) => {
          let Element = null
          switch (index) {
            case 0:
              Element = (
                <MyText size={16} color="white">
                  0
                </MyText>
              )
              break
            case 1:
              Element = (
                <MyText size={16} color="white">
                  0
                </MyText>
              )
              break
            case 2:
              Element = (
                <MyText size={16} color="white">
                  0
                </MyText>
              )
              break
            case 3:
              Element = (
                <MyText size={16} color="white">
                  0
                </MyText>
              )
              break
          }
          return (
            <GHOpacity>
              {Element}
              <MyText color="white" style={{ marginTop: 6 }} weight="medium">
                {item}
              </MyText>
            </GHOpacity>
          )
        })}
      </Row>
    </Linear>
  )
})

export { MineHeader }
