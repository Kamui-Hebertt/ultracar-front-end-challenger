

class DataRegistry {
  private data: Record<number, { id: number; name: string; code: string; date: Date; cpf: string }> = {};
  private counter = 0;

  register(name: string, code: string, cpf: string): number | void {

    this.counter++;

 
    const currentDate = new Date();

    // Create an object to store the data
     const  dataObj = {
      id: this.counter,
      name: name,
      code:code,
      date: currentDate,
      cpf:cpf
    };

    // Add the data to the data object
    this.data[this.counter] = dataObj;

    // Return the ID for the registered data
    console.log(dataObj);
    return this.counter;
  }

  // getData() {
  //   // Find the registered data with the given ID
    
  //   // return this.data[cpf];
  // }
}

export default DataRegistry;