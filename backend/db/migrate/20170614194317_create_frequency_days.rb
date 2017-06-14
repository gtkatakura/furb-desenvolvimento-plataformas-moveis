class CreateFrequencyDays < ActiveRecord::Migration[5.1]
  def change
    create_table :frequency_days do |t|
      t.datetime :date, null: false
      t.references :period_discipline, foreign_key: true, null: false

      t.timestamps
    end
  end
end
