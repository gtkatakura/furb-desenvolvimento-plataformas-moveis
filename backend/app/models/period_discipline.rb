class PeriodDiscipline < ApplicationRecord
  belongs_to :graduation_semester
  belongs_to :discipline
  belongs_to :instructor

  composed_of :period,
    mapping: [ %w(period_start start), %w(period_end end) ],
    converter: Proc.new { |hash| Period.new(hash[:start], hash[:end]) }

  validates :discipline, :period_start, :period_end, presence: true
end
