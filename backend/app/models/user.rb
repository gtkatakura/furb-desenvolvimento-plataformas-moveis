class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :students
  has_many :students_period_disciplines, through: :students
  has_many :period_disciplines, through: :students_period_disciplines
end
