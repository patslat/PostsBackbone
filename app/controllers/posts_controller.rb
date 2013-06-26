class PostsController < ApplicationController
  def index
    @posts = Post.all

    respond_to do |format|
      format.html
      format.json { render :json => @posts }
    end
  end

  def create
    @post = Post.new(params[:post])
    puts "1"

    if @post.save
      puts "2"
      render :json => @post
    else
      puts "3"
      render :json => @post.errors, :status => 422
    end
    puts "4"
  end

  def destroy
    @post = Post.find(params[:id])

    @post.destroy

    respond_to do |format|
      format.html
      format.json { render :json => @post }
    end
  end
end
