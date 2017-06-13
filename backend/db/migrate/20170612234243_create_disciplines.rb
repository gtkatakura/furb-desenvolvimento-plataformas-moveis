class CreateDisciplines < ActiveRecord::Migration[5.1]
  def change
    create_table :disciplines do |t|
      t.string :name, null: false
      t.references :course, foreign_key: true, null: false

      t.timestamps
    end
  end
end
