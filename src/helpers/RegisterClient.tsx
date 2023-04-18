const allClients: Array<Record<number, { id: number; name: string; code: string; date: Date; cpf: string }>> = [];

class DataRegistry {
  private data: Record<number, { id: number; name: string; code: string; date: Date; cpf: string }> = {};
  private counter = 0;

  register(name: string, code: string, cpf: string): number | void {

   const counting =  allClients.length;

    console.log(counting);
    this.counter += 1;
    const currentDate = new Date();

    
    const dataObj = {
      id: counting + this.counter,
      name: name,
      code: code,
      date: currentDate,
      cpf: cpf
    };
 
  
    this.data[this.counter] = dataObj;

   
    allClients.push(dataObj);
    // console.log(allClients)
    // console.log(this.counter)
   
    
    const existingDataString = localStorage.getItem('allClientsData');
    
    const existingData = existingDataString ? JSON.parse(existingDataString) : [];
    existingData.push(dataObj);
    localStorage.setItem('allClientsData', JSON.stringify(existingData));
    console.log(existingData);
   

    


    return this.counter;
  }

  getData(id: number) {
    
    return this.data[id];
  }
}

export default DataRegistry;
