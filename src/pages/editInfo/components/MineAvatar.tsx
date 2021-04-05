/**
 * 个人头像
 * created by lijianpo on 2021/04/03
 */
import React, { useCallback, useRef } from 'react'
import { editInfoStyle } from '../css'
import { useSelector } from '@hooks'
import { adaptiveWidth } from '@util'
import { ThemeColors } from 'ui/theme'
import { replaceAvatar } from '@actions/user_action'
import { GHWithoutFeedback, Column, Avatar, Icon } from '@ui'
import SyanImagePicker from 'react-native-syan-image-picker'
import SubmitLoading from '@components/SubmitLoading'

const options = { imageCount: 1 }
interface MineAvatarProps {}
const MineAvatar: React.FC<MineAvatarProps> = ({}) => {
  const ref = useRef<any>()
  const userInfo = useSelector((state) => state.UserReducer.userInfo)
  const showImagePicker = useCallback(() => {
    SyanImagePicker.showImagePicker(options, (err, selectedPhotos) => {
      if (err) {
        // 取消选择
        return
      }
      console.log({ selectedPhotos })
      const res = selectedPhotos[0]
      console.log({ res })
      const formData = new FormData()

      const filename = `doumijia${Date.now()}.dmj`
      formData.append('file', {
        name: filename,
        uri: res.uri,
        type: 'image/jpeg',
      })
      // formData.append('file', res)
      // console.log({ formData })
      ref.current.show('正在更换...')
      replaceAvatar({ id: userInfo.id, file: formData, userInfo }, () =>
        ref.current.hide(),
      )

      // 选择成功，渲染图片
      // ...
    })
  }, [userInfo])

  return (
    <GHWithoutFeedback onPress={showImagePicker}>
      <Column style={{ alignSelf: 'center', marginTop: 30 }}>
        <Avatar
          size={adaptiveWidth(200)}
          style={editInfoStyle.avatar}
          avatar={{ uri: `data:image/png;base64,${userInfo.headImg}` }}
        />
        <Column align="center" justify="center" style={editInfoStyle.camera}>
          <Icon name="camera" size={16} color={ThemeColors.White} />
        </Column>
      </Column>
      <SubmitLoading ref={ref} />
    </GHWithoutFeedback>
  )
}
export { MineAvatar }
