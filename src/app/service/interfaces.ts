export enum QUESTION_TYPES {
    MULTI = 'multi',
    SINGLE = 'single'
}

export interface Answer {
    value: any;
    text: any;
    group?: any;
}

export interface Question {
    text: string;
    answers: Answer[];
    type: QUESTION_TYPES;
}
