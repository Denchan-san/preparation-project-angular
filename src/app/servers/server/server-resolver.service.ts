import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { ServersService } from "../servers.service";

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<{id: number, name: string, status: string}> {

    constructor(private serversService: ServersService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
        return this.serversService.getServer(+route.params['id']); //"+" is equal to Server() 
    }
}