const employees = ['Nancy Davolio', 'Andrew Fuller', 'Janet Leverling', 'Margaret Peacock', 'Steven Buchanan', 'Michael Suyama', 'Robert King', 'Laura Callahan', 'Anne Dodsworth'];
const status = ['OPEN', 'IN_PROGRESS', 'COMPLETE'];

export const mockOrders = () => {

  const newOrders: Order[] = [
    {
      id: 1,
      createdAt: '2020-01-08',
      updatedAt: '2020-01-05',
      status: 'OPEN',
      employee: {
        id: 1,
        firstName: 'Nancy',
        lastName: 'Davolio',
        title: 'Sales Representative',
      },
      customer: {
        id: 1,
        firstName: 'Nancy',
        lastName: 'Davolio',
        address: '49 Gilbert St.',
      },
      items: [
        {
          id: 1,
          productId: 1,
          productName: 'Chai',
          quantity: 2,
          unitPrice: 18,
          discount: 0,
        },
        {
          id: 2,
          productId: 2,
          productName: 'Chang',
          quantity: 15,
          unitPrice: 19,
          discount: 0,
        },
      ],
    },
  ];

  for(let i = 0; i < 5; i++) {
   newOrders.push({
    ...newOrders[0],
    id: i + 2,
    createdAt: new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 30))).toISOString().split('T')[0],
    updatedAt: new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 30))).toISOString().split('T')[0],
    status: status[Math.floor(Math.random() * status.length)] as Status,
    employee: {
      id: Math.floor(Math.random() * 9) + 1,
      firstName: employees[Math.floor(Math.random() * 9)].split(' ')[0],
      lastName: employees[Math.floor(Math.random() * 9)].split(' ')[1],
      title: 'Sales Representative',
    },
    customer: {
      id: Math.floor(Math.random() * 9) + 1,
      firstName: employees[Math.floor(Math.random() * 9)].split(' ')[0],
      lastName: employees[Math.floor(Math.random() * 9)].split(' ')[1],
      address: '49 Gilbert St.',
    },
    items: [
      {
        id: Math.floor(Math.random() * 100) + 1,
        productId: Math.floor(Math.random() * 77) + 1,
        productName: 'Chai',
        quantity: Math.floor(Math.random() * 10) + 1,
        unitPrice: 18,
        discount: 0,
      },
      {
        id: Math.floor(Math.random() * 100) + 1,
        productId: Math.floor(Math.random() * 77) + 1,
        productName: 'Toasted Bread',
        quantity: Math.floor(Math.random() * 10) + 1,
        unitPrice: 19,
        discount: 0,
      },
    ],
  })
  }

  return newOrders;
};

export default mockOrders
