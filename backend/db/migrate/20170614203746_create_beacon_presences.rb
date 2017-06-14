class CreateBeaconPresences < ActiveRecord::Migration[5.1]
  def change
    create_table :beacon_presences do |t|
      t.references :beacon, foreign_key: true, null: false
      t.references :user, foreign_key: true, null: false

      t.timestamps
    end
  end
end
