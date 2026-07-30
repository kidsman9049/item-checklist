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
