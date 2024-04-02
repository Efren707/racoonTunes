json.extract! song, :id, :song_name, :genre, :description, :author_id 

if song.photo.attached?
    json.photo url_for(song.photo)
else
    json.photo "https://www.google.com/search?q=vinyl+&tbm=isch&ved=2ahUKEwj0kIL7v4H0AhUMgk4HHbuZDDsQ2-cCegQIABAA&oq=vinyl+&gs_lcp=CgNpbWcQAzIECAAQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIHCAAQsQMQQzIICAAQgAQQsQMyBAgAEEMyCAgAEIAEELEDOgUIABCABDoICAAQsQMQgwFQih5Y_UtggGJoA3AAeACAAWKIAa0GkgECMTGYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABAMABAQ&sclient=img&ei=n0iFYbTFEYyEuuoPu7Oy2AM&bih=722&biw=1536#imgrc=Hhl-maNFTiOM5M"
end

json.audio url_for(song.audio) if song.audio.attached?
