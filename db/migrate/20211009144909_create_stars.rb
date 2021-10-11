class CreateStars < ActiveRecord::Migration[5.2]
  def change
    create_table :stars do |t|
      t.belongs_to :user
      t.references :star, null: false, type: :string, index: true, polymorphic: true

      t.timestamps
    end
  end
end
