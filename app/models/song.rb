# == Schema Information
#
# Table name: songs
#
#  id          :bigint           not null, primary key
#  song_name   :string           not null
#  genre       :string           not null
#  description :text
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Song < ApplicationRecord
    validates :song_name, :genre, :author_id, presence: true

    has_one_attached :song_file

    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
end
