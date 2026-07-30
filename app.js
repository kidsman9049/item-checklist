// 預設產品資料（可按需求自行增加欄位，如 supplier, expectedDate 等）
const defaultProducts = [
  {
    id: 1,
    name: "2026新款车载电动手机支架炫彩RGB高端无线充电仪表台导航支撑架",
    detail: "【亮银色】无线充电◆电动锁紧◆炫彩氛围灯◆加倍稳固◆随取随放",
    image: "https://gw.alicdn.com/bao/uploaded/i4/2219181800677/O1CN01DYAeZQ1Gs7Go5rlwG_!!2219181800677.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 2,
    name: "ANEX快速扳手AOA-19S2日本进口安力士多功能电动转换梅花套筒扳手",
    detail: "AOA-19S2",
    image: "https://gw.alicdn.com/bao/uploaded/i1/2215504660045/O1CN01L7RWSO1CCevuzHceB_!!2215504660045.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 3,
    name: "纯金属变形金刚车贴3D立体贴纸 汽车人标志车用装饰个性改装贴",
    detail: "3D变形金刚金属贴★正派",
    image: "https://gw.alicdn.com/bao/uploaded/i4/2057449637/O1CN01f4zpxN2L3nyPfTzQ9_!!2057449637.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 4,
    name: "Keith铠斯钛筷子 纯钛勺子餐叉便携户外筷勺礼盒装餐勺餐具套装",
    detail: "19cm空心方筷+刀叉勺3件套",
    image: "https://gw.alicdn.com/bao/uploaded/i2/2835571331/O1CN01bMOz631LheHoOqMLQ_!!2835571331.jpg_.webp",
    trackingNo: "",
    quantity: 2,
    arrived: false
  },
  {
    id: 5,
    name: "磁吸金刚网纱窗网自装窗户防蚊家用自粘式隐形定制免打孔沙窗门帘",
    detail: "70x120cm;【便捷小窗口+赠送专利安全锁扣】金刚网灰纱+灰框",
    image: "https://gw.alicdn.com/bao/uploaded/i2/728381129/O1CN01xX9cqN1KD80Y4A6rC_!!728381129.jpg_.webp",
    trackingNo: "",
    quantity: 2,
    arrived: false
  },
  {
    id: 6,
    name: "磁吸金刚网纱窗网自装窗户防蚊家用自粘式隐形定制免打孔沙窗门帘",
    detail: "70x120cm;【2026新款】专利安全锁扣-金刚网灰纱+白框",
    image: "https://gw.alicdn.com/bao/uploaded/i1/728381129/O1CN01P4Szqx1KD86IzIC7f_!!728381129.jpg_.webp",
    trackingNo: "",
    quantity: 2,
    arrived: false
  },
  {
    id: 7,
    name: "大尺寸防蚊门帘全磁条2026新款入户门高档强磁性家用免打孔纱窗门",
    detail: "咖条纹【全磁条-金刚网】联系客服-换颜色;200cm;200cm",
    image: "https://gw.alicdn.com/bao/uploaded/i3/2103634225/O1CN01tDJWs01h56VddTYAC_!!2103634225.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 8,
    name: "威克士WU271锂电无刷风炮1000N.m大扭力铁路桥梁重型冲击电动扳手",
    detail: "--无需赠品询单享优惠--",
    image: "https://gsnapshot.alicdn.com/imgextra/imgextra/O1CN01yBgV0n1QfQTVu9Oii_!!2219647052003-0-picasso.jpg_640x640q85s150_.webp?time=1785281531000",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 9,
    name: "新款汽车顶棚收纳网车顶置物网车载网兜车顶收纳袋米色交叉不下坠",
    detail: "米色（大号）【30格交叉款】四把手专用 90*65cm",
    image: "https://gw.alicdn.com/bao/uploaded/i2/42304634/O1CN01QDc9zt1k6QPS6jmrz_!!42304634.webp_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 10,
    name: "太阳能飞机车载香薰车用香水旋转车内中控台装饰用品汽车饰品摆件",
    detail: "其他香调;战斗机【时尚银】精油1瓶",
    image: "https://gw.alicdn.com/bao/uploaded/i4/2211193620030/O1CN01sEcpCW1C5mf8572Ku_!!2211193620030.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 11,
    name: "100W车载充电器超级快充点烟器转换汽车多功能扩展口66W货车车充",
    detail: "【至尊款307W-苹果全系套餐】苹果PD线+双C线",
    image: "https://gw.alicdn.com/bao/uploaded/i1/2871433678/O1CN01QrFlhl1d2ZhLsWx6Z_!!2871433678.jpg_.webp",
    trackingNo: "",
    quantity: 2,
    arrived: false
  },
  {
    id: 12,
    name: "敏维家用小型智能电烙铁TS21便携精密恒温c210烙铁控温维修焊接",
    detail: "电烙铁+2种烙铁头+电源+底座[【参考图片]",
    image: "https://gw.alicdn.com/bao/uploaded/i3/2218887711851/O1CN01B0Ayo41PXoF3JWIzJ_!!2218887711851.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 13,
    name: "创意转动轮毂铝合金车载出风口香薰指尖陀螺汽车磁吸香氛装饰品",
    detail: "C款【银色】",
    image: "https://gw.alicdn.com/bao/uploaded/i4/2627880925/O1CN01a2A7zD1IhhTl03p3j_!!2627880925.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 14,
    name: "敏维家用迷你智能电烙铁TS101便携恒温90W大焊点家用焊枪家电维修",
    detail: "BC2单头电烙铁套装[含BC2烙铁头+控制端+数据线]",
    image: "https://gw.alicdn.com/bao/uploaded/i1/2218887711851/O1CN01HjC30O1PXo7qjN7u0_!!2218887711851.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 15,
    name: "敏维家用迷你智能电烙铁TS101便携恒温90W大焊点家用焊枪家电维修",
    detail: "7种烙铁头",
    image: "https://gw.alicdn.com/bao/uploaded/i2/2218887711851/O1CN01EUifg31PXo82xphVT_!!2218887711851.png_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 16,
    name: "车载手机支架2026新款汽车中控仪表台真空吸附吸盘式导航固定专用",
    detail: "创新升级 | 强劲吸附【镜面款】",
    image: "https://gw.alicdn.com/bao/uploaded/i2/2206421657870/O1CN019ge7OK280W9ZUulyA_!!2206421657870.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 17,
    name: "3G模型 DSPIAE/迪斯派 ES-P 迷你便携电动三档变速打磨棒打磨器",
    detail: "便携式电动打磨笔",
    image: "https://gw.alicdn.com/bao/uploaded/i4/20347155/O1CN01VUx6f122j2Xt3a4Hx_!!20347155.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 18,
    name: "贝肽斯儿童水龙头延伸器宝宝洗手加长延长硅胶可爱通用防溅水神器",
    detail: "鸭叽米-常规款【99%适配】",
    image: "https://gw.alicdn.com/bao/uploaded/i1/2258845085/O1CN01lBKwym1nQz5tIKrxg_!!2258845085.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 19,
    name: "下水道异物夹取器管道疏通神器厕所马桶加长夹子取物专用工具抓夹",
    detail: "升级加粗不锈钢【0.6米】强力四爪疏通器【牛油果绿】",
    image: "https://gw.alicdn.com/bao/uploaded/i1/2216216798592/O1CN01y31qpM2DLC7ED9mSM_!!2216216798592.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 20,
    name: "MAGICIAN魔术师OBD多功能仪表F835Plus机油水气温涡轮转速车改装",
    detail: "F8PLUS繁体中文（带吸盘）",
    image: "https://gw.alicdn.com/bao/uploaded/i1/62128759/O1CN01qV9Itf2EZg4g58lsf_!!62128759.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 21,
    name: "万车宝AiPRO汽车故障检测仪obd汽车检测仪汽手机版汽车故障检测仪",
    detail: "【70%用户选择】重磅新品AiPRO【Ai智能全面接入+全车360°体检+近20项特殊功能】",
    image: "https://gw.alicdn.com/bao/uploaded/i2/2215852074388/O1CN01Q4O6K71iHl3l6xd4b_!!2215852074388.png_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 22,
    name: "跨境新款汽车雨伞挂钩轿车SUV后备箱通用鱼竿置物多功能固定架",
    detail: "白色【双钩】2个",
    image: "https://gw.alicdn.com/bao/uploaded/i2/2208108764806/O1CN01VvsjP51lNCaUWS04i_!!2208108764806.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 23,
    name: "蓝牙耳机Ai智能对话翻译实时同声传译耳夹政府补贴2026新款kinyo",
    detail: "官方标配[丨无耳饰●【免费会员】];Ultra白【首款画中画+离线免费翻译+八大AI模型】千元级专利喇叭★舒适佩戴新标杆",
    image: "https://gw.alicdn.com/bao/uploaded/i1/2218227615274/O1CN01Qlgqei1opXzpYRLJA_!!2218227615274.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 24,
    name: "丰田汽车座椅缝隙塞条夹缝防漏防掉储物车载好物内饰用品收纳盒袋",
    detail: "【丰田车标】黑色主副一对装",
    image: "https://gw.alicdn.com/bao/uploaded/i4/3424375613/O1CN01YWlBPK1rKo6RrxI8f_!!3424375613.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 25,
    name: "日式漩涡地漏浴室下水道盖头发收集器卫生间旋转防虫防堵过滤网",
    detail: "白色2个装【不塞头发✅排水迅速】",
    image: "https://gw.alicdn.com/bao/uploaded/i4/2211914593969/O1CN01DSThsp1fBr61nvADu_!!2211914593969.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 26,
    name: "通用水龙头延长器延伸节水起泡器出水嘴喷头固定型加长水管防溅水",
    detail: "【白色30CM】 水龙头延长管[铜接头]",
    image: "https://gw.alicdn.com/bao/uploaded/i2/2212785106285/O1CN01qDsPWf1wIZzqOUND6_!!2212785106285.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 27,
    name: "内窥镜360度旋转内窥镜汽车维修高清摄像可视汽车缸内转弯内规镜",
    detail: "6mm实惠款苹果/安卓直连/360转向/柴汽通用",
    image: "https://gw.alicdn.com/bao/uploaded/i2/2213239098635/O1CN018XKzyn2Det4ntoTVH_!!2213239098635.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  },
  {
    id: 28,
    name: "纯钛茶杯",
    detail: "茶杯",
    image: "https://gw.alicdn.com/imgextra/O1CN01ja1uMp1LheJmTbidm_!!2835571331-0-picasso.jpg_.webp",
    trackingNo: "",
    quantity: 1,
    arrived: false
  }
];

// 初始化資料：先讀取 LocalStorage，若無則載入預設資料
let products = JSON.parse(localStorage.getItem('products_data')) || defaultProducts;

function render() {
  const arrivedList = document.getElementById('arrived-list');
  const pendingList = document.getElementById('pending-list');

  arrivedList.innerHTML = '';
  pendingList.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="card-header">
        <input type="checkbox" class="checkbox-custom" ${product.arrived ? 'checked' : ''} onchange="toggleArrived(${product.id})">
        <h3 class="product-name">${product.name}</h3>
      </div>
      <p class="product-detail">${product.detail}</p>
      <div class="meta-info">
        <span>📦 數量: ${product.quantity}</span>
        <span>🚚 追蹤號: ${product.trackingNo}</span>
      </div>
    `;

    if (product.arrived) {
      arrivedList.appendChild(card);
    } else {
      pendingList.appendChild(card);
    }
  });

  // 儲存最新狀態到瀏覽器 LocalStorage
  localStorage.setItem('products_data', JSON.stringify(products));
}

// 切換入篋狀態
function toggleArrived(id) {
  products = products.map(p => {
    if (p.id === id) {
      return { ...p, arrived: !p.arrived };
    }
    return p;
  });
  render();
}

// 首次渲染
render();
