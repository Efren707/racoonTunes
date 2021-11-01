class Api::SongsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def index
    @songs = Song.all
    render :index
  end

  def show
    @song = Song.find(params[:id])
  end

  def create
    @song = Song.create!(song_params)
    
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private

  def song_params
    params.require(:song).permit( :song_name, :genre, :description, :author_id)
  end

end