class CreatePeriodDays < ActiveRecord::Migration[5.1]
  def change
    create_table :period_days do |t|
      t.references :institute, foreign_key: true, null: false
      t.string :name, null: false
      t.integer :class_time, null: false
      t.integer :interval_time, null: false
      t.time :start_of_class, null: false

      t.timestamps
    end
  end
end
