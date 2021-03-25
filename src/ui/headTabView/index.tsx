import React, { PureComponent } from 'react'
import { Column, MyText, View, Dimensions, StyleSheet } from '@ui'

import { CollapsibleHeaderTabView } from 'react-native-tab-view-collapsible-header'
import { deviceWidth } from '@util'

interface Props {
  renderScrollHeader: () => React.ComponentType<any> | React.ReactElement | null
}

export default class HeadTabView extends PureComponent<
  Props,
  {
    isRefreshing: boolean
    index: number
    routes: { key: string; title: string }[]
  }
> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}

  render() {
    const { ...rest } = this.props
    return null
    // <CollapsibleHeaderTabView
    //   {...rest}
    //   lazy={true}
    //   renderTabBar={renderTabBar}
    //   onIndexChange={this.setIndex}
    //   renderScene={this._renderScene}
    //   navigationState={{ index, routes }}
    //   initialLayout={styles.tabviewLayout}
    //   onStartRefresh={this.onStartRefresh}
    //   isRefreshing={this.state.isRefreshing}
    // />
  }
}

const styles = StyleSheet.create({
  tabviewLayout: {
    height: 100,
    width: deviceWidth,
  },
})
