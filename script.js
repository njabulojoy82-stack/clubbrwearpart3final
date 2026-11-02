// Simple JavaScript interactivity for the clubbrWear student project.
document.addEventListener('DOMContentLoaded', function () {
  // Accordion panels
  document.querySelectorAll('.accordion').forEach(function (button) {
    button.addEventListener('click', function () {
      const panel = button.nextElementSibling;
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      if (panel) panel.classList.toggle('open', !expanded);
    });
  });

  // Product gallery lightbox (image enlarged when clicked)
  const galleryLinks = document.querySelectorAll('.gallery-image');
  if (galleryLinks.length) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Product image preview');
    lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close image preview">&times;</button><img alt=""><p class="lightbox-caption"></p>';
    document.body.appendChild(lightbox);
    const image = lightbox.querySelector('img');
    const caption = lightbox.querySelector('.lightbox-caption');
    function closeLightbox(){lightbox.classList.remove('open');image.src='';}
    galleryLinks.forEach(function(link){link.addEventListener('click',function(event){event.preventDefault();image.src=link.href;image.alt=link.dataset.caption || 'ClubbrWear product';caption.textContent=link.dataset.caption || '';lightbox.classList.add('open');lightbox.querySelector('button').focus();});});
    lightbox.querySelector('button').addEventListener('click',closeLightbox);
    lightbox.addEventListener('click',function(event){if(event.target===lightbox)closeLightbox();});
    document.addEventListener('keydown',function(event){if(event.key==='Escape')closeLightbox();});
  }

  // Enquiry validation, estimated amount and response
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    const prices = {tshirt:350, hoodie:650, tracksuit:900, jacket:750, cap:250, custom:null, bulk:null};
    const labels = {tshirt:'Signature T-Shirt',hoodie:'Hoodie',tracksuit:'Tracksuit',jacket:'Jacket',cap:'Cap',custom:'Custom Clothing',bulk:'Bulk Order'};
    enquiryForm.addEventListener('submit',function(event){
      event.preventDefault();
      const error=document.getElementById('enquiryError');const result=document.getElementById('enquiryResult');
      error.textContent='';result.hidden=true;
      if(!enquiryForm.checkValidity()){enquiryForm.reportValidity();error.textContent='Please check the required fields and correct any invalid information.';return;}
      const type=document.getElementById('product').value;const qty=Number(document.getElementById('quantity').value);
      if(!Number.isInteger(qty)||qty<1||qty>100){error.textContent='Quantity must be a whole number between 1 and 100.';return;}
      const amount=prices[type];let response='Your enquiry for '+labels[type]+' has been prepared. Availability and final pricing will be confirmed by the ClubbrWear team.';
      let estimate='An estimate is not available for this enquiry type. The team will respond with a quote.';
      if(amount!==null){estimate='Estimated subtotal: R'+(amount*qty).toLocaleString('en-ZA')+'. This is an estimate; availability and final price must be confirmed.';response='Thank you, '+document.getElementById('name').value.trim()+'. Your '+labels[type]+' enquiry is ready for review.';}
      result.innerHTML='<h3>Enquiry Summary</h3><p>'+response+'</p><p>'+estimate+'</p><p>Quantity: '+qty+'</p><p>We will use the contact details you supplied to follow up.</p>';
      result.hidden=false;result.scrollIntoView({behavior:'smooth',block:'nearest'});
    });
  }

  // General contact form: validate and prepare a mailto message in the visitor's email client.
  const contactForm=document.getElementById('contactForm');
  if(contactForm){contactForm.addEventListener('submit',function(event){event.preventDefault();const error=document.getElementById('contactError');error.textContent='';if(!contactForm.checkValidity()){contactForm.reportValidity();error.textContent='Please complete the required fields correctly.';return;}
    const name=document.getElementById('contactName').value.trim();const email=document.getElementById('contactEmail').value.trim();const type=document.getElementById('messageType').value;const message=document.getElementById('contactMessage').value.trim();
    const subject=encodeURIComponent('ClubbrWear website message: '+type);const body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\nMessage type: '+type+'\n\nMessage:\n'+message);
    window.location.href='mailto:info@clubbrwear.co.za?subject='+subject+'&body='+body;
  });}

  // OpenStreetMap view of the general Johannesburg area via Leaflet.
  const mapElement=document.getElementById('map');
  if(mapElement && window.L){const map=L.map('map').setView([-26.2041,28.0473],11);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);L.marker([-26.2041,28.0473]).addTo(map).bindPopup('Johannesburg, Gauteng (general location)').openPopup();}
});
