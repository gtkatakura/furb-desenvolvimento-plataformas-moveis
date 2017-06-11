class CreateInstitutes < ActiveRecord::Migration[5.1]
  def change
    create_table :institutes do |t|
      t.string :name
      t.references :maintainer, foreign_key: true

      t.timestamps
    end
  end
end
