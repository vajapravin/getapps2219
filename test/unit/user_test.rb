# == Schema Information
#
# Table name: users
#
#  id               :integer         not null, primary key
#  name             :string(50)
#  login            :string(50)
#  email            :string(50)
#  crypted_password :string(255)
#  zipcode          :integer(6)
#  email_me         :boolean
#  created_at       :datetime        not null
#  updated_at       :datetime        not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
