class CreateGraduationClasses < ActiveRecord::Migration[5.1]
  def change
    create_table :graduation_classes do |t|
      t.integer :year, null: false
      t.integer :semesters, null: false
      t.references :course, foreign_key: true, null: false
      t.references :period_day, foreign_key: true, null: false

      t.timestamps
    end
  end
end
