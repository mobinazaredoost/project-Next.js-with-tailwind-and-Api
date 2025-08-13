const fetchData = async (url, method = {}) => {
  try {
    const res = await fetch(url, method);
    const data = await res.json();
    return { success: true, data };
  } catch (error) {
        return { success: false, message:'network error' };

  }
};


export default fetchData
