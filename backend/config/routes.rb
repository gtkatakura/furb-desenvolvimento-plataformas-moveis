Rails.application.routes.draw do
  resources :period_days
  resources :students_period_disciplines
  resources :beacon_presences
  resources :beacons
  resources :frequency_days
  resources :period_disciplines
  resources :disciplines
  resources :graduation_semesters
  resources :graduation_classes
  resources :courses
  resources :institutes
  resources :instructors
  resources :students
  resources :coordinators
  resources :maintainers
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
