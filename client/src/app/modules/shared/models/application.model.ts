export class ApplicationModel {
    UserID!: number
    FilterOptions!: FilterOtions
    RequestType!: number
}

export class FilterOtions {
    PageSize!: number
    PageNumber!: number
    SearchColumn!: string
    SearchValue!: string
    sortColumn!: string
    sortDirection!: number
}