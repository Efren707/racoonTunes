json.extract! user, :id, :name, :username, :email

if user.profile_pic.attached?
    json.profile_pic url_for(user.profile_pic) 
end