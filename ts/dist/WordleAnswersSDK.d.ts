import { AnswerEntity } from './entity/AnswerEntity';
import { TodayEntity } from './entity/TodayEntity';
export type * from './WordleAnswersTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { WordleAnswersEntityBase } from './WordleAnswersEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class WordleAnswersSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Answer(entopts?: Record<string, any>): AnswerEntity;
    Today(entopts?: Record<string, any>): TodayEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): WordleAnswersSDK;
    tester(testopts?: any, sdkopts?: any): WordleAnswersSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof WordleAnswersSDK;
export { stdutil, config, BaseFeature, WordleAnswersEntityBase, WordleAnswersSDK, SDK, };
export type { DirectResult };
