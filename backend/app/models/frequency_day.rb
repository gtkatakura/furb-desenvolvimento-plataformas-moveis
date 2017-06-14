class FrequencyDay < ApplicationRecord
  belongs_to :period_discipline

  validates :period_discipline, :date, presence: true
end
