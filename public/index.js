const table = document.querySelector('#table-container');

document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });

export const setUpArtists = (data) =>{
  let html = '';
  data.forEach(doc => {
    const artist = doc.data();
    const item = `<tr><td>${artist.Position}</td><td>${artist.Artist}</td></tr><tr>`
    html += item;
  });

  table.innerHTML = html;
}