# Typed models for the WordleAnswers SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Answer(TypedDict, total=False):
    answer: str
    date: str
    day_name: str
    difficulty: float
    editor: str
    game: int


class AnswerLoadMatch(TypedDict, total=False):
    answer: str
    date: str
    day_name: str
    difficulty: float
    editor: str
    game: int


AnswerListMatch = TypedDict('AnswerListMatch', {
    "answer": str,
    "date": str,
    "from": str,
    "game": int,
    "order": str,
    "page": int,
    "per_page": int,
    "to": str,
}, total=False)


class Today(TypedDict, total=False):
    answer: str
    date: str
    day_name: str
    difficulty: float
    editor: str
    game: int
    hints: dict


class TodayLoadMatch(TypedDict, total=False):
    answer: str
    date: str
    day_name: str
    difficulty: float
    editor: str
    game: int
    hints: dict
