import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { 

              }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; //Number() or '+'
    this.server = this.serversService.getServer(id);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(Number(params['id'])); //Number() or '+'
        }
      );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});  //relativeTo is added to not define the whole route, just add that 'edit' at the end of route that we have retrived
  }
}
