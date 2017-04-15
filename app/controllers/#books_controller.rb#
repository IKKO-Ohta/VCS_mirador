class BooksController < ApplicationController
  def index
    @books = Book.all
  end
  def show
    @book = Book.find(params[:id])
    @comment = @book.comments.build if logged_in?
    @comments = @book.comments.paginate(page: params[:page])
  end

  def new
  end
  def delete
  end
  def loading
  end
  def update
  end
end
