class Institute < ApplicationRecord
  belongs_to :maintainer

  validates :name, presence: true
end
