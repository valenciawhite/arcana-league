class ReadingsController < ApplicationController
    def index
        @readings = Reading.all 
        render json: @readings
    end 

    def show
        @reading = Reading.find(params[:id])
        render json: @reading
    end 

    def create
        @reading = Reading.create(
            title: params[:title],
            content: params[:content]
        )
        render json: @reading
    end 

    def update
        @reading = Reading.find(params[:id])
        @reading.update(
            title: params[:title],
            content: params[:content]
        )
        render json: @reading
    end 

    def destroy
        @readings = Reading.all 
        @reading = Reading.find(params[:id])
        @reading.destroy
        render json: @readings
    end 
end
