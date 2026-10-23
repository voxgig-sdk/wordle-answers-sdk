import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "answer",
    "accessor": "Answer",
    "op": "list",
    "method": "GET",
    "path": "/api/v1/wordle/answers",
    "args": [],
    "select": {
      "answer": "v1",
      "date": "v1",
      "from": "v1",
      "game": "v1",
      "order": "v1",
      "page": "v1",
      "per_page": 50,
      "to": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "game",
      "date",
      "from",
      "to",
      "answer",
      "order",
      "page",
      "per_page"
    ],
    "queryArgs": [
      {
        "name": "answer",
        "wire": "answer"
      },
      {
        "name": "date",
        "wire": "date"
      },
      {
        "name": "from",
        "wire": "from"
      },
      {
        "name": "game",
        "wire": "game"
      },
      {
        "name": "order",
        "wire": "order"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "per_page",
        "wire": "per_page"
      },
      {
        "name": "to",
        "wire": "to"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "source": "wordlehintstoday.org",
      "version": "1.0",
      "count": 50,
      "total": 1506,
      "page": 1,
      "per_page": 50,
      "has_more": true,
      "results": [
        {
          "game": 1506,
          "date": "2026-08-02",
          "day_name": "Sunday",
          "editor": "Wordle Hints Today Editorial Team",
          "answer": "GLOBE",
          "difficulty": 3.8
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "answer",
    "accessor": "Answer",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/wordle/answers/latest",
    "action": "latest",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "game": 1506,
      "date": "2026-08-02",
      "day_name": "Sunday",
      "editor": "Wordle Hints Today Editorial Team",
      "answer": "GLOBE",
      "difficulty": 3.8
    },
    "idField": "id"
  },
  {
    "entity": "today",
    "accessor": "Today",
    "op": "load",
    "method": "GET",
    "path": "/api/v1/wordle/today",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "game": 1506,
      "date": "2026-08-02",
      "day_name": "Sunday",
      "editor": "Wordle Hints Today Editorial Team",
      "answer": "GLOBE",
      "difficulty": 3.8,
      "hints": {
        "category": "Objects",
        "letters": 5,
        "first_letter": "G",
        "definition": "A spherical representation of the earth."
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
