class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable

  has_many :stars
  has_many :movies, through: :stars, source: :star, source_type: Movie
  has_many :casts, through: :stars, source: :star, source_type: Cast

  validates_presence_of :name, :email
  validates_uniqueness_of :email

  def generate_password_token!
    self.reset_password_token = Devise.token_generator.generate(User, :reset_password_token).last
    self.reset_password_sent_at = Time.zone.now
    save!
    ApplicationMailer.with(user: self).forgot_password_mail.deliver_later
  end

  def reset_password!(password)
    self.reset_password_token = nil
    self.password = password
    save!
  end

end
