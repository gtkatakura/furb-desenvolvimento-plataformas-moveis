class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_one :student
  has_many :students_period_disciplines, through: :student
  has_many :period_disciplines, through: :students_period_disciplines
  has_many :frequency_days, through: :period_disciplines
end
