import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Dispatches from './dispatches/Dispatches'
import DispatchDetails from './dispatches/DispatchDetails'
import Company from './company/Company'
import Drivers from './drivers/Drivers'
import Driver from './drivers/Driver'

class Content extends Component {

    render() {
        return (
           <div>
            <Switch>
                <Route exact path='/' component={DispatchDetails}/>
                <Route path='/details' component={Dispatches}/>
                <Route path='/company' component={Company}/>
                <Route path='/drivers' component={Driver}/>
            </Switch>
           </div>
        )
    }
}

export default Content 