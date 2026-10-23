# WordleAnswers SDK utility: make_context

from projectname_sdk.core.context import WordleAnswersContext


def make_context_util(ctxmap, basectx):
    return WordleAnswersContext(ctxmap, basectx)
