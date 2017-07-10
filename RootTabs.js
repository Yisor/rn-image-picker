/*
 *  @File   : RootTabs
 *  @Author : lslin
 *  @Date   : 2017-7-5 15:49:17
 *  @Last Modified   : 2017-7-5 15:49:17
 */

import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import BasicTabs from './BasicTabs';

const RootTab = StackNavigator(
  {
    BasicTabs: { screen: BasicTabs },
  },
  {
    headerMode: 'screen',
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
  },
);
export default RootTab;
