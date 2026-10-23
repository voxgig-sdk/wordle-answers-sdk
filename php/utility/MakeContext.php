<?php
declare(strict_types=1);

// WordleAnswers SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class WordleAnswersMakeContext
{
    public static function call(array $ctxmap, ?WordleAnswersContext $basectx): WordleAnswersContext
    {
        return new WordleAnswersContext($ctxmap, $basectx);
    }
}
