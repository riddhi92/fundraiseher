
const projectTitle = document.querySelector('#projectTitle');
const projectTitleHeading = document.querySelector('#projectTitleHeading');
const descriptionText = document.querySelector('#description');
const fundRaisedText = document.querySelector('#fundRaised');
const fundTargetText = document.querySelector('#fundTarget');
const categoryText = document.querySelector('#category');
const viewsText = document.querySelector('#views');
const clapsText = document.querySelector('#claps');
const emailText = document.querySelector('#email');
const locationText = document.querySelector('#location');
function renderCafe(doc) {
   
    let name = document.createElement('span');
    let city = document.createElement('span');
    let description = document.createElement('span');
    let fundRaised = document.createElement('span');
    let fundTarget = document.createElement('span');
    let category = document.createElement('span');
    let views = document.createElement('span');
    let claps = document.createElement('span');
    let email = document.createElement('email');
    let location = document.createElement('location');
    
    name.textContent = doc.data().name;
    city.textContent = doc.data().views;
    description.textContent = doc.data().description;
    fundRaised.textContent = doc.data().fundRaised;
    fundTarget.textContent = doc.data().fundTarget;
    category.textContent = doc.data().category;
    views.textContent = doc.data().views;
    claps.textContent = doc.data().claps;
    email.textContent = doc.data().email;
    location.textContent = doc.data().location;
  
    projectTitle.appendChild(name);
    projectTitleHeading.appendChild(name);
    descriptionText.appendChild(description);
    fundRaisedText.appendChild(fundRaised);
    fundTargetText.appendChild(fundTarget);
    categoryText.appendChild(category);
    viewsText.appendChild(views);
    clapsText.appendChild(claps);
    emailText.appendChild(email);
    locationText.appendChild(location);
    
}
db.collection('projects').where('projectid','==','littlesophia').get().then(snapshot => {
	
 snapshot.docs.forEach(doc => {
     const currentCount = snapshot.data().views

    counterRef.set({
      count: Number(currentCount) + 1
    })
     
     renderCafe(doc);
 })
})

db.collection('projects').where('projectid','==','littlesophia').update( {
  views :  148
})