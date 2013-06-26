Journal::Application.routes.draw do
  resources :posts, :only => [:destroy, :create]

  root to: "posts#index"
end
