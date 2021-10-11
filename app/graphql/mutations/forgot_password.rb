class Mutations::ForgotPassword < Mutations::BaseMutation
  argument :email, String, required: true

  field :send, Boolean, null: false
  field :errors, [String], null: false

  def resolve(email:)
    user = User.find_by!(email: email)
    if user.present?
      if user.generate_password_token!
        {
          send: true,
          errors: []
        }
      else
        {
          send: false,
          errors: ["Can't generate reset password token!"]
        }
      end
    else
      {
        send: false,
        errors: ['User not found!']
      }
    end
  end
end
