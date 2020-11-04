// DataHelper类 - 负责 localStorage 操作
class DataHelper {
    dataKey: string;
    primaryKey: string;

    // 一、构造函数 --作用：为对象 添加 各种属性--------------------------
    constructor(dataKey: string, primaryKey: string) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }

    // 1.读取全部数据，返回数组(如果没有读到数据 就返回 空数组)------------
    readData(): any {
        //1.读取 本地数据(根据dataKey读取)
        let strData: string | null = localStorage.getItem(this.dataKey);

        //2.将 读取的 json数组字符串 转成数组对象        
        let arrData: any = [];
        if (strData != null) {
            arrData = JSON.parse(strData);
        }

        //3.返回 数组对象
        return arrData;
    }

    // 2.存入本地数据 -------------------------------------------------
    savaData(arrData: Array<Object>): void {
        //1.将数组 转成 json字符串
        let str: string = JSON.stringify(arrData);

        //2.将字符串 保存到 本地 localStorage 中
        localStorage.setItem(this.dataKey, str);
    }

    // 3.新增数据---------------------------
    addData(conStr: string): number {
        // 1.读取本地现有数据
        let arr: any = this.readData();

        // 2.创建一个评论对象, 并设置 评论内容属性
        let obj: any = {
            content: conStr,
        };

        //obj.id=1
        //obj['id'] = 1
        //obj[this.primaryKey] = 1

        // 3.1 自动生成 主键值 (id 值) {content:'讨厌'}
        let newId = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;

        // 3.2 将id值通过 中括号访问法 添加到 对象 {content:'讨厌',id:1}
        obj[this.primaryKey]= newId;

        // 4.将添加了 主键值 的 对象 追加到数组
        arr.push(obj);

        // 5.将数组 保存到 localStrorage 中
        this.savaData(arr);

        // 6.返回 id
        return newId;
    }

    // 4.删除数据 ---------------------------
    removeDataById(id: string | number): boolean {
        // 读取本地数组
        let arr = this.readData();

        // 查找要删除 评论对象的 下标，并保存 到本地
        let index = arr.findIndex((ele: any) => {
            return ele[this.primaryKey] == id;
        });

        // 如果下标 大于-1，则删除数组中该下标元素对象，并返回true
        if (index > -1) {
            arr.splice(index, 1);
            // 保存到本地
            this.savaData(arr);
            return true;
        }

        return false; // 否则 返回 false
    }
}

export default DataHelper;




