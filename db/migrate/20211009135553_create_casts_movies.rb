class CreateCastsMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :casts_movies do |t|
      t.belongs_to :cast
      t.belongs_to :movie

      t.timestamps
    end
  end
end
