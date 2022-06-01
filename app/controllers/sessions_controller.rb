class SessionsController < ApplicationController

    def create
        user = User.find_by( username: session_params[:username])
      if user && user.authenticate(session_params[:password])
          session[:user_id] = user.id
          render json: user, status: :ok
        else
          render json: 'Not found. Try again!', status: :unauthorized
        end
      end
  
      def destroy
        session.delete :user_id
        head :no_content
      end
  
      private
        def session_params
          params.permit(:username, :password)
        end
end
