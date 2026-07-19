export interface User {
    username: string;
    password: string;
}

export function generateUser(): User {

    const timestamp = Date.now();

    return {
        username: `easyUser${timestamp}`,
        password: "Easy@123"
    };

}