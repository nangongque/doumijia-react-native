import React, { PureComponent } from 'react'
import { Column, MyText, View, Dimensions, StyleSheet } from '@ui'
import { TabBar } from 'react-native-tab-view'
import { CollapsibleHeaderTabView } from 'react-native-tab-view-collapsible-header'
import { deviceWidth } from '@util'

interface Props {
  routes: { key: string; title: string }[]
  renderScene: (info: any) => React.ReactElement | null | undefined
  renderScrollHeader: () => React.ComponentType<any> | React.ReactElement | null
}

export default class HeadTabView extends PureComponent<
  Props,
  {
    isRefreshing: boolean
    index: number
  }
> {
  constructor(props: any) {
    super(props)
    this.state = {
      index: 0,
    }
  }
  componentDidMount() {}

  _renderTabBar = (props) => {
    const { renderTabBar } = this.props
    if (renderTabBar) return renderTabBar
    return <TabBar {...props} />
  }

  setIndex = (index: number) => {
    this.setState({ index })
  }
  render() {
    const { index } = this.state
    const {
      routes,
      renderScene,
      onStartRefresh,
      isRefreshing,
      ...rest
    } = this.props

    return (
      <CollapsibleHeaderTabView
        {...rest}
        lazy={true}
        // renderTabBar={this._renderTabBar}
        onIndexChange={this.setIndex}
        renderScene={renderScene}
        navigationState={{ index, routes }}
        initialLayout={styles.tabviewLayout}
        // onStartRefresh={onStartRefresh}
        // isRefreshing={isRefreshing}
      />
    )
  }
}

const styles = StyleSheet.create({
  tabviewLayout: {
    height: 100,
    width: deviceWidth,
  },
})
