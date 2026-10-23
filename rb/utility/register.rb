# WordleAnswers SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

WordleAnswersUtility.registrar = ->(u) {
  u.clean = WordleAnswersUtilities::Clean
  u.clean_add = WordleAnswersUtilities::CleanAdd
  u.clean_explain = WordleAnswersUtilities::CleanExplain
  u.done = WordleAnswersUtilities::Done
  u.make_error = WordleAnswersUtilities::MakeError
  u.feature_add = WordleAnswersUtilities::FeatureAdd
  u.feature_hook = WordleAnswersUtilities::FeatureHook
  u.feature_init = WordleAnswersUtilities::FeatureInit
  u.fetcher = WordleAnswersUtilities::Fetcher
  u.make_fetch_def = WordleAnswersUtilities::MakeFetchDef
  u.make_context = WordleAnswersUtilities::MakeContext
  u.make_options = WordleAnswersUtilities::MakeOptions
  u.make_request = WordleAnswersUtilities::MakeRequest
  u.make_response = WordleAnswersUtilities::MakeResponse
  u.make_result = WordleAnswersUtilities::MakeResult
  u.make_point = WordleAnswersUtilities::MakePoint
  u.make_spec = WordleAnswersUtilities::MakeSpec
  u.make_url = WordleAnswersUtilities::MakeUrl
  u.param = WordleAnswersUtilities::Param
  u.prepare_auth = WordleAnswersUtilities::PrepareAuth
  u.prepare_body = WordleAnswersUtilities::PrepareBody
  u.prepare_headers = WordleAnswersUtilities::PrepareHeaders
  u.prepare_method = WordleAnswersUtilities::PrepareMethod
  u.prepare_params = WordleAnswersUtilities::PrepareParams
  u.prepare_path = WordleAnswersUtilities::PreparePath
  u.prepare_query = WordleAnswersUtilities::PrepareQuery
  u.graphql_body = WordleAnswersUtilities::GraphqlBody
  u.graphql_errors = WordleAnswersUtilities::GraphqlErrors
  u.result_basic = WordleAnswersUtilities::ResultBasic
  u.result_body = WordleAnswersUtilities::ResultBody
  u.result_headers = WordleAnswersUtilities::ResultHeaders
  u.transform_request = WordleAnswersUtilities::TransformRequest
  u.transform_response = WordleAnswersUtilities::TransformResponse
}
