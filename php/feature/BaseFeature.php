<?php
declare(strict_types=1);

// WordleAnswers SDK base feature

class WordleAnswersBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(WordleAnswersContext $ctx, array $options): void {}
    public function PostConstruct(WordleAnswersContext $ctx): void {}
    public function PostConstructEntity(WordleAnswersContext $ctx): void {}
    public function SetData(WordleAnswersContext $ctx): void {}
    public function GetData(WordleAnswersContext $ctx): void {}
    public function GetMatch(WordleAnswersContext $ctx): void {}
    public function SetMatch(WordleAnswersContext $ctx): void {}
    public function PrePoint(WordleAnswersContext $ctx): void {}
    public function PreSpec(WordleAnswersContext $ctx): void {}
    public function PreRequest(WordleAnswersContext $ctx): void {}
    public function PreResponse(WordleAnswersContext $ctx): void {}
    public function PreResult(WordleAnswersContext $ctx): void {}
    public function PreDone(WordleAnswersContext $ctx): void {}
    public function PreUnexpected(WordleAnswersContext $ctx): void {}
}
