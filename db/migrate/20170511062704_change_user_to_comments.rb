class ChangeUserToComments < ActiveRecord::Migration[5.0]
  def change
   change_column :comments, :user,'integer USING CAST(user AS integer)'
  end
end
