/**
 * @Author: will
 * @Date:   2017-06-15T14:40:46+08:00
 * @Filename: RootTab.js
 * @Last modified by:   will
 * @Last modified time: 2017-06-15T14:48:18+08:00
 */

import {
  StackNavigator,
} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import Tabs from './Tabs';

const RootTab = StackNavigator({
  Tabs: { screen: Tabs },
}, {
    headerMode: 'screen',
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
  },
);
export default RootTab;
