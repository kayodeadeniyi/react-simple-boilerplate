import React from 'react'
import routerUtils from '../../lib/routerUtils'
import './homeController.styl'

export default class HomeController extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return(
      <div className='home'>
        This is home
        {routerUtils.childrenWithProps(this.props.children)}
      </div>
    )
  }
}
