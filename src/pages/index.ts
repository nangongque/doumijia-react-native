import AppWebView from '@features/browser'
import { TabScreen } from '../router/tabs'
import { AccountSecurity } from './accountSecurity'
import { EditInfo } from './editInfo'
import { EditName } from './editName'
import { Guide } from './guide'
import { Setting } from './setting'
import { SignIn } from './sign'

const unLoggedStacks = [
  /** 引导*/
  {
    name: 'Guide',
    component: Guide,
    options: { headerShow: false },
  },
  /** 登录*/
  {
    name: 'SignIn',
    component: SignIn,
    options: { headerShow: false },
  },
  /** 网页*/
  {
    name: 'AppWebView',
    component: AppWebView,
    options: { headerShow: false },
  },
]

const loggedStacks = [
  /** TabScreen*/
  {
    name: 'TabScreen',
    component: TabScreen,
    options: { headerShow: false },
  },
  /** 网页*/
  {
    name: 'AppWebView',
    component: AppWebView,
    options: { headerShow: false },
  },
  /** 设置*/
  {
    name: 'Setting',
    component: Setting,
    options: { headerShow: false },
  },
  /**编辑资料 */
  {
    name: 'EditInfo',
    component: EditInfo,
    options: { headerShow: false },
  },
  /**修改名字 */
  {
    name: 'EditName',
    component: EditName,
    options: { headerShow: false },
  },
  /**账号安全 */
  {
    name: 'AccountSecurity',
    component: AccountSecurity,
    options: { headerShow: false },
  },
]

export { unLoggedStacks, loggedStacks }
