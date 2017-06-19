class Presence < ApplicationRecord
  belongs_to :frequency_day
  belongs_to :student

  validates :frequency_day, :student, presence: true
end
