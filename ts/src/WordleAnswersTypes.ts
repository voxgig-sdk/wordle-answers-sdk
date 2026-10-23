// Typed models for the WordleAnswers SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Answer {
  answer?: string
  date?: string
  day_name?: string
  difficulty?: number
  editor?: string
  game?: number
}

export interface AnswerLoadMatch {
  answer?: string
  date?: string
  day_name?: string
  difficulty?: number
  editor?: string
  game?: number

  // Selects a custom action instead of the plain load:
  //   'latest'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AnswerListMatch {
  answer?: string
  date?: string
  from?: string
  game?: number
  order?: string
  page?: number
  per_page?: number
  to?: string
}

export interface Today {
  answer?: string
  date?: string
  day_name?: string
  difficulty?: number
  editor?: string
  game?: number
  hints?: Record<string, any>
}

export interface TodayLoadMatch {
  answer?: string
  date?: string
  day_name?: string
  difficulty?: number
  editor?: string
  game?: number
  hints?: Record<string, any>
}

