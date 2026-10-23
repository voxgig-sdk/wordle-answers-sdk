"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'WordleAnswers',
        slug: "wordle-answers",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "now": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://wordlehintstoday.org",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            answer: {},
            today: {},
        }
    };
    entity = {
        "answer": {
            "fields": [
                {
                    "name": "answer",
                    "title": "Answer",
                    "type": "`$STRING`",
                    "short": "The solution word, uppercase"
                },
                {
                    "name": "date",
                    "title": "Date",
                    "type": "`$STRING`",
                    "short": "Puzzle date (YYYY-MM-DD)",
                    "format": "date"
                },
                {
                    "name": "day_name",
                    "title": "Day Name",
                    "type": "`$STRING`",
                    "short": "Weekday name"
                },
                {
                    "name": "difficulty",
                    "title": "Difficulty",
                    "type": "`$NUMBER`",
                    "short": "Difficulty rating from 1 to 5, one decimal"
                },
                {
                    "name": "editor",
                    "title": "Editor",
                    "type": "`$STRING`",
                    "short": "Editorial attribution"
                },
                {
                    "name": "game",
                    "title": "Game",
                    "type": "`$INTEGER`",
                    "short": "Wordle game number"
                }
            ],
            "name": "answer",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/wordle/answers",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "wordle"
                                },
                                {
                                    "lit": "answers"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "wordle",
                                "answers"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "answer",
                                        "orig": "answer",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "field": true
                                    },
                                    {
                                        "name": "date",
                                        "orig": "date",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "field": true
                                    },
                                    {
                                        "name": "from",
                                        "orig": "from",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "game",
                                        "orig": "game",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "field": true
                                    },
                                    {
                                        "name": "order",
                                        "orig": "order",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "per_page",
                                        "orig": "per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 50
                                    },
                                    {
                                        "name": "to",
                                        "orig": "to",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/wordle/answers/latest",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "wordle"
                                },
                                {
                                    "lit": "answers"
                                },
                                {
                                    "lit": "latest"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "wordle",
                                "answers",
                                "latest"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {
                                "$action": "latest"
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "today": {
            "fields": [
                {
                    "name": "answer",
                    "title": "Answer",
                    "type": "`$STRING`"
                },
                {
                    "name": "date",
                    "title": "Date",
                    "type": "`$STRING`",
                    "format": "date"
                },
                {
                    "name": "day_name",
                    "title": "Day Name",
                    "type": "`$STRING`"
                },
                {
                    "name": "difficulty",
                    "title": "Difficulty",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "editor",
                    "title": "Editor",
                    "type": "`$STRING`"
                },
                {
                    "name": "game",
                    "title": "Game",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "hints",
                    "title": "Hints",
                    "type": "`$OBJECT`",
                    "short": "Progressive hint levels"
                }
            ],
            "name": "today",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/v1/wordle/today",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "wordle"
                                },
                                {
                                    "lit": "today"
                                }
                            ],
                            "parts": [
                                "api",
                                "v1",
                                "wordle",
                                "today"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map