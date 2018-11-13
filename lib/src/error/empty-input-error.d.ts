export declare class EmptyInputError extends Error {
    constructor(commandType: 'create' | 'update' | 'set' | 'put' | 'remove');
}
