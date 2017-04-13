class BooksController < ApplicationController
  def index
    @books = Book.all
  end
  def show
    @book = Book.find(params[:id]) 
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
