class Api::CommentsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def index
    @comments = Comment.all
    render :index
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def create
    @comment = Comment.create!(comment_params)
    
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy  
    @comment = Comment.find(params[:id])
    @comment.destroy
  end


  private

  def song_params
    params.require(:comment).permit( :body :author_id, :song_id)
  end

end