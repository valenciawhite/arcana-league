class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
   
    def index
        @users = User.all 
        render json: @users, status: :ok
    end 

    def show
        user = User.find(params[:id])
            if user
                render json: user, status: :ok
        else
            render json: "Not quite...try again.", status: :unauthorized
        end
    end 

    def show_readings
        user = User.find(params[:id])
        render json: user.readings, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created 
    end 

    def destroy
        @users = User.all 
        @user = User.find(params[:id])
        @user.destroy
        render json: @users
    end 

    private
    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status:422
    end

    def user_params
        # params.permit(:username, :password)
        params.require(:username).permit(:password)
    end
end
