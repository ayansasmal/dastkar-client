import { Injectable } from '@angular/core';

import { BaseService } from 'app/base.service';

@Injectable()
export class LoginHelperService {

    constructor(private baseService: BaseService) {
    }

    generateAuthKey(): void {
        this.baseService.setAuthKey('abcdefgh123456789');
    }
}
