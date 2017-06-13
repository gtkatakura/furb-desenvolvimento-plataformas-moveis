class Discipline < ApplicationRecord
  belongs_to :course

  validates :course, presence: true
end
