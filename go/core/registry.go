package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAnswerEntityFunc func(client *WordleAnswersSDK, entopts map[string]any) WordleAnswersEntity

var NewTodayEntityFunc func(client *WordleAnswersSDK, entopts map[string]any) WordleAnswersEntity

