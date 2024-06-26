Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:index, :create, :show, :update] 
    
    resource :session, only: [:create, :destroy, :show]
    
    resources :songs, only: [:index, :create, :show, :update, :destroy]

    resources :comments, only: [:create, :destroy, :show, :index]
  end
  
  root to:"static_pages#root"
end
