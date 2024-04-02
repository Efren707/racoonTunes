require "open-uri"

class Api::UsersController < ApplicationController
  
  ActiveRecord::Base.connection.reset_pk_sequence!('users')

  def create
    @user = User.new(user_params)

    user_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/emptyuser.png")
    @user.profile_pic.attach(io: user_pic, filename: "emptyuser.png")

    if @user.save
      login(@user)
 
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def update
    
    @user = User.find(params[:id])
    
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  private

  def user_params
    params.require(:user).permit(:username, :name, :email, :password)
  end
end