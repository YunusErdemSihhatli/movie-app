class ApplicationMailer < ActionMailer::Base
  default :from => "sihhatlisihhatli@gmail.com"
  layout 'mailer'

  def forgot_password_mail
    @user = params[:user]
    mail(to: @user.email, subject: 'Movie App Forgot Password')
  end

end
