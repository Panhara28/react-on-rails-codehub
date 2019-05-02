Rails.application.routes.draw do
  #  resources :blogs
  #
   namespace :api, defaults: { format: 'json' } do
    resources :blogs, only: [:index, :create]
  end
  # match '*path', to: 'blogs#index', via: :all

  root 'home#index'
  match "*path", to: "home#index", via: :all
end
