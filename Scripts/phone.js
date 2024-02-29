const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json();
    const phoneData = data.data
    console.log(phoneData);
    displayPhone(phoneData)
}

const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container')
    phones.forEach(phone => {
        console.log(phone)
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`
        phoneCard.innerHTML = `
     <figure><img src="${phone.image}"
     alt="Shoes" /></figure>
     <div class="card-body">
       <h2 class="card-title">${phone.phone_name}</h2>
       <p>${phone.slug}</p>
       <div class="card-actions">
         <button class="btn btn-primary w-full">See Details</button>
       </div>
     </div>`
     phoneContainer.appendChild(phoneCard)
    });
}
loadPhone();