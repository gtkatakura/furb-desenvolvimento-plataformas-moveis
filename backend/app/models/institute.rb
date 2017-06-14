class Institute < ApplicationRecord
  belongs_to :maintainer
  has_many :courses

  validates :maintainer, :name, presence: true
end
