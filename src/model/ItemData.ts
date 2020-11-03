class ItemData {
    id!: number
    categoryId!: number
    title!: string
    content!: string
    createTime!: string

    constructor(id: number = -1, categoryId: number = -1, title: string = '', content: string = '') {
        this.id = id
        this.categoryId = categoryId
        this.title = title
        this.content = content
        this.createTime = Date.now().toString()
    }
}