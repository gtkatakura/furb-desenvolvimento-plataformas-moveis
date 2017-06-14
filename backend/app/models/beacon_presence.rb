class BeaconPresence < ApplicationRecord
  belongs_to :beacon
  belongs_to :user

  validates :beacon, :user, presence: true
end
