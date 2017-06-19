class BeaconPresence < ApplicationRecord
  belongs_to :beacon
  belongs_to :user

  has_one :student, through: :user

  validates :beacon, :user, presence: true

  after_save :check_frequency

  private
  def check_frequency
    frequency_day = user.frequency_days
      .where('? BETWEEN frequency_days.class_day_start AND frequency_days.class_day_end', created_at)
      .first

    return if frequency_day.blank?

    beacon_presences = BeaconPresence.where(user_id: user.id)
      .where('created_at BETWEEN ? AND ?', frequency_day.class_day_start, frequency_day.class_day_end)

    beacon_presence_intervals = beacon_presences.drop(1).map.with_index do |current, index|
      current.created_at - beacon_presences[index].created_at
    end

    beacon_presence_total_time = beacon_presence_intervals.select { |interval| interval.seconds <= 5.minutes }.sum

    if beacon_presence_total_time >= (frequency_day.class_time * 0.7)
      frequency_day.presences.create!(student: student)
    end
  end
end
