import React, { useState } from 'react';
import Home from './Home';
import SignIn from './Signin';
import SignUp from './Signup';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import { useHistory, Route, Switch } from "react-router-dom";
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = createHttpLink({
  uri: 'http://localhost:3000/graphql'
})

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})

function App() {
  let history = useHistory();
  const [user, setUser] = useState(null);

  function setCurrentUser(cache, { data: { sessionUser }}) {
    setUser(sessionUser.user)
    history.push("/");
  }

  function onCreateUser(cache, { data: { createUser }}) {
    if (createUser.user != null) {
      history.push("/sign_in");
    }
  }

  function onForgotPassword(cache, { data: { forgotPassword }}) {
    if (forgotPassword.send == true) {
      history.push("/sign_in");
    }
  }

  function onResetPasssword(cache, { data: { resetPasssword }}) {
    if (resetPasssword.changed == true) {
      history.push("/sign_in");
    }
  }

  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path='/'><Home user={user} /></Route>
        <Route exact path='/sign_in'><SignIn onSessionUser={setCurrentUser} /></Route>
        <Route exact path='/sign_up'><SignUp onCreateUser={onCreateUser} /></Route>
        <Route exact path='/forgot_password'><ForgotPassword onForgotPassword={onForgotPassword} /></Route>
        <Route exact path='/reset_password'><ResetPassword onResetPasssword={onResetPasssword} /></Route>
      </Switch>
    </ApolloProvider>
  )
}
export default App;
