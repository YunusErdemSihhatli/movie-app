import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const SESSION_USER = gql`
  mutation SessionUser($email: String!, $password: String!) {
    sessionUser(input: { email: $email, password: $password }) {
      user {
        id
        name
        email
        casts {
          id
          name
        }
        movies {
          id
          name
        }
      }
      errors
    }
  }
`;

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  onSubmit = (e, sessionUser) => {
    e.preventDefault();
    sessionUser({ variables: this.state });
    this.setState({ email: '', password: '' });
  }

  render() {
    return (
      <Mutation
        mutation={SESSION_USER}
        update={this.props.onSessionUser}>
          {
            sessionUserMutation => (
              <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                  <div>
                    <img
                      className="mx-auto h-12 w-auto"
                      src="/movie.png"
                      alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                      <a href="/sign_up" className="font-medium text-indigo-600 hover:text-indigo-500">
                        If you don't have an account click here
                      </a>
                    </p>
                  </div>
                  <form className="mt-8 space-y-6" onSubmit={e => this.onSubmit(e, sessionUserMutation)}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                        <label htmlFor="email-address" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email-address"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Email address"
                          value={this.state.email}
                          onChange={e => this.setState({ email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={e => this.setState({ password: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm">
                        <a href="/forgot_password" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Forgot your password?
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )
          }
      </Mutation>
    );
  }
}

export default SignIn;
