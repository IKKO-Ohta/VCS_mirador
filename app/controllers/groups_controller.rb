class GroupsController < ApplicationController
  def show
  end 

  def create
  end

  def update
    @group = Group.find(params[:group_id])
    @user = User.find(params[:user_id])
    @group.users << @user unless @group.users.include? @user
    end
end
