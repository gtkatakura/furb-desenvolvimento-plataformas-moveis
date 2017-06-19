class StudentsPeriodDiscipline < ApplicationRecord
  belongs_to :student
  belongs_to :period_discipline

  has_one :user, through: :student

  validates :student, :period_discipline, presence: true
end
