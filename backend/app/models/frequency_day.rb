class FrequencyDay < ApplicationRecord
  belongs_to :period_discipline

  composed_of :class_day,
    class_name: Period.to_s,
    mapping: [ %w(class_day_start start), %w(class_day_end end) ],
    converter: Proc.new { |hash| Period.new(hash[:start], hash[:end]) }

  validates :period_discipline, :class_day_start, :class_day_end, presence: true
end
