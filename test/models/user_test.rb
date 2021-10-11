require 'test_helper'

class UserTest < ActiveSupport::TestCase

  test "should save user" do
    user = User.new
    user.name = 'Yunus Erdem'
    user.email = 'yunuserdemsihhatli@gmail.com'
    user.password = '123456'
    user.password_confirmation = '123456'
    assert user.save
  end

end
