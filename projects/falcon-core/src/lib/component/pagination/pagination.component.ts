import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'falcon-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() totalPage: number = 10;
  @Input() pageSize: number = 10;
  @Output() paginationEvent = new EventEmitter<number>();
  paginationSize: number[] = new Array(10);
  preDisable: boolean = true;
  nextDisable: boolean = false;
  private start: number;
  private end: number;
  currentPage: number = 1;
  firstLoad: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.firstLoad = true;
    this.paginationSize = [
      ...Array.from(
        {
          length:
            this.totalPage < this.pageSize
              ? this.totalPage
              : this.pageSize,
        },
        (_, i) => i + 1,
      ),
    ];
    if (this.paginationSize.length == this.totalPage)
      this.nextDisable = true;
  }

  receiveBtnChange($event) {
    this.firstLoad = false;
    this.currentPage = $event;
    if ($event == this.totalPage) this.nextDisable = true;
    else if ($event == 1) {
      this.nextDisable = false;
      this.preDisable = true;
    } else {
      this.nextDisable = false;
      this.preDisable = false;
    }

    if ($event === 'previous') {
      this.preDisable = true;
    } else if ($event === 'next') {
    } else {
      if (this.totalPage <= this.pageSize) {
        this.paginationSize = [
          ...Array.from({ length: this.totalPage }, (_, i) => i + 1),
        ];
      } else {
        // start
        if ($event < 6) {
          this.start = 1;
        } else {
          if ($event + 5 < this.totalPage) {
            this.start = $event - 5;
          } else {
            this.start = this.totalPage - this.pageSize;
          }
        }
        //End
        if ($event + 5 < this.totalPage) {
          this.end = this.start + 9;
        } else {
          this.end = this.totalPage;
        }
        this.paginationSize = this.range(this.start, this.end);
      }
    }
    this.paginationEvent.emit($event);
  }

  private range(start, end) {
    return Array(Math.abs(start - end) + 1)
      .fill(start)
      .map((v, i) => v + i * (start > end ? -1 : 1));
  }
}
