Rails.application.routes.draw do
  resources :sessions
  resources :comments
  resources :readings, only: [:index, :show, :create, :update, :destroy]
  resources :tarot_cards, only: [:index, :show]
  resources :users, only: [:index, :create, :destroy, :show]

  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'
  get "/signup", to: "users#create"

  get '/login', to: 'sessions#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get "/me", to: "users#show"
  get '/users/:id/readings', to: 'users#show_readings'


  
end
