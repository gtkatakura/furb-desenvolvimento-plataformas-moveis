class CreateGraduationSemesters < ActiveRecord::Migration[5.1]
  def change
    create_table :graduation_semesters do |t|
      t.integer :number, null: false
      t.references :graduation_class, foreign_key: true, null: false

      t.timestamps
    end
  end
end
