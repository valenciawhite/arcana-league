class CreateTarotCards < ActiveRecord::Migration[7.0]
  def change
    create_table :tarot_cards do |t|
      t.string :card_name
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end
