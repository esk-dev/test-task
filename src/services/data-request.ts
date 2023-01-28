
async function requestData() {
  try {
    const response: Response = await fetch('./public/db.json');
    const data: Array<Object> = await response.json();
    return data;
  } catch (error) {
    console.error('Fail to fetch data:', error);
  }
}

export default requestData;
