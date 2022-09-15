export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: "",

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: "",

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  isShowColor: true,

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "CafeNokia",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oUcVN5nNEV4cc0QyCnIaerixqTBg",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "WSjd41XINEZaKW3pJxOyFztCy36PpvfIBOLm4jTgGVY",
      // 所在省份
      province: "黑龙江",
      // 所在城市
      city: "哈尔滨",
      // 新历生日, 仅用作获取星座运势, 格式必须
      //horoscopeDate: '5-8',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      //horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      //openUrl: "https://wangxinleo.cn",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {"type": "*生日", "name": "Vicky", "year": "2001", "date": "07-09"},
        {"type": "节日", "name": "相爱纪念日", "year": "2022", "date": "10-10"},
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {"type": "生日", "name": "Carp", "year": "2000", "date": "09-30"},
        {"type": "节日", "name": "初识纪念日", "year": "2020", "date": "09-02"},
		]
	},
	],
	 CALLBACK_TEMPLATE_ID: "WSjd41XINEZaKW3pJxOyFztCy36PpvfIBOLm4jTgGVY",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "Carp",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oUcVN5vuN8oHslB4-5w2mmlL2tVI",
    },
    
  ],

  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "天津",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "天津",

  
 festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {"type": "*生日", "name": "CafeNokia", "year": "2000", "date": "05-08"},
        {"type": "节日", "name": "恋爱纪念日", "year": "2022", "date": "08-01"},
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {"type": "生日", "name": "Carp", "year": "2000", "date": "09-30"},
        {"type": "节日", "name": "被搭讪纪念日", "year": "2022", "date": "01-29"},
		]


}
