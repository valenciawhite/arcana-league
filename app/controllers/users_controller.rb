class UsersController < ApplicationController
    def index
        @users = User.all 
        render json: @users
    end 

    def show
        @user = User.find(params[:id])
        render json: @user
    end 

    def create
        @user = User.create(
            title: params[:title],
            content: params[:content]
        )
        render json: @user
    end 

    def destroy
        @users = User.all 
        @user = User.find(params[:id])
        @user.destroy
        render json: @users
    end 
end
