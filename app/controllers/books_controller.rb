class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def create
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      flash[:success] = "Request accepted!!"
      redirect_to @book
    else
      render 'Oops...'
    end
  end

  def show
    @book = Book.find(params[:id])
    @comment = @book.comments.build if logged_in?
    @comments = @book.comments.paginate(page: params[:page])
  end

  def new
    @book = Book.new
  end
  def delete
  end
  def loading
  end
  def update
  end

  private

  def book_params
    params.require(:book).permit(:name, :uri, :isLocked)
  end

end
