export class Settings {
    apiUrl: string;
    logLevel: 'info' | 'debug' | 'warning' | 'error';
    database: {
        name: string;
        host: string;
        port: number;
        user: string;
        password: string;
        dialect: string;
    }
}