require 'test_helper'
require 'faker'

class SessionsControllerTest < ActionDispatch::IntegrationTest

  test "Sign up test" do
    assert_difference('User.count') do
      post sign_up_sessions_path, params: {
        user: {
          name: Faker::Name.name,
          email: Faker::Internet.email,
          password: '123456',
          password_confirmation: '123456',
        }
      }
    end
  end

end
