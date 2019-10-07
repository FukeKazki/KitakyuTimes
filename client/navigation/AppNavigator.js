import React from 'react'
import { createAppContainer } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import SidebarNavigator from './SidebarNavigator'

export default createAppContainer(
    // MainTabNavigator,
    SidebarNavigator
)
