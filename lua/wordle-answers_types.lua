-- Typed models for the WordleAnswers SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Answer
---@field answer? string
---@field date? string
---@field day_name? string
---@field difficulty? number
---@field editor? string
---@field game? number

---@class AnswerLoadMatch
---@field answer? string
---@field date? string
---@field day_name? string
---@field difficulty? number
---@field editor? string
---@field game? number

---@class AnswerListMatch
---@field answer? string
---@field date? string
---@field from? string
---@field game? number
---@field order? string
---@field page? number
---@field per_page? number
---@field to? string

---@class Today
---@field answer? string
---@field date? string
---@field day_name? string
---@field difficulty? number
---@field editor? string
---@field game? number
---@field hints? table

---@class TodayLoadMatch
---@field answer? string
---@field date? string
---@field day_name? string
---@field difficulty? number
---@field editor? string
---@field game? number
---@field hints? table

local M = {}

return M
