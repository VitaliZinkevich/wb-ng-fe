import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchFormService } from './../services/search-form.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    // @ViewChild('searchForm', { static: true }) private searchFormChangesSubscription: NgForm;
    public searchForm: NgForm;
    constructor(private searchFormService: SearchFormService) {
        console.log(this.searchFormService.getSearchForm());
        this.searchForm = this.searchFormService.getSearchForm();
    }

    public ngOnInit() {
        // this.searchFormChangesSubscription.form.valueChanges.subscribe(
        //     form => {
        //         console.log(form);
        //     }
        // );
    }
    private logForm(todo) {
        console.log(todo);
    }
}
