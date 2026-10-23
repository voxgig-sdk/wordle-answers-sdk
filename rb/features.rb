# WordleAnswers SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module WordleAnswersFeatures
  def self.make_feature(name)
    case name
    when "base"
      WordleAnswersBaseFeature.new
    when "ratelimit"
      WordleAnswersRatelimitFeature.new
    when "retry"
      WordleAnswersRetryFeature.new
    when "test"
      WordleAnswersTestFeature.new
    when "timeout"
      WordleAnswersTimeoutFeature.new
    else
      WordleAnswersBaseFeature.new
    end
  end
end
