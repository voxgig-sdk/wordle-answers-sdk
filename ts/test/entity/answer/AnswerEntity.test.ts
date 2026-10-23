

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { WordleAnswersSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('AnswerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WORDLE_ANSWERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('WORDLE_ANSWERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WordleAnswersSDK.test()
    const ent = testsdk.Answer()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('answer hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of WordleAnswersSDK.test(offline).Answer().stream('list')) { }
    }, /offline/)

    for await (const _item of WordleAnswersSDK.test(offline).Answer()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = WordleAnswersSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Answer().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of WordleAnswersSDK.test().Answer().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new WordleAnswersSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Answer().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Answer().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = WordleAnswersSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Answer().list({"answer":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WORDLE_ANSWERS_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'answer.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"answer":{"a":true,"h":"Answer","n":"answer","r":false,"sh":"The solution word, uppercase","t":"`$STRING`","key$":"answer","index$":0},"date":{"a":true,"fo":"date","h":"Date","n":"date","r":false,"sh":"Puzzle date (YYYY-MM-DD)","t":"`$STRING`","key$":"date","index$":1},"day_name":{"a":true,"h":"Day Name","n":"day_name","r":false,"sh":"Weekday name","t":"`$STRING`","key$":"day_name","index$":2},"difficulty":{"a":true,"h":"Difficulty","n":"difficulty","r":false,"sh":"Difficulty rating from 1 to 5, one decimal","t":"`$NUMBER`","key$":"difficulty","index$":3},"editor":{"a":true,"h":"Editor","n":"editor","r":false,"sh":"Editorial attribution","t":"`$STRING`","key$":"editor","index$":4},"game":{"a":true,"h":"Game","n":"game","r":false,"sh":"Wordle game number","t":"`$INTEGER`","key$":"game","index$":5}},"name":"answer","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v1/wordle/answers","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"answer","or":"answer","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"date","or":"date","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"from","or":"from","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"game","or":"game","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"ex":50,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"k":"query","n":"to","or":"to","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/api/v1/wordle/answers","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"wordle"},{"lit":"answers"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v1/wordle/answers/latest","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/v1/wordle/answers/latest","q":{"$action":"latest"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v1"},{"lit":"wordle"},{"lit":"answers"},{"lit":"latest"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"answer","name__orig":"answer","Name":"Answer","name_":"answer","name-":"answer","NAME":"ANSWER","index$":0}, {"active":true,"entity":"answer","key$":"BasicAnswerFlow","kind":"basic","name":"BasicAnswerFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"answer_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"answer_ref01","srcdatavar":"answer_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-answer_ref01"}}],"index$":1}]}, 'Answer', {"GET /api/v1/wordle/answers":{"protocol":"http","parameters":[{"name":"game","in":"query","description":"Exact game number","required":false,"schema":{"type":"integer"},"index$":0},{"name":"date","in":"query","description":"Exact date (YYYY-MM-DD)","required":false,"schema":{"type":"string","format":"date"},"index$":1},{"name":"from","in":"query","description":"Range start date (YYYY-MM-DD)","required":false,"schema":{"type":"string","format":"date"},"index$":2},{"name":"to","in":"query","description":"Range end date (YYYY-MM-DD)","required":false,"schema":{"type":"string","format":"date"},"index$":3},{"name":"answer","in":"query","description":"Search by answer word","required":false,"schema":{"type":"string"},"index$":4},{"name":"order","in":"query","description":"Sort direction","required":false,"schema":{"type":"string","enum":["asc","desc"]},"index$":5},{"name":"page","in":"query","description":"1-based page number","required":false,"schema":{"type":"integer","minimum":1},"index$":6},{"name":"per_page","in":"query","description":"Results per page (1-200)","required":false,"schema":{"type":"integer","minimum":1,"maximum":200,"default":50},"index$":7}]},"GET /api/v1/wordle/answers/latest":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let answer_ref01_data = Object.values(setup.data.existing.answer)[0] as any

    // LIST
    const answer_ref01_ent = client.Answer()
    const answer_ref01_match: any = {}

    const answer_ref01_list = (await answer_ref01_ent.list(answer_ref01_match)).map((e: any) => e.data())


    // LOAD
    const answer_ref01_match_dt0: any = {}
    const answer_ref01_data_dt0 = (await answer_ref01_ent.load(answer_ref01_match_dt0)).data()
    assert(null != answer_ref01_data_dt0)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/answer/AnswerTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = WordleAnswersSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['answer01','answer02','answer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WORDLE_ANSWERS_TEST_ANSWER_ENTID': idmap,
    'WORDLE_ANSWERS_TEST_LIVE': 'FALSE',
    'WORDLE_ANSWERS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WORDLE_ANSWERS_TEST_ANSWER_ENTID']

  const live = 'TRUE' === env.WORDLE_ANSWERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WORDLE_ANSWERS_TEST_ANSWER_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new WordleAnswersSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.WORDLE_ANSWERS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
