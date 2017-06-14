class PeriodDiscipline < ApplicationRecord
  belongs_to :graduation_semester
  belongs_to :discipline
  belongs_to :instructor

  has_many :frequency_days

  composed_of :period,
    mapping: [ %w(period_start start), %w(period_end end) ],
    converter: Proc.new { |hash| Period.new(hash[:start], hash[:end]) }

  validates :discipline, :period_start, :period_end, presence: true

  after_create :create_frequencies

  private
  def create_frequencies
    (period.start.to_datetime..period.end.to_datetime).select(&:workday?).each do |date|
      frequency_days.create!(date: date)
    end
  end
end
