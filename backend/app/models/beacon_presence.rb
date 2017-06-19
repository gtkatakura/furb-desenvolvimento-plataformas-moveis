class BeaconPresence < ApplicationRecord
  belongs_to :beacon
  belongs_to :user

  validates :beacon, :user, presence: true

  after_save :check_frequency

  private
  def check_frequency
    # period_discipline = user.period_disciplines
    #   .where('? BETWEEN period_disciplines.period_start AND period_disciplines.period_end', created_at)
    #   .first
  end
end
