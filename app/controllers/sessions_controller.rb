class SessionsController < ApplicationController

  before_action :set_current_user, except: [:create]

  def create
    user = User.find_by!(email: params[:email])
    if user&.valid_password?(params[:password])
      render json: { payload: encode_payload(user) }, status: :created
    else
      head(:unauthorized)
    end
  end

  private

  def set_current_user
    payload = decode_payload(params[:payload])
    @current_user = User.find_by!(id: payload['user']['id'])
  end

  def encode_payload(user)
    user = { user: user.as_json(only: [:id, :email, :name]) }
    JWT.encode(
      user,
      Rails.application.secrets.secret_key_base,
      'HS256'
    )
  end

  def decode_payload(payload)
    JWT.decode(payload, Rails.application.secrets.secret_key_base).first
  end

end
