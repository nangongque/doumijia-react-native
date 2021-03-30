import { deviceHeight } from '@util'
import React, { PureComponent, isValidElement } from 'react'
import {
  View,
  Image,
  ViewStyle,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native'

const defaultProps = {
  enableTop: false,
  scrollEnabled: true,
  StickyHeaderComponent: <View />,
  StickyFooterComponent: <View />,
  onEndReachedThreshold: 0.1,
  onEndReached: () => {},
}
interface Props {
  refresh?: boolean
  style?: ViewStyle
  onScroll?: () => {}
  onRefresh?: () => {}
  fetchData?: () => {}
  scrollEventThrottle?: number
}

interface State {
  isRefreshing: boolean
  showTopButton: boolean
}

export default class MyScrollView extends PureComponent<
  Props & typeof defaultProps,
  State
> {
  static defaultProps = defaultProps
  private offset?: number
  private contentHeight?: number
  scrollview: any

  constructor(props: any) {
    super(props)
    this.state = {
      isRefreshing: false,
      showTopButton: false,
    }
  }

  goTop = () => {
    this.scrollview && this.scrollview.scrollTo({ y: 0 })
    this.setState((prevState) => {
      return {
        ...prevState,
        showTopButton: false,
      }
    })
  }

  scrollTo = (y: number) => {
    this.scrollview && this.scrollview.scrollTo({ y })
  }

  onScroll = (e) => {
    const { showTopButton } = this.state
    const {
      onScroll,
      onEndReachedThreshold,
      onEndReached,
      enableTop,
    } = this.props
    const nevent = e.nativeEvent
    const { contentOffset, contentSize } = nevent
    const offsetY = parseInt(contentOffset.y)
    const contentHeight = parseInt(contentSize.height)
    const direction = offsetY > this.offset ? 'down' : 'up'
    onScroll && onScroll(e, direction)
    this.offset = offsetY
    if (
      contentOffset.y > 0 &&
      this.contentHeight < contentHeight &&
      deviceHeight + offsetY + deviceHeight * onEndReachedThreshold >=
        contentHeight
    ) {
      this.contentHeight = contentHeight
      onEndReached && onEndReached()
    }

    if (
      enableTop &&
      nevent.contentOffset.y >= nevent.layoutMeasurement.height * 2
    ) {
      if (!showTopButton) {
        this.setState((prevState) => {
          return {
            ...prevState,
            showTopButton: true,
          }
        })
      }
    } else if (showTopButton) {
      this.setState((prevState) => {
        return {
          ...prevState,
          showTopButton: false,
        }
      })
    }
  }

  onRefresh = () => {
    const { onRefresh, fetchData } = this.props
    this.setState({ isRefreshing: true })

    setTimeout(() => {
      onRefresh ? onRefresh() : fetchData && fetchData()
      this.setState({ isRefreshing: false }, () => {
        this.contentHeight = 0
      })
    }, 2000)
  }
  render() {
    const { showTopButton, isRefreshing } = this.state
    const {
      style,
      refresh,
      children,
      StickyHeaderComponent,
      StickyFooterComponent,
      scrollEventThrottle = 300,
      scrollEnabled,
      ...restProps
    } = this.props
    const stickyHeader = isValidElement(StickyHeaderComponent) ? (
      StickyHeaderComponent
    ) : (
      <View />
    )
    const stickyFooter = isValidElement(StickyFooterComponent) ? (
      StickyFooterComponent
    ) : (
      <View />
    )
    return (
      <View style={[{ flex: 1 }, style]}>
        {stickyHeader}
        <View style={{ flex: 1 }}>
          <ScrollView
            {...restProps}
            ref={(s) => {
              this.scrollview = s
            }}
            scrollsToTop
            onScroll={this.onScroll}
            scrollEventThrottle={scrollEventThrottle}
            directionalLockEnabled
            showsVerticalScrollIndicator={false}
            automaticallyAdjustContentInsets={false}
            scrollEnabled={scrollEnabled}
            // onContentSizeChange={this.onContentSizeChange}
            refreshControl={
              refresh ? (
                <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={this.onRefresh}
                  progressViewOffset={40}
                />
              ) : null
            }
          >
            {children}
          </ScrollView>
        </View>
        {stickyFooter}
        {showTopButton ? (
          <TouchableOpacity onPress={this.goTop}>
            {/* <Image
              // style={styles.top_image}
              // source={{ uri: 'to_top' }}
              resizeMode="contain"
            /> */}
          </TouchableOpacity>
        ) : null}
      </View>
    )
  }
}
