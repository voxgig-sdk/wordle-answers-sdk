# WordleAnswers SDK feature factory

from wordleanswers_sdk.feature.base_feature import WordleAnswersBaseFeature
from wordleanswers_sdk.feature.ratelimit_feature import WordleAnswersRatelimitFeature
from wordleanswers_sdk.feature.retry_feature import WordleAnswersRetryFeature
from wordleanswers_sdk.feature.test_feature import WordleAnswersTestFeature
from wordleanswers_sdk.feature.timeout_feature import WordleAnswersTimeoutFeature


_FEATURES = {
    "base": lambda: WordleAnswersBaseFeature(),
    "ratelimit": lambda: WordleAnswersRatelimitFeature(),
    "retry": lambda: WordleAnswersRetryFeature(),
    "test": lambda: WordleAnswersTestFeature(),
    "timeout": lambda: WordleAnswersTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
