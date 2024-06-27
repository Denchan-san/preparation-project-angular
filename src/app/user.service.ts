import { EventEmitter, Injectable } from "@angular/core";

import { Subject } from "rxjs";

//short cut to not write this at app.module.ts in "providers"
@Injectable({ 
    providedIn:'root'
})
export class UserService {
    // activatedEmitter = new EventEmitter<boolean>();
    activatedEmitter = new Subject<boolean>();

}