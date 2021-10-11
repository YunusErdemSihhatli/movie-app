import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const SESSION_USER = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(input: { email: $email }) {
      send,
      errors
    }
  }
`;

class ForgotPassword extends React.Component {
  state = {
    email: '',
  }

  onSubmit = (e, forgotPassword) => {
    e.preventDefault();
    forgotPassword({ variables: this.state });
    this.setState({ email: '' });
  }

  render() {
    return (
      <Mutation
        mutation={SESSION_USER}
        update={this.props.onForgotPassword}>
          {
            forgotPasswordMutation => (
              <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                  <div>
                    <img
                      className="mx-auto h-12 w-auto"
                      src="/movie.png"
                      alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Forgot Password</h2>
                  </div>
                  <form className="mt-8 space-y-6" onSubmit={e => this.onSubmit(e, forgotPasswordMutation)}>
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
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Send Email
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

export default ForgotPassword;
