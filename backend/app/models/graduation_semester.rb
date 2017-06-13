class GraduationSemester < ApplicationRecord
  belongs_to :graduation_class

  validates :graduation_class, presence: true
end
