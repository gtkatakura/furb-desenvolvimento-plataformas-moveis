class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.references :institute, foreign_key: true
      t.references :coordinator, foreign_key: true

      t.timestamps
    end
  end
end
