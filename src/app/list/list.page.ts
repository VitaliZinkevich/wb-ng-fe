import { Component, OnInit } from '@angular/core'
import { SearchFormService } from './../services/search-form.service'
@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss'],
})
export class ListPage implements OnInit {
    public searchData

    constructor(private searchFormService: SearchFormService) {
        this.searchData = this.searchFormService.getSearchForm().value
    }

    public ngOnInit() {
        // this.searchData = this.searchFormService.getSavedForm()
    }
}
