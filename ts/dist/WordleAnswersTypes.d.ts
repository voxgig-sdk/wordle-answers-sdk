export interface Answer {
    answer?: string;
    date?: string;
    day_name?: string;
    difficulty?: number;
    editor?: string;
    game?: number;
}
export interface AnswerLoadMatch {
    answer?: string;
    date?: string;
    day_name?: string;
    difficulty?: number;
    editor?: string;
    game?: number;
    $action?: string;
    [action: string]: any;
}
export interface AnswerListMatch {
    answer?: string;
    date?: string;
    from?: string;
    game?: number;
    order?: string;
    page?: number;
    per_page?: number;
    to?: string;
}
export interface Today {
    answer?: string;
    date?: string;
    day_name?: string;
    difficulty?: number;
    editor?: string;
    game?: number;
    hints?: Record<string, any>;
}
export interface TodayLoadMatch {
    answer?: string;
    date?: string;
    day_name?: string;
    difficulty?: number;
    editor?: string;
    game?: number;
    hints?: Record<string, any>;
}
