class CommentsController < ApplicationController
  before_action :current_user
  def create
    @book = Book.find(comment_params[:book_id])
    @comment = @book.comments.build(comment_params)
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
      params.require(:comment).permit(:content,:book_id)
    end
end
