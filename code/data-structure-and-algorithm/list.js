// 线性表
class List {
  #data = [];

  constructor(...values) {
    this.#data.push(...values);
  }

  // 清空表函数
  clean() {
    if (this.length() == 0) {
      return false;
    } else {
      this.#data = [];
      return true;
    }
  }

  // 根据索引删除元素
  removeAt(index) {
    // 如果index的类型不对
    if (typeof index !== "number") {
      // 抛出错误
      throw new TypeError("错误: `index`必须是数字类型");
    } else {
      // 如果索引不存在
      if (this.length() < index) {
        // 抛出错误
        throw new RangeError("错误: 超出最大有效值");
      } else {
        // 否则删除元素
        this.#data.splice(index, 1);
        // 并返回true值
        return true;
      }
    }
  }

  // 根据索引查找元素
  findAt(index) {
    if (typeof index !== "number") {
      throw new TypeError("错误: index必须是数字类型");
    } else {
      if (index > this.length()) {
        throw new RangeError("错误: 超出最大有效值");
      } else {
        return this.#data.filter((...args) => {
          return args[1] == index;
        });
      }
    }
  }

  // 根据索引添加元素
  insertAt(index, value) {
    if (this.length() !== 0) {
      if (typeof index !== "number") {
        throw new TypeError("错误: index必须是数字类型");
      } else {
        let arr = [];
        for (let i = 0; i < this.length() + 1; i++) {
          if (i == index) {
            arr[i] = value;
          } else {
            arr[i] = this.findAt(index);
          }
        }
        this.#data = arr;
      }
    } else {
      this.push(value);
    }
  }

  // 向列表的末尾添加元素
  push(...value) {
    this.#data.push(...value);
  }

  // 判断是否为空
  isEmpty() {
    if (this.#data.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  // 返回列表长度
  length() {
    return this.#data.length;
  }
}

List.createList = (...values) => {
  return new List(...values);
};

const list = List.createList("Hello list");

list.removeAt(0)

console.log(list.length())

list.insertAt(0, "Hello World");

console.log(list.length())
