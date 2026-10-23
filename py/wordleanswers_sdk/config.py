# WordleAnswers SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "WordleAnswers",
            "slug": "wordle-answers",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://wordlehintstoday.org",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "answer": {},
                "today": {},
            },
        },
        "entity": {
      "answer": {
        "fields": [
          {
            "name": "answer",
            "title": "Answer",
            "type": "`$STRING`",
            "short": "The solution word, uppercase",
          },
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "short": "Puzzle date (YYYY-MM-DD)",
            "format": "date",
          },
          {
            "name": "day_name",
            "title": "Day Name",
            "type": "`$STRING`",
            "short": "Weekday name",
          },
          {
            "name": "difficulty",
            "title": "Difficulty",
            "type": "`$NUMBER`",
            "short": "Difficulty rating from 1 to 5, one decimal",
          },
          {
            "name": "editor",
            "title": "Editor",
            "type": "`$STRING`",
            "short": "Editorial attribution",
          },
          {
            "name": "game",
            "title": "Game",
            "type": "`$INTEGER`",
            "short": "Wordle game number",
          },
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
                    "lit": "api",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "wordle",
                  },
                  {
                    "lit": "answers",
                  },
                ],
                "parts": [
                  "api",
                  "v1",
                  "wordle",
                  "answers",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "args": {
                  "query": [
                    {
                      "name": "answer",
                      "orig": "answer",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "date",
                      "orig": "date",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "from",
                      "orig": "from",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "game",
                      "orig": "game",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "order",
                      "orig": "order",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "per_page",
                      "orig": "per_page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 50,
                    },
                    {
                      "name": "to",
                      "orig": "to",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
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
                    "lit": "api",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "wordle",
                  },
                  {
                    "lit": "answers",
                  },
                  {
                    "lit": "latest",
                  },
                ],
                "parts": [
                  "api",
                  "v1",
                  "wordle",
                  "answers",
                  "latest",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {
                  "$action": "latest",
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "today": {
        "fields": [
          {
            "name": "answer",
            "title": "Answer",
            "type": "`$STRING`",
          },
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "format": "date",
          },
          {
            "name": "day_name",
            "title": "Day Name",
            "type": "`$STRING`",
          },
          {
            "name": "difficulty",
            "title": "Difficulty",
            "type": "`$NUMBER`",
          },
          {
            "name": "editor",
            "title": "Editor",
            "type": "`$STRING`",
          },
          {
            "name": "game",
            "title": "Game",
            "type": "`$INTEGER`",
          },
          {
            "name": "hints",
            "title": "Hints",
            "type": "`$OBJECT`",
            "short": "Progressive hint levels",
          },
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
                    "lit": "api",
                  },
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "wordle",
                  },
                  {
                    "lit": "today",
                  },
                ],
                "parts": [
                  "api",
                  "v1",
                  "wordle",
                  "today",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
