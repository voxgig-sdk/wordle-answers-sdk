# WordleAnswers SDK utility: make_context
require_relative '../core/context'
module WordleAnswersUtilities
  MakeContext = ->(ctxmap, basectx) {
    WordleAnswersContext.new(ctxmap, basectx)
  }
end
