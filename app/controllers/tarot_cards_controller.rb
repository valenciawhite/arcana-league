class TarotCardsController < ApplicationController
    def index
        @tarotCards = TarotCard.all 
        render json: @tarotCards
    end 

    def show
        @tarotCard = TarotCard.find(params[:id])
        render json: @tarotCard
    end 
end
