class Student < ApplicationRecord
  belongs_to :user
  has_many :students_period_disciplines
  has_many :period_disciplines, through: :students_period_disciplines

  validates :user, presence: true
end
