# frozen_string_literal: true

# Typed models for the WordleAnswers SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Answer entity data model.
#
# @!attribute [rw] answer
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] day_name
#   @return [String, nil]
#
# @!attribute [rw] difficulty
#   @return [Float, nil]
#
# @!attribute [rw] editor
#   @return [String, nil]
#
# @!attribute [rw] game
#   @return [Integer, nil]
Answer = Struct.new(
  :answer,
  :date,
  :day_name,
  :difficulty,
  :editor,
  :game,
  keyword_init: true
)

# Request payload for Answer#load.
#
# @!attribute [rw] answer
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] day_name
#   @return [String, nil]
#
# @!attribute [rw] difficulty
#   @return [Float, nil]
#
# @!attribute [rw] editor
#   @return [String, nil]
#
# @!attribute [rw] game
#   @return [Integer, nil]
AnswerLoadMatch = Struct.new(
  :answer,
  :date,
  :day_name,
  :difficulty,
  :editor,
  :game,
  keyword_init: true
)

# Request payload for Answer#list.
#
# @!attribute [rw] answer
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] from
#   @return [String, nil]
#
# @!attribute [rw] game
#   @return [Integer, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] per_page
#   @return [Integer, nil]
#
# @!attribute [rw] to
#   @return [String, nil]
AnswerListMatch = Struct.new(
  :answer,
  :date,
  :from,
  :game,
  :order,
  :page,
  :per_page,
  :to,
  keyword_init: true
)

# Today entity data model.
#
# @!attribute [rw] answer
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] day_name
#   @return [String, nil]
#
# @!attribute [rw] difficulty
#   @return [Float, nil]
#
# @!attribute [rw] editor
#   @return [String, nil]
#
# @!attribute [rw] game
#   @return [Integer, nil]
#
# @!attribute [rw] hints
#   @return [Hash, nil]
Today = Struct.new(
  :answer,
  :date,
  :day_name,
  :difficulty,
  :editor,
  :game,
  :hints,
  keyword_init: true
)

# Request payload for Today#load.
#
# @!attribute [rw] answer
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] day_name
#   @return [String, nil]
#
# @!attribute [rw] difficulty
#   @return [Float, nil]
#
# @!attribute [rw] editor
#   @return [String, nil]
#
# @!attribute [rw] game
#   @return [Integer, nil]
#
# @!attribute [rw] hints
#   @return [Hash, nil]
TodayLoadMatch = Struct.new(
  :answer,
  :date,
  :day_name,
  :difficulty,
  :editor,
  :game,
  :hints,
  keyword_init: true
)

