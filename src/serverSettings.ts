import { Settings } from './models/settings.model';

import * as prodSettings from '../environments/settings.prod.json';
import * as devSettings from '../environments/settings.dev.json';
import * as defaultSettings from '../environments/settings.json';

export class ServerSettings {
    private static instance: ServerSettings;
    private settings: Settings;

    private constructor() {
        this.settings = this.getServerSettings();
    }

    public static getInstance(): ServerSettings {
        if(!this.instance){
            this.instance = new ServerSettings();
        }
        return this.instance;
    }

    get Settings(): Settings{
        return this.settings;
    }

    private getServerSettings(): Settings {
        const setting = Object.assign(new Settings());
        if(process.env.NODE_ENV === 'production'){
            return Object.assign(setting, prodSettings);
        }
        return Object.assign(setting, devSettings);
    }
}