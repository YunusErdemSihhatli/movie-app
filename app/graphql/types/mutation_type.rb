module Types
  class MutationType < Types::BaseObject
    field :create_user, mutation: Mutations::CreateUser
    field :session_user, mutation: Mutations::SessionUser
    field :forgot_password, mutation: Mutations::ForgotPassword
    field :reset_password, mutation: Mutations::ResetPassword
  end
end
