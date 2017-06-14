class Student < ApplicationRecord
  belongs_to :user
  has_many :students_period_disciplines

  validates :user, presence: true
end
