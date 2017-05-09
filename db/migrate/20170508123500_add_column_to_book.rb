class AddColumnToBook < ActiveRecord::Migration[5.0]
  def change
    add_column :books, :tile, :json
  end
end
