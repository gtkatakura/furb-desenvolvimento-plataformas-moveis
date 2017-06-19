class BeaconPresence < ApplicationRecord
  belongs_to :beacon
  belongs_to :user

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
  end
end
