const flours=[['🌾','Bajra Atta','Rich in Fiber | Keeps You Full Longer','₹85 / 1kg'],['🌾','Wheat Atta (Gehu)','Soft & Nutritious | Everyday Staple','₹75 / 1kg'],['🌾','Jowar Atta','Gluten Free | Good for Heart','₹80 / 1kg'],['🥣','Multigrain Atta','Power of 5 Grains | More Nutrition','₹95 / 1kg'],['🌾','Fresh Chakki Atta','Stone Ground | 100% Natural','₹70 / 1kg']];
const spices=[['🌶️','Lal Mirch Powder','Bold Colour | Rich Flavour','₹120 / 250g'],['🌿','Dhaniya Powder','Fresh Aroma | Pure & Natural','₹70 / 250g'],['🟡','Haldi Powder','Pure | Naturally Rich','₹100 / 250g']];
let cart=0;
function card(p,isFlour){return `<article class="card"><div class="product-img">${p[0]}</div><div class="card-body"><h3>${p[1]}</h3><small>${p[2]}</small><div class="price">${p[3]}</div>${isFlour?'<div class="sizes"><button>500g</button><button>1kg</button><button>5kg</button></div>':''}<button class="add">Add to Cart</button></div></article>`}
document.getElementById('flourGrid').innerHTML=flours.map(p=>card(p,true)).join('');
document.getElementById('spiceGrid').innerHTML=spices.map(p=>card(p,false)).join('');
document.addEventListener('click',e=>{if(e.target.classList.contains('add')){cart++;document.getElementById('cartCount').textContent=cart;e.target.textContent='Added ✓';setTimeout(()=>e.target.textContent='Add to Cart',900)}});
document.getElementById('search').addEventListener('input',e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('.card').forEach(c=>c.style.display=c.innerText.toLowerCase().includes(q)?'block':'none')});
