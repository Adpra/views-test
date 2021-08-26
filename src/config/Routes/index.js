import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, List } from '../../pages'
import Detail from '../../pages/Detail'

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/list"> 
                        <List />
                    </Route>
                    <Route path="/detail/:id">
                        <Detail />
                    </Route>
                    <Route>
                        <Home path="/"/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
