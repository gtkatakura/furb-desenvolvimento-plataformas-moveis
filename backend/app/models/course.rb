class Course < ApplicationRecord
  belongs_to :institute
  belongs_to :coordinator

  validates :institute, :coordinator, :name, presence: true
end
