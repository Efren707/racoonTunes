# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#test

require "open-uri"
Song.destroy_all
User.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('songs')

demouser = User.create!({username: 'demoUser', password: '123456', name: 'Demo User', email: 'demouser@user.com'})

travis = User.create!({username: 'LaFlame', password: '123456', name: 'Travis Scott', email: 'laflame@user.com'})
travis_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/travisProfile.jpg")
travis.profile_pic.attach(io: travis_pic, filename: "travisProfile.jpg")

thug = User.create!({username: 'YoungThug', password: '123456', name: 'Young Thug', email: 'thugger@user.com'})
thug_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/thugProfile.jpg")
thug.profile_pic.attach(io: thug_pic, filename: "thugProfile.jpg")

frank = User.create!({username: 'FrankOcean', password: '123456', name: 'Frank Ocean', email: 'franky@user.com'})
frank_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/frankProfile.png")
frank.profile_pic.attach(io: frank_pic, filename: "frankProfile.png")

song1 = Song.create!({song_name: 'Stargazing', genre: "Hip-Hop & Rap", description: "", author_id: travis.id})
song1_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/astroworld.jpg")
song1.photo.attach(io: song1_pic, filename: "astroworld.jpg")
song1_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/stargazing.mp3")
song1.audio.attach(io: song1_song, filename: "stargazing.mp3")

song2 = Song.create!({song_name: 'Hail to the King', genre: "Rock", description: "", author_id: demouser.id})
song2_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/hailtotheking.png")
song2.photo.attach(io: song2_pic, filename: "hailtotheking.png")
song2_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/hailtotheking.mp3")
song2.audio.attach(io: song2_song, filename: "hailtotheking.mp3")

song3 = Song.create!({song_name: 'The Hills', genre: "R&B & Soul", description: "", author_id: demouser.id})
song3_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/thehills.jpg")
song3.photo.attach(io: song3_pic, filename: "thehills.jpg")
song3_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/thehills.mp3")
song3.audio.attach(io: song3_song, filename: "thehills.mp3")

song4 = Song.create!({song_name: 'Never Too Late', genre: "Rock", description: "", author_id: demouser.id})
song4_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/3dgx.jpg")
song4.photo.attach(io: song4_pic, filename: "3dgx.jpg")
song4_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/3dgx.mp3")
song4.audio.attach(io: song4_song, filename: "3dgx.mp3")

song5 = Song.create!({song_name: 'WUSYANAME', genre: "Hip-Hop & Rap", description: "", author_id: demouser.id})
song5_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/callme.jpg")
song5.photo.attach(io: song5_pic, filename: "callme.jpg")
song5_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/wusyaname.mp3")
song5.audio.attach(io: song5_song, filename: "wusyaname.mp3")

song6 = Song.create!({song_name: 'Escape Plan', genre: "Hip-Hop & Rap", description: "", author_id: travis.id})
song6_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/dystopia.jpg")
song6.photo.attach(io: song6_pic, filename: "dystopia.jpg")
song6_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/escapeplan.mp3")
song6.audio.attach(io: song6_song, filename: "escapeplan.mp3")

song7 = Song.create!({song_name: 'Believe What I Say', genre: "Hip-Hop & Rap", description: "", author_id: demouser.id})
song7_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/donda.jpg")
song7.photo.attach(io: song7_pic, filename: "donda.jpg")
song7_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/bwis.mp3")
song7.audio.attach(io: song7_song, filename: "bwis.mp3")

song8 = Song.create!({song_name: 'Thief In The Night', genre: "Hip-Hop & Rap", description: "", author_id: thug.id})
song8_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/slime2.jpg")
song8.photo.attach(io: song8_pic, filename: "slime2.jpg")
song8_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/slime2.mp3")
song8.audio.attach(io: song8_song, filename: "slime2.mp3")

song9 = Song.create!({song_name: 'Self Care', genre: "R&B & Soul", description: "", author_id: demouser.id})
song9_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/selfcare.jpg")
song9.photo.attach(io: song9_pic, filename: "selfcare.jpg")
song9_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/selfcare.mp3")
song9.audio.attach(io: song9_song, filename: "selfcare.mp3")

song10 = Song.create!({song_name: 'I Hate Everything', genre: "Rock", description: "", author_id: demouser.id})
song10_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/3dg.jpg")
song10.photo.attach(io: song10_pic, filename: "3dg.jpg")
song10_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/3dg.mp3")
song10.audio.attach(io: song10_song, filename: "3dg.mp3")

song11 = Song.create!({song_name: 'Dreams and Nightmares', genre: "Hip-Hop & Rap", description: "", author_id: demouser.id})
song11_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/meek.png")
song11.photo.attach(io: song11_pic, filename: "meek.png")
song11_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/meek.mp3")
song11.audio.attach(io: song11_song, filename: "meek.mp3")

song12 = Song.create!({song_name: 'XO Tour Life', genre: "Hip-Hop & Rap", description: "", author_id: demouser.id})
song12_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/luvisrage.jfif")
song12.photo.attach(io: song12_pic, filename: "luvisrage.jfif")
song12_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/luvisrage.mp3")
song12.audio.attach(io: song12_song, filename: "luvisrage.mp3")

song13 = Song.create!({song_name: 'Numb', genre: "Rock", description: "", author_id: demouser.id})
song13_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/linkinpark.jpg")
song13.photo.attach(io: song13_pic, filename: "linkinpark.jpg")
song13_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/linkinpark.mp3")
song13.audio.attach(io: song13_song, filename: "linkinpark.mp3")

song14 = Song.create!({song_name: 'Life is Good', genre: "Hip-Hop & Rap", description: "", author_id: demouser.id})
song14_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/lifeisgood.jfif")
song14.photo.attach(io: song14_pic, filename: "lifeisgood.jfif")
song14_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/lifeisgood.mp3")
song14.audio.attach(io: song14_song, filename: "lifeisgood.mp3")

song15 = Song.create!({song_name: 'Lens V2', genre: "R&B & Soul", description: "", author_id: frank.id})
song15_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/lens.jpg")
song15.photo.attach(io: song15_pic, filename: "lens.jpg")
song15_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/lens.mp3")
song15.audio.attach(io: song15_song, filename: "lens.mp3")

song16 = Song.create!({song_name: 'Location', genre: "R&B & Soul", description: "", author_id: demouser.id})
song16_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/khalid.png")
song16.photo.attach(io: song16_pic, filename: "khalid.png")
song16_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/khalid.mp3")
song16.audio.attach(io: song16_song, filename: "khalid.mp3")

song17 = Song.create!({song_name: 'For Tonight', genre: "R&B & Soul", description: "", author_id: demouser.id})
song17_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/giveon.png")
song17.photo.attach(io: song17_pic, filename: "giveon.png")
song17_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/giveon.mp3")
song17.audio.attach(io: song17_song, filename: "giveon.mp3")

song18 = Song.create!({song_name: 'Fair Trade', genre: "Hip-Hop & Rap", description: "", author_id: demouser.id})
song18_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/clb.jpeg")
song18.photo.attach(io: song18_pic, filename: "clb.jpeg")
song18_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/fairtrade.mp3")
song18.audio.attach(io: song18_song, filename: "fairtrade.mp3")

song19 = Song.create!({song_name: 'DHL', genre: "R&B & Soul", description: "", author_id: frank.id})
song19_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/dhl.jfif")
song19.photo.attach(io: song19_pic, filename: "dhl.jfif")
song19_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/dhl.mp3")
song19.audio.attach(io: song19_song, filename: "dhl.mp3")

song20 = Song.create!({song_name: 'Day Before', genre: "Hip-Hop & Rap", description: "", author_id: thug.id})
song20_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/daybefore.jfif")
song20.photo.attach(io: song20_pic, filename: "daybefore.jfif")
song20_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/daybefore.mp3")
song20.audio.attach(io: song20_song, filename: "daybefore.mp3")

song21 = Song.create!({song_name: 'All These Things I Hate', genre: "Rock", description: "", author_id: demouser.id})
song21_pic = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/bfmv.jpg")
song21.photo.attach(io: song21_pic, filename: "bfmv.jpg")
song21_song = open("https://racoontunes-seeds.s3.us-west-1.amazonaws.com/allthesethingsihate.mp3")
song21.audio.attach(io: song21_song, filename: "allthesethingsihate.mp3")

comment1 = Comment.create!({author_id: 2, song_id: 1, body: "My favorite song on Astroworld"})
comment2 = Comment.create!({author_id: 4, song_id: 8, body: "SLAT!"})
comment3 = Comment.create!({author_id: 3, song_id: 15, body: "My favorite artist collab! :)"})
comment4 = Comment.create!({author_id: 1, song_id: 1, body: "Demo User comment"})