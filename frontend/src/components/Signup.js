import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';


const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(input: { name: $name, email: $email, password: $password }) {
      user {
        id
        name
        email
      }
      errors
    }
  }
`;

class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  onSubmit = (e, createUser) => {
    e.preventDefault();
    if (this.state.password == this.state.password_confirmation) {
      createUser({ variables: this.state });
      this.setState({ name: '', email: '', password: '', password_confirmation: '' });
    }
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_USER}
        update={this.props.onCreateUser}>
          {
            createUserMutation => (
              <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                  <div>
                    <img
                      className="mx-auto h-12 w-auto"
                      src="/movie.png"
                      alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                      <a href="/sign_in" className="font-medium text-indigo-600 hover:text-indigo-500">
                        If you already have an account click here to sign in
                      </a>
                    </p>
                  </div>
                  <form className="mt-8 space-y-6" onSubmit={e => this.onSubmit(e, createUserMutation)}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                        <label htmlFor="name" className="sr-only">
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="name"
                          autoComplete="name"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Name"
                          value={this.state.name}
                          onChange={e => this.setState({ name: e.target.value })}
                        />
                      </div>
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
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )
          }
      </Mutation>
    )
  };
}

export default SignUp;
