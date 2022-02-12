export const displaySubText = (subText: string[]) => {
  return subText.map((item: string, index: number) => {
    if (index < subText.length - 1) {
      return `${item}, `;
    } else {
      return item;
    }
  });
};
