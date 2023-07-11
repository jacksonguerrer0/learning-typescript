(() => {
  console.log('Complex interface')

  // The order is first a parent and later the child when we call a interface in other interface
  interface Person extends Address {
    id: number;
    name: string;
    // address?: Address;
    // getName: (x: string) => string;
    getName(x: string): string;
  }

  // interface Address {
  //   id: number;
  //   zip: string;
  //   city: string;
  // }
  // or
  interface Address {
    address: {
      id: number;
      zip: string;
      city: string;
    }
  }

  const client: Person = {
    id: 1,
    name: 'Jack',
    address: {
      id: 23,
      zip: '23481M',
      city: 'Arauquita'
    },
    getName(msg) {
      return `msg: ${this.name}`
    }
  }

  console.log(client)
})()