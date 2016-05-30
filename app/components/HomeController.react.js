import React from 'react'
import routerUtils from '../../lib/routerUtils'
import AwardActions from '../actions/AwardActions'
var AwardStore = require('../stores/AwardStore');

import './homeController.styl'

export default class HomeController extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    this.onUpdate = this.onUpdate.bind(this)
  }
  componentDidMount() {
    AwardStore.addChangeListener(this.onUpdate);
    AwardActions.fetchInitialData()
  }
  componentWillUnmount() {
    AwardStore.removeChangeListener(this.onUpdate);
  }
  onUpdate() {
    console.log('I have been updated');
  }

  render() {
    return(
      <div className='home'>
        <h1>This is home oo</h1>
        {routerUtils.childrenWithProps(this.props.children)}
      </div>
    )
  }
}
