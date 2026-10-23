# WordleAnswers SDK utility: prepare_body
require_relative 'media'
module WordleAnswersUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return WordleAnswersUtilities.raw_body(ctx.reqdata) if WordleAnswersUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
