import { Question, QUESTION_TYPES } from '../interfaces/interfaces';

export const questions: Question[] = [
    {
        text: 'Please select your age group',
        answers: [
            {
                value: 0,
                text: 'Below 18'
            }, {
                value: 1,
                text: '18-24'
            }, {
                value: 2,
                text: '25-34'
            }, {
                value: 3,
                text: '35-44'
            }, {
                value: 4,
                text: '45-54'
            }, {
                value: 5,
                text: '55 And Above'
            },
        ],
        type: QUESTION_TYPES.SINGLE
    },
    {
        text: 'Please select your gender',
        answers: [
            {
                value: 0,
                text: 'Male'
            }, {
                value: 1,
                text: 'Female'
            }, {
                value: 99,
                text: 'Prefer not to answer'
            }
        ],
        type: QUESTION_TYPES.SINGLE
    },
    {
        text: 'Please select the town(s) you have visited in the past year',
        answers: [
            {
                value: 0,
                text: 'Sofia',
                group: 'Bulgaria'
            }, {
                value: 1,
                text: 'Plovdiv',
                group: 'Bulgaria'
            }, {
                value: 2,
                text: 'Yambol',
                group: 'Bulgaria'
            }, {
                value: 3,
                text: 'New York',
                group: 'United States'
            }, {
                value: 4,
                text: 'Chicago',
                group: 'United State'
            }, {
                value: 5,
                text: 'Madison',
                group: 'United State'
            }, {
                value: 6,
                text: 'Tokio',
                group: 'Japan'
            }, {
                value: 7,
                text: 'Osaka',
                group: 'Japan'
            }, {
                value: 8,
                text: 'Kyoto',
                group: 'Japan'
            },
        ],
        type: QUESTION_TYPES.MULTI
    },
];

