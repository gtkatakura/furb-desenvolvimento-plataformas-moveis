class PeriodDiscipline < ApplicationRecord
  belongs_to :graduation_semester
  belongs_to :discipline
  belongs_to :instructor

  has_many :frequency_days

  has_one :graduation_class, through: :graduation_semester
  has_one :period_day, through: :graduation_class

  composed_of :period,
    mapping: [ %w(period_start start), %w(period_end end) ],
    converter: Proc.new { |hash| Period.new(hash[:start], hash[:end]) }

  validates :discipline, :period_start, :period_end, presence: true

  after_create :create_frequencies

  private
  def create_frequencies
    (period.start.to_datetime..period.end.to_datetime).select(&:workday?).each do |date|
      first_class_day_starts = date.change(
        hour: period_day.start_of_class.hour,
        min: period_day.start_of_class.min
      )

      first_class_day_ends = first_class_day_starts + period_day.class_time.minutes

      second_class_day_starts = first_class_day_ends
      second_class_day_ends = second_class_day_starts + period_day.class_time.minutes

      three_class_day_starts = second_class_day_ends + period_day.interval_time.minutes
      three_class_day_ends = three_class_day_starts + period_day.class_time.minutes

      four_class_day_starts = three_class_day_ends
      four_class_day_ends = four_class_day_starts + period_day.class_time.minutes

      frequency_days.create!(class_day: { start: first_class_day_starts, end: first_class_day_ends })
      frequency_days.create!(class_day: { start: second_class_day_starts, end: second_class_day_ends })
      frequency_days.create!(class_day: { start: three_class_day_starts, end: three_class_day_ends })
      frequency_days.create!(class_day: { start: four_class_day_starts, end: four_class_day_ends })
    end
  end
end
