import { WordleAnswersEntityBase } from '../WordleAnswersEntityBase';
import type { WordleAnswersSDK } from '../WordleAnswersSDK';
import type { Control } from '../types';
import type { Today, TodayLoadMatch } from '../WordleAnswersTypes';
declare class TodayEntity extends WordleAnswersEntityBase<Today> {
    constructor(client: WordleAnswersSDK, entopts: any);
    make(this: TodayEntity): TodayEntity;
    load(this: any, reqmatch?: TodayLoadMatch, ctrl?: Control): Promise<TodayEntity>;
}
export { TodayEntity };
