class StudentsPeriodDiscipline < ApplicationRecord
  belongs_to :student
  belongs_to :period_discipline

  validates :student, :period_discipline, presence: true
end
