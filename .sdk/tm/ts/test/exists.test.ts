
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WordleAnswersSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = WordleAnswersSDK.test()
    equal(testsdk instanceof WordleAnswersSDK, true,
      'WordleAnswersSDK.test() must return a client synchronously')
  })

})
