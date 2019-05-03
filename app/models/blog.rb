class Blog < ApplicationRecord
  has_attached_file :image, style: { medium: "300x500>",thumb: "100x100>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

end
