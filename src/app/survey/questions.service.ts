import { BehaviorSubject, Observable } from 'rxjs';
import { questions } from './questions';

export class QuestionService {
    public questions: Observable<any>;
    private _questions: BehaviorSubject<any>;
    constructor() {
        this._questions = new BehaviorSubject<any>([]);
        this.questions = this._questions.asObservable();
    }

    public get_data(): void {
        this._questions.next(questions);
    }
}
