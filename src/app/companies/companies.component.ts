import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';


@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html'
})
export class CompaniesComponent implements OnInit {
    mainListdata = [];

    constructor(
        private readonly _userSvc: UserService
    ) {

    }
    ngOnInit() {
        this._userSvc.getData().subscribe(data => {
            this.mainListdata = data;
            this.modifydata();
        });
    }

    modifydata() {
        let contacts = (ele) => {
            let contactsList = '';
            this.mainListdata['contacts'].filter((value, index) => {
                if (value['id'] === ele['id']) {
                    contactsList += value['name'].join(',')
                }
            })
            return contactsList;
        };
        let users = (ele) => {
            let usersList = '';
            this.mainListdata['users'].filter((value, index) => {
                if (value['companyId'] === ele['id']) {
                    usersList += value['name'].join(',')
                }
            })
            return usersList;
        };
        for (const element of this.mainListdata) {
            element['companies']['contacts'] = contacts(element);
            element['companies']['users'] = users(element);
        }
    }
}