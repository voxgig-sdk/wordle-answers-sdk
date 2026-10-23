import { WordleAnswersEntityBase } from '../WordleAnswersEntityBase';
import type { WordleAnswersSDK } from '../WordleAnswersSDK';
import type { Control } from '../types';
import type { Answer, AnswerLoadMatch, AnswerListMatch } from '../WordleAnswersTypes';
declare class AnswerEntity extends WordleAnswersEntityBase<Answer> {
    constructor(client: WordleAnswersSDK, entopts: any);
    make(this: AnswerEntity): AnswerEntity;
    load(this: any, reqmatch?: AnswerLoadMatch, ctrl?: Control): Promise<AnswerEntity>;
    list(this: any, reqmatch?: AnswerListMatch, ctrl?: Control): Promise<AnswerEntity[]>;
}
export { AnswerEntity };
