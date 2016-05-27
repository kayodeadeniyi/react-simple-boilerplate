import React from 'react'
import { Route } from 'react-router'
import HomeController from '../components/HomeController.react'
{ /* import every other component here */ }

export default (
  <Route path="/" component={HomeController}>
    {/* Put any other route that you want here */}
  </Route>
)
