class Mutations::ResetPassword < Mutations::BaseMutation
  argument :email, String, required: true
  argument :token, String, required: true
  argument :password, String, required: true

  field :changed, Boolean, null: false
  field :errors, [String], null: false

  def resolve(email:, token:, password:)
    user = User.find_by!(email: email)
    if user.present?
      if user.reset_password_token == token
        user.reset_password!(password)
        {
          changed: true,
          errors: []
        }
      else
        {
          changed: false,
          errors: ["You don't have authorize to make this password change!"]
        }
      end
    else
      {
        changed: false,
        errors: ['User not found!']
      }
    end
  end
end
