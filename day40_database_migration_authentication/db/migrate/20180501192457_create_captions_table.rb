class CreateCaptionsTable < ActiveRecord::Migration[5.2]
  def change
    create_table:captions do |t|
      t.integer :id
      t.string :about_ling
      t.string :captions_text
      t.string :closing_statement
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
