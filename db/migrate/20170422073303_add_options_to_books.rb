class AddOptionsToBooks < ActiveRecord::Migration[5.0]
  def change
    add_column :books, :isLock, :boolean
  end
end
