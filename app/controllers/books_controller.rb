require 'net/http'
require 'uri'
require 'json'

class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def create
    @book = Book.new(book_params)
    @book.body = fetch(@book.url)
    @book.tile = essential(@book.body)  
    if @book.save
      flash[:success] = "Request accepted!!"
      redirect_to @book
    else
      render 'Oops...'
    end
  end

  def show
    @book = Book.find(params[:id])
    @comment = @book.comments.build
    @comments = @book.comments.paginate(page: params[:page], :per_page => 8)
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
    params.require(:book).permit(:name, :url, :isLocked, :body)
  end

  def fetch(url)
    #preprocessed str                                                                                                                                              
    gallica = url.scan(/http:\/\/[\w\/:\(\)~\.=\+\-]+[\.|\?]/).join.gsub!(/ark:/, 'iiif/ark:').gsub!(/([\.\?]\w*\d*)$/, '/manifest.json')

    encodeManifestUri = URI.escape(gallica)
    uri = URI.parse(encodeManifestUri)
    json = Net::HTTP.get(uri)
    result_json_data = JSON.parse(json)
  end

  def essential(body)
    originData = JSON.generate(body)
    endPointCanvases = originData.index('canvases')
    endPointImages = originData.index('images', endPointCanvases)
    endPointResource = originData.index('resource', endPointImages)
    endPointBracket = originData.index('},', endPointResource)
    resource = originData.slice(endPointResource, endPointBracket)
    endPointId = resource.index('@id')
    endPointQmark = resource.rindex('"')
    substringId = resource.slice(endPointId, endPointQmark)
    matchIdUri = substringId.scan(/http:\/\/[\w\/:\.]+\/f1/)
    idUri = matchIdUri[0]
    infoJson = idUri.concat("/info.json")
  end
end
