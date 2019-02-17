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
const companyurlText = document.querySelector('companyurl');

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
    let companyurl = document.createElement('companyurl');
    
    name.textContent = doc.data().name;
    city.textContent = doc.data().views;
    description.textContent = doc.data().description;
    fundRaised.textContent = doc.data().fundRaised;
    fundTarget.textContent = doc.data().fundTarget;
    category.textContent = doc.data().category;
    views.textContent = Number(doc.data().views)+1;
    claps.textContent = doc.data().claps;
    email.textContent = doc.data().email;
    location.textContent = doc.data().location;
    companyurl.textContent = doc.data().companyurl;
  
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
    companyurlText.appendChild(companyurl);
    
    
}
db.collection('projects').where('projectid','==','techbae').get().then(snapshot => {
	
 snapshot.docs.forEach(doc => {
     const currentCount = doc.data().views

    db.collection('projects').doc(doc.id).update({
      views: Number(currentCount) + 1
    })
     
     renderCafe(doc);
 })
})

function incrementClap() {
    
    db.collection('projects').where('projectid','==','techbae').get().then(snapshot => {
	
 snapshot.docs.forEach(doc => {
     const currentCount = doc.data().claps

    db.collection('projects').doc(doc.id).update({
      claps: Number(currentCount) + 1
    })
     
 })
})
    
   
    
}
