export const initialState: IState = {
    notes: []
};

export interface Note {
    _id: string
    content: string,
    todos: [],
    bgColor: string,
    txtColor: string,
    imgs: []
}

export interface IState {
    notes: Note[];
}