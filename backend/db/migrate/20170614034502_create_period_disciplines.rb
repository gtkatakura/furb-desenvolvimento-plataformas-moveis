class CreatePeriodDisciplines < ActiveRecord::Migration[5.1]
  def change
    create_table :period_disciplines do |t|
      t.references :graduation_semester, foreign_key: true, null: false
      t.references :discipline, foreign_key: true, null: false
      t.datetime :period_start, null: false
      t.datetime :period_end, null: false
      t.references :instructor, foreign_key: true, null: false

      t.timestamps
    end
  end
end
