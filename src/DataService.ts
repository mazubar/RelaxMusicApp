interface User {
    username: string;
    password: string;
}

class DataService {
    private static DB_URL="http://localhost:4000";

    public async login(username: string, password: string): Promise<boolean> {
        let usersResponsePromise: Promise<Response> = fetch (`${DataService.DB_URL}/users?username=${username}`);
        let response: Response = await usersResponsePromise;
        let jsonPromise: Promise<User[]> = response.json();
        let users = await jsonPromise;
        if (users.length === 0) {
            return false;
        }
        let user = users[0];
        if (user.password === password) {
            return true;
        }
        return false;
    }
}


export const dataService= new DataService();