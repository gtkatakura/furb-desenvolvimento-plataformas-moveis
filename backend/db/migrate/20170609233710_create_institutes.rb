class CreateInstitutes < ActiveRecord::Migration[5.1]
  def change
    create_table :institutes do |t|
      t.string :name, null: false
      t.references :maintainer, foreign_key: true, null: false

      t.timestamps
    end
  end
end
