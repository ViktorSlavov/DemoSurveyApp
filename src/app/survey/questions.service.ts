import { BehaviorSubject, Observable } from 'rxjs';
import { questions } from './questions';
import { Question } from '../interfaces/interfaces';

export class QuestionService {
    public questions: Observable<any>;
    private _questions: BehaviorSubject<Question[]>;
    constructor() {
        this._questions = new BehaviorSubject<Question[]>([]);
        this.questions = this._questions.asObservable();
    }

    public get_data(): void {
        this._questions.next(questions);
    }
}
