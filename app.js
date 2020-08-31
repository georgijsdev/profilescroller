const data = [
  {
    name: 'David Simon',
    age: 41,
    gender: 'male',
    lookingfor: 'female',
    location: 'Austin TX',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jeniffer Willis',
    age: 29,
    gender: 'female',
    lookingfor: 'male',
    location: 'San Diego CA',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'John Hewer',
    age: 33,
    gender: 'male',
    lookingfor: 'female',
    location: 'New York NY',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = profileIterator(data);

// Call
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name ${currentProfile.name}</li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item">Age ${currentProfile.age}</li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item">Location ${currentProfile.location}</li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item">Preference ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
      `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}"></img>`;
  } else {
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      {value: profiles [nextIndex++], done: false} :
      {done: true}
    }
  };
}