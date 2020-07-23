export declare type HashPassword = (password: string, rounds: number) => Promise<string>;
export declare function hashPassword(password: string, rounds: number): Promise<string>;
export interface PasswordHasher<T = string> {
    hashPassword(password: T): Promise<T>;
    comparePassword(providePass: T, storedPass: T): Promise<boolean>;
}
export declare class BcryptHasherService implements PasswordHasher<string> {
    private readonly rounds;
    constructor(rounds: number);
    hashPassword(password: string): Promise<string>;
    comparePassword(providePass: string, storedPass: string): Promise<boolean>;
}
