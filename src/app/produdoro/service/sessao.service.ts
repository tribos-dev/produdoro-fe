import { Injectable } from '@angular/core';
import { SessionSetting } from './setting.enum';

@Injectable({
    providedIn: 'root'
  })
  export class SessaoService {
    get<T>(key: SessionSetting, defaultValue: T | null = null): T {
      const value = sessionStorage.getItem(key);
      if (value === null && defaultValue !== null) {
        this.set(key, defaultValue);
        return defaultValue;
      }
      if (value === null) {
        throw new Error(`Key ${key} is used before its value is set`);
      }
      return JSON.parse(value);
    }
  
    set<T>(key: SessionSetting, value: T): void {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }
  