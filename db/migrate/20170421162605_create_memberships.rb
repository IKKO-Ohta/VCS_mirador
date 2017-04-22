class CreateMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :memberships do |t|
      t.string :name
      t.integer :member_id
      t.integer :membered_id

      t.timestamps
    end
    add_index :Memberships,[:member_id]
    add_index :Memberships,[:membered_id]
  end
end
