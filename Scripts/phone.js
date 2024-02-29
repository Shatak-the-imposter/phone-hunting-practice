const loadPhone = async (searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  const data = await res.json();
  const phoneData = data.data
  console.log(phoneData);
  displayPhone(phoneData)
}

const displayPhone = phones => {
  const phoneContainer = document.getElementById('phone-container')

  // clear pervious search results from cards container
  phoneContainer.textContent = '';
  // display show all button if phone is more than 12
  const showAllContainer = document.getElementById('show-all-container')
if (phones.length >12){
  showAllContainer.classList.remove('hidden')
}
else{
  showAllContainer.classList.add('hidden')
}
  // display maximum 12 phones in 1st page
  phones = phones.slice(0, 12);


  // creating cards for each phone dynamicly 
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

// handelSearchButton
const handleSearch = () => {
  const searchBox = document.getElementById('search-box');
  const searchText = searchBox.value;
  console.log(searchText)
  loadPhone(searchText)
}
