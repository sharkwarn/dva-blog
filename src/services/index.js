import request from './../utils/request';

export async function upload(params) {
  const data = new FormData();
  data.append('fname', params);
  return request('//localhost:5000/upload/saveFile', {
    method: 'POST',
    body: data,
  });
}

export async function getAllImage() {
  return request('//localhost:5000/upload/getfile');
}

export async function saveArticle({ content, title, titleImg }) {
  return request('//localhost:5000/article/savearticle', {
    method: 'POST',
    body: JSON.stringify({
      content,
      name: title,
      creator: 'admin',
      titleImg,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function getArticleList() {
  return request('//localhost:5000/article/searchAllArticle');
}

export async function getArticleDetail(id) {
  return request(`//localhost:5000/article/findarticle?id=${id}`);
}

export async function getBanner() {
  return request('//localhost:5000/banner/getBanner');
}
