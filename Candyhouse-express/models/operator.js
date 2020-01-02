// 引用基础模型
const Base = require('./base.js');

// 定义用户模型并基础基础模型
class Operator extends Base {
  // 定义参数默认值为 operator 管理员表
  constructor(props = 'operator') {
    super(props);
  }
}

module.exports = new Operator()