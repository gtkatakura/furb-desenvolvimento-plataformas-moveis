class GraduationClass < ApplicationRecord
  has_many :graduation_semesters
  belongs_to :course
  belongs_to :period_day

  validates :course, :period_day, :year, :semesters, presence: true

  after_create :create_semesters

  private
  def create_semesters
    (1..semesters).each do |number|
      graduation_semesters.create!(number: number)
    end
  end
end
