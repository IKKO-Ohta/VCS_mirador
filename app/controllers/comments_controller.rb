class CommentsController < ApplicationController
  before_action :current_user
  def create
    @comment = Book.first.comments.build(comment_params)
    @comment.user = current_user.name
    if @comment.save
      flash[:success] = "comment created!"
      redirect_to controller:'books',action: 'show',id: @comment.book.id
    else
      render 'static_pages/home'
    end
  end
  def destroy
  end

  private
    def comment_params
      params.require(:comment).permit(:content)
    end
end
