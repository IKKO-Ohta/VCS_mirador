class RenameUriColumnToBooks < ActiveRecord::Migration[5.0]
  def change
    rename_column :books, :uri, :url
  end
end
