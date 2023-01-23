type Order = {
  id: number;
  createdAt: string;
  updatedAt: string;
  status: Status;
  employee: {
    id: number;
    firstName: string;
    lastName: string;
    title: string;
  };
  customer: {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
  };
  items: {
    id: number;
    productId: number;
    productName: string;
    quantity: number;
    unitPrice: number;
    discount: number;
  }[];
};

type Status = 'OPEN' | 'IN_PROGRESS' | 'COMPLETE';