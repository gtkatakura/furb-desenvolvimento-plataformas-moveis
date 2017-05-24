class CreateMaintainers < ActiveRecord::Migration[5.1]
  def change
    create_table :maintainers do |t|
      t.references :user, foreign_key: true, null: false

      t.timestamps
    end
  end
end
