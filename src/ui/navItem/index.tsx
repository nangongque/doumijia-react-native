import React from 'react'
import { Switch, Row, GHOpacity, Divider, StyleSheet, MyText, View } from '@ui'
import { deviceWidth } from '@util'
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons'
import { Column } from 'ui/flex'

interface NavItemProps {}
const NavItem: React.FC<NavItemProps> = ({
  itemType,
  switchProps,
  rightExtraTitle,
  rightIcon,
  itemStyle,
  leftIcon,
  itemTitle,
  showItemSeparator,
}) => {
  const renderRight = () => {
    if (itemType === 'switch') {
      return (
        <Switch
          style={{ shadowOpacity: 0 }}
          trackColor={{ true: '#ce3d3a' }}
          {...switchProps}
        />
      )
    } else {
      return (
        <Row align="center" justify="flex-end" style={{ flex: 1 }}>
          {rightExtraTitle}
          <SimpleLine name={'arrow-right'} size={12} color={'#bababa'} />
        </Row>
      )
    }
  }
  const Element = itemType === 'switch' ? View : GHOpacity

  return (
    <Element activeOpacity={0.7} style={[styles.container, itemStyle]}>
      {leftIcon}
      <Column style={{ flex: 1 }}>
        <Row style={{ flex: 1, paddingRight: 14 }}>
          <MyText>{itemTitle}</MyText>
          {renderRight()}
        </Row>
        {showItemSeparator && <Divider height={0.6} color="#ddd" />}
      </Column>
    </Element>
  )
}

export default NavItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 41,
    width: deviceWidth,
    backgroundColor: 'red',
  },
})
