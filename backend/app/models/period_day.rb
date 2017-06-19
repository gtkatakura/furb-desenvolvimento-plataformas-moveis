class PeriodDay < ApplicationRecord
  belongs_to :institute

  validates :institute, :name, :class_time, :interval_time, :start_of_class, presence: true
end
