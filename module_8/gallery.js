document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  const gallery = document.querySelector('.gallery');

  btn.addEventListener('click', async () => {
    try {
      showLoader();
      const urls = await fetchDogs(10);
      renderGallery(urls, gallery);
    } catch (err) {
      console.error(err);
    } finally {
      hideLoader();
    }
  });
});

async function fetchDogs(n) {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random/${n}`);
  if (!res.ok) throw new Error('Network error');
  const data = await res.json();
  return data.message;
}

function renderGallery(imgUrls, galleryElem) {
  if (!galleryElem) {
    console.error('galleryElem отсутствует');
    return;
  }
  galleryElem.innerHTML = '';
  imgUrls.forEach((url) => {
    const img = document.createElement('img');
    img.className = 'img-dog';
    img.alt = 'Dog';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.src = url;
    galleryElem.appendChild(img);
  });
}

function showLoader() {
  document.getElementById('loader').style.display = 'flex';
}
function hideLoader() {
  document.getElementById('loader').style.display = 'none';
}