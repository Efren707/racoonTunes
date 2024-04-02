class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :song_name, null: false
      t.string :genre, null: false
      t.text :description
      t.integer :author_id, null: false
      t.timestamps
    end

    add_index :songs, :author_id
    add_index :songs, :genre, unique: true
    add_index :songs, :song_name
  end
end
