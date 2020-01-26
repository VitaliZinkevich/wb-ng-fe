import { Component, OnInit } from '@angular/core';
import { SearchFormService } from './../services/search-form.service';
@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss'],
})
export class ListPage implements OnInit {
    public searchData;
    // public items: Array<{ title: string; note: string; icon: string }> = [];
    // private selectedItem: any;
    // private icons = [
    //     'flask',
    //     'wifi',
    //     'beer',
    //     'football',
    //     'basketball',
    //     'paper-plane',
    //     'american-football',
    //     'boat',
    //     'bluetooth',
    //     'build',
    // ];
    constructor(private searchFormService: SearchFormService) {
        // for (let i = 1; i < 11; i++) {
        //     this.items.push({
        //         title: 'Item ' + i,
        //         note: 'This is item #' + i,
        //         icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        //     });
        // }
        this.searchData = this.searchFormService.getSearchForm().value;
    }

    public ngOnInit() {
        this.searchData = this.searchFormService.getSavedForm();
        // console.log(this.searchData);
        // this.searchFormService.getSearchForm().valueChanges.subscribe(form => {
        //     console.log(form);
        // });
    }

    // add back when alpha.4 is out
    // navigate(item) {
    //   this.router.navigate(['/list', JSON.stringify(item)]);
    // }
}
