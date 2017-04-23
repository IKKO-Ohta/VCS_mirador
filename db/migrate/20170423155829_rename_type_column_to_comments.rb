class RenameTypeColumnToComments < ActiveRecord::Migration[5.0]
  def change
    rename_column :comments, :type, :CommentType
  end
end
