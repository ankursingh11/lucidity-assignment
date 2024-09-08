export const findTotalProduts = (data) => {
  return data.filter((item) => !item.disable).length;
};

export const findTotalValue = (data) => {
  return data.reduce((acc, item) => {
    if (item.disable) return acc;
    const itemValue = parseFloat(item.value.replace("$", ""));
    return acc + itemValue;
  }, 0);
};

export const findOutOfStock = (data) => {
  return data.filter((item) => item.quantity === 0 && !item.disable).length;
};

export const findCategory = (data) => {
  const st = new Set();
  data.forEach((item) => {
    if (!item.disable) st.add(item.category);
  });
  return st.size;
};
