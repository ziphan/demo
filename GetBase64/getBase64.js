function getBase64FromCanvas(box) {
  const input = box.querySelector('input');
  const result = box.querySelector('.result-box');
  let url = '';
  const canvas = document.createElement('canvas');
  const c = canvas.getContext('2d');
  input.addEventListener('change', e => {
    const files = e.currentTarget.files;
    const URL = window.URL;
    const blob = URL.createObjectURL(files[0]);
    let img = new Image();
    img.src = blob;
    img.type = img.src.slice(img.src.lastIndexOf('.') + 1);
    img.addEventListener('load', () => {
      canvas.width = img.width;
      canvas.height = img.height;
      c.drawImage(img, 0, 0);
      url = canvas.toDataURL('image/' + img.type);
      result.value = url;
      setButtons(box, url);
    })
  }, true);
}

function getBase64FromFileReader(box) {
  const input = box.querySelector('input');
  const result = box.querySelector('.result-box');
  let url = '';
  input.addEventListener('change', e => {
    const files = e.currentTarget.files;
    const reader = new FileReader;
    reader.readAsDataURL(files[0]);
    reader.addEventListener('load', () => {
      url = reader.result;
      result.value = url;
      setButtons(box, url);
    })
  })
}

function setButtons(box, url) {
  const copy = box.querySelector('.copy');
  const view = box.querySelector('.view');

  if (url.length > 0) {
    copy.classList.remove('disabled');
    view.classList.remove('disabled');
  }

  copy.onclick = () => {
    const result = box.querySelector('.result-box');
    result.select();
    document.execCommand('copy');
    alert('URL 已复制成功，可粘贴');
  };
  view.onclick = () => {
    window.open(url);
  }
}