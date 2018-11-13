export declare class InvalidQueryRunnerRegistration extends Error {
    constructor(key: string, type: 'already-registered' | 'missing');
}
