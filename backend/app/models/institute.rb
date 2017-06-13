class Institute < ApplicationRecord
  belongs_to :maintainer

  validates :maintainer, :name, presence: true
end
