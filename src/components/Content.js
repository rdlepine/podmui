import React, {Component} from 'react'
import { Switch as RouterSwitch, Route } from 'react-router-dom'
import Dispatches from './dispatches/Dispatches'
import DispatchDetails from './dispatches/DispatchDetails'
import Company from './company/Company'
import Drivers from './drivers/Drivers'
import Driver from './drivers/Driver'

class Content extends Component {

    render() {
        return (
           <div>
            <RouterSwitch>
                <Route exact path='/' component={DispatchDetails}/>
                <Route path='/details' component={Dispatches}/>
                <Route path='/company' component={Company}/>
                <Route path='/drivers' component={Driver}/>
            </RouterSwitch>
           </div>
        )
    }
}

export default Content 