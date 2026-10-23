# WordleAnswers SDK exists test

require "minitest/autorun"
require_relative "../WordleAnswers_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = WordleAnswersSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
