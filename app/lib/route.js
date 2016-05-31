import React from 'react'

import { IndexRoute, Route, Router } from 'react-router'
import HomeController from '../components/HomeController.react'
import Category from '../components/Category.react'

export default (
  <Route path='/' component={HomeController}>
    <Route  path='vote' component={Category} />
  </Route>
)
