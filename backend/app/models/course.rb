class Course < ApplicationRecord
  belongs_to :institute
  belongs_to :coordinator
end
