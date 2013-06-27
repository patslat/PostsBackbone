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

    if @post.save
      render :json => @post
    else
      render :json => @post.errors, :status => 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(params[:post])
      render :json => @post
    else
      render :json => @post.errors, :status => 422
    end
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
