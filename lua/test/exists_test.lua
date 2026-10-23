-- WordleAnswers SDK exists test

local sdk = require("wordle-answers_sdk")

describe("WordleAnswersSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
