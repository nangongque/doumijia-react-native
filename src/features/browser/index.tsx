import { Column } from '@ui'
import React, { memo, useRef } from 'react'
import { WebView } from 'react-native-webview'

/**
 *
 */
const AppWebView = memo(({ navigation }) => {
  const webview = useRef()

  return (
    <Column style={{ flex: 1 }}>
      {/* <StackHeaderWithMenu
        shareRef={shareRef}
        title={title}
        renderLeft={renderCloseBtn}
        onBackPress={onBackPress}
      /> */}
      <WebView
        ref={webview}
        useWebKit
        textZoom={100}
        mixedContentMode={'always'}
        source={{
          uri: 'https://www.baidu.com/',
          headers: { 'Cache-Control': 'no-cache' },
        }}
      />
    </Column>
  )
})

export default AppWebView
