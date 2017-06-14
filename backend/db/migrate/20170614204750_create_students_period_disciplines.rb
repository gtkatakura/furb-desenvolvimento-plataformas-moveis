class CreateStudentsPeriodDisciplines < ActiveRecord::Migration[5.1]
  def change
    create_table :students_period_disciplines do |t|
      t.references :student, foreign_key: true, null: false
      t.references :period_discipline, foreign_key: true, null: false

      t.timestamps
    end
  end
end
