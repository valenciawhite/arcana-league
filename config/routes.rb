Rails.application.routes.draw do
  resources :readings, only: [:index, :show, :create, :update, :destroy]
  resources :tarot_cards, only: [:index, :show]
  resources :users, only: [:index, :show, :create, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'
end
