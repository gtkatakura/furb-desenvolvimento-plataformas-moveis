class BeaconPresence < ApplicationRecord
  belongs_to :beacon
  belongs_to :user

  validates :beacon, :user, presence: true

  after_save :check_frequency

  private
  def check_frequency
    
  end
end
