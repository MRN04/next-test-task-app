export class Services {
  static getTasks = async () => {
    const response = await fetch("https://683857ff2c55e01d184cee44.mockapi.io/api/v1/tasks");
    const data = await response.json();
    return data;
  }
}