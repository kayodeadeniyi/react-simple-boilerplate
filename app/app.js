import React from 'react'
import ReactDom from 'react-dom'
import { Router, browserHistory} from 'react-router'
import routes from './lib/route'

ReactDom.render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'))
