# WordleAnswers SDK exists test

import pytest
from wordleanswers_sdk import WordleAnswersSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = WordleAnswersSDK.test(None, None)
        assert testsdk is not None
