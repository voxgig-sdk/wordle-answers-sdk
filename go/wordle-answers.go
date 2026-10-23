package voxgigwordleanswerssdk

import (
	"github.com/voxgig-sdk/wordle-answers-sdk/go/core"
	"github.com/voxgig-sdk/wordle-answers-sdk/go/entity"
	"github.com/voxgig-sdk/wordle-answers-sdk/go/feature"
	_ "github.com/voxgig-sdk/wordle-answers-sdk/go/utility"
)

// Type aliases preserve external API.
type WordleAnswersSDK = core.WordleAnswersSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type WordleAnswersEntity = core.WordleAnswersEntity
type StreamItem = core.StreamItem
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type WordleAnswersError = core.WordleAnswersError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewAnswerEntityFunc = func(client *core.WordleAnswersSDK, entopts map[string]any) core.WordleAnswersEntity {
		return entity.NewAnswerEntity(client, entopts)
	}
	core.NewTodayEntityFunc = func(client *core.WordleAnswersSDK, entopts map[string]any) core.WordleAnswersEntity {
		return entity.NewTodayEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewWordleAnswersSDK = core.NewWordleAnswersSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewWordleAnswersSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *WordleAnswersSDK  { return NewWordleAnswersSDK(nil) }
func Test() *WordleAnswersSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
