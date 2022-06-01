class ApplicationController < ActionController::API
    include ActionController::Cookies
    # skip_before_action :verify_authenticity_token
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  
    private
      def current_user
        User.find_by_id(session[:user_id])
      end

      def record_not_found(errors)
        render json: errors.message, status: :not_found
      end

      def invalid_record(invalid)
        render json: invalid.record.errors, status: :unprocessable_entity
      end

end
