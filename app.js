// 預設產品資料（可按需求自行增加欄位，如 supplier, expectedDate 等）
const defaultProducts = [
  {
    id: 1,
    name: "Logitech MX Master 3S 滑鼠",
    detail: "黑色 / 靜音按鍵版 / 訂單號 #8841",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400",
    trackingNo: "SF12345678",
    quantity: 2,
    arrived: false
  },
  {
    id: 2,
    name: "Keychron K2 機械鑰匙板",
    detail: "茶軸 / RGB 背光 / 訂單號 #8842",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    trackingNo: "DHL98765432",
    quantity: 1,
    arrived: false
  },
  {
    id: 3,
    name: "Dell 27 吋 4K 顯示器",
    detail: "U2723QE / USB-C Hub / 訂單號 #8810",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    trackingNo: "UPS55667788",
    quantity: 3,
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
    name: "Dell 27 吋 4K 顯示器",
    detail: "U2723QE / USB-C Hub / 訂單號 #8810",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    trackingNo: "UPS55667788",
    quantity: 3,
    arrived: false
  },
  {
    id: 6,
    name: "Dell 27 吋 4K 顯示器",
    detail: "U2723QE / USB-C Hub / 訂單號 #8810",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    trackingNo: "UPS55667788",
    quantity: 3,
    arrived: false
  },
  {
    id: 7,
    name: "Dell 27 吋 4K 顯示器",
    detail: "U2723QE / USB-C Hub / 訂單號 #8810",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    trackingNo: "UPS55667788",
    quantity: 3,
    arrived: false
  },
  {
    id: 8,
    name: "Dell 27 吋 4K 顯示器",
    detail: "U2723QE / USB-C Hub / 訂單號 #8810",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    trackingNo: "UPS55667788",
    quantity: 3,
    arrived: false
  },
  {
    id: 9,
    name: "Dell 27 吋 4K 顯示器",
    detail: "U2723QE / USB-C Hub / 訂單號 #8810",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    trackingNo: "UPS55667788",
    quantity: 3,
    arrived: false
  },
  {
    id: 10,
    name: "Dell 27 吋 4K 顯示器",
    detail: "U2723QE / USB-C Hub / 訂單號 #8810",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    trackingNo: "UPS55667788",
    quantity: 3,
    arrived: false
  },
  {
    id: 11,
    name: "Dell 27 吋 4K 顯示器",
    detail: "U2723QE / USB-C Hub / 訂單號 #8810",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    trackingNo: "UPS55667788",
    quantity: 3,
    arrived: false
  },
  {
    id: 12,
    name: "Dell 27 吋 4K 顯示器",
    detail: "U2723QE / USB-C Hub / 訂單號 #8810",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    trackingNo: "UPS55667788",
    quantity: 3,
    arrived: false
  },
  {
    id: 13,
    name: "Dell 27 吋 4K 顯示器",
    detail: "U2723QE / USB-C Hub / 訂單號 #8810",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    trackingNo: "UPS55667788",
    quantity: 3,
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
