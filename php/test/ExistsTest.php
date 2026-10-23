<?php
declare(strict_types=1);

// WordleAnswers SDK exists test

require_once __DIR__ . '/../wordleanswers_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = WordleAnswersSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
