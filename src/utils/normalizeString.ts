export const camelToFlat = (camel: string) => {
  const camelCase = camel.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ");

  return camelCase
    .map((word) => {
      return word.charAt(0).toLocaleUpperCase() + word.slice(1);
    })
    .join(" ");
};
