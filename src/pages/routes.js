import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
    Logon,
    Register,
    Profile,
    NewIncident
} from './';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/cadastrar" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}
