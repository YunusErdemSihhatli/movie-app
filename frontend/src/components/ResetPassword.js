import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const RESET_PASSWORD = gql`
  mutation ResetPassword($email: String!, $token: String!, $password: String!) {
    resetPassword(input: { email: $email, token: $token, password: $password }) {
      changed,
      errors
    }
  }
`;

const queryParams = new URLSearchParams(window.location.search);
const email = queryParams.get('email');
const token = queryParams.get('token');

class ResetPassword extends React.Component {
  state = {
    email: email.toString(),
    token: token.toString(),
    password: '',
    password_confirmation: ''
  }

  onSubmit = (e, resetPassword) => {
    e.preventDefault();
    resetPassword({ variables: this.state });
    this.setState({ email: '', token: '', password: '', password_confirmation: '' });
  }

  render() {
    return (
      <Mutation
        mutation={RESET_PASSWORD}
        update={this.props.onResetPassword}>
          {
            resetPasswordMutation => (
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
                  <form className="mt-8 space-y-6" onSubmit={e => this.onSubmit(e, resetPasswordMutation)}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
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
                      <div>
                        <label htmlFor="password-confirmation" className="sr-only">
                          Password Confirmation
                        </label>
                        <input
                          id="password-confirmation"
                          name="password-confirmation"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Password Confirmation"
                          value={this.state.password_confirmation}
                          onChange={e => this.setState({ password_confirmation: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Change Password
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

export default ResetPassword;
