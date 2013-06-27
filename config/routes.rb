Journal::Application.routes.draw do
  resources :posts, :only => [:destroy, :create, :update]

  root to: "posts#index"
end
