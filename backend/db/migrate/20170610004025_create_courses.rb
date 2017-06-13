class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :name, null: false
      t.references :institute, foreign_key: true, null: false
      t.references :coordinator, foreign_key: true, null: false

      t.timestamps
    end
  end
end
