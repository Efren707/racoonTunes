json.extract! user, :id, :name, :username, :email

if user.profile_pic.attached?
    json.profile_pic url_for(user.profile_pic) 
else
    json.profile_pic "https://www.google.com/search?q=vinyl+&tbm=isch&ved=2ahUKEwj0kIL7v4H0AhUMgk4HHbuZDDsQ2-cCegQIABAA&oq=vinyl+&gs_lcp=CgNpbWcQAzIECAAQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyCAgAEIAEELEDOgUIABCABDoICAAQsQMQgwFQih5Y_UtggGJoA3AAeACAAWKIAa0GkgECMTGYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABAMABAQ&sclient=img&ei=n0iFYbTFEYyEuuoPu7Oy2AM&bih=722&biw=1536#imgrc=Hhl-maNFTiOM5M"
end 
