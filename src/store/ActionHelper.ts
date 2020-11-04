import DataHelper from './DataHelper'
import ItemData from '../model/ItemData'
class ActionHelper {
    dataHelper: DataHelper = new DataHelper('memoData', 'id')
    memoList: Array<ItemData>

    constructor() {
        this.memoList = this.readData()
    }

    readData(): Array<ItemData> {
        let arrObj = this.dataHelper.readData()
        let arrItem = arrObj.map((ele:any) => {
            let item: ItemData = new ItemData()
            item.id = ele.id
            item.categoryId = ele.categoryId
            item.title = ele.title
            item.content = ele.content
            item.createTime = ele.createTime
            return item
        })
        return arrItem
    }
}
export default ActionHelper