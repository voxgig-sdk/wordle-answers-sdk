<?php
declare(strict_types=1);

// Typed models for the WordleAnswers SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Answer entity data model. */
class Answer
{
    public ?string $answer = null;
    public ?string $date = null;
    public ?string $day_name = null;
    public ?float $difficulty = null;
    public ?string $editor = null;
    public ?int $game = null;
}

/** Request payload for Answer#load. */
class AnswerLoadMatch
{
    public ?string $answer = null;
    public ?string $date = null;
    public ?string $day_name = null;
    public ?float $difficulty = null;
    public ?string $editor = null;
    public ?int $game = null;
}

/** Request payload for Answer#list. */
class AnswerListMatch
{
    public ?string $answer = null;
    public ?string $date = null;
    public ?string $from = null;
    public ?int $game = null;
    public ?string $order = null;
    public ?int $page = null;
    public ?int $per_page = null;
    public ?string $to = null;
}

/** Today entity data model. */
class Today
{
    public ?string $answer = null;
    public ?string $date = null;
    public ?string $day_name = null;
    public ?float $difficulty = null;
    public ?string $editor = null;
    public ?int $game = null;
    public ?array $hints = null;
}

/** Request payload for Today#load. */
class TodayLoadMatch
{
    public ?string $answer = null;
    public ?string $date = null;
    public ?string $day_name = null;
    public ?float $difficulty = null;
    public ?string $editor = null;
    public ?int $game = null;
    public ?array $hints = null;
}

