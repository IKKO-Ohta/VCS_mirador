class AddBodyToBooks < ActiveRecord::Migration[5.0]
  def change
    add_column :books, :body, :json
  end
end
