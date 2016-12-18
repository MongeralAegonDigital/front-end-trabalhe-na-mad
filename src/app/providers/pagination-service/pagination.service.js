export class PaginationService {

  constructor ($log) {
    'ngInject';

    this.$log = $log;
    this.paginatedList = [];
    this.ITEMS_PER_PAGE = 4;
    
  }

  pageItems(rawList) {
    let nPages = Math.floor(rawList.length/this.ITEMS_PER_PAGE) + 1;
    this.instanceList(nPages);
    for (let i=0, limit=0 ; i<nPages; i++, limit += this.ITEMS_PER_PAGE){
        this.paginatedList[i] = rawList.slice(limit, limit + this.ITEMS_PER_PAGE);
    }
    return this.paginatedList;
  }

  instanceList(nPages){
    this.$log.info("Initializing list");
    for(let i=0; i<nPages; i++){
        this.paginatedList[i] = new Array()
    }    
  }
  

}
