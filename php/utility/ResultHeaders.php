<?php
declare(strict_types=1);

// WordleAnswers SDK utility: result_headers

class WordleAnswersResultHeaders
{
    public static function call(WordleAnswersContext $ctx): ?WordleAnswersResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
