import { prisma } from "../../shared/prisma";

const createNewCustomerInDB = async (payload: any) => {
  const result = await prisma.customer.create({
    data: payload,
  });

  return result;
};

export const customerService = {
  createNewCustomerInDB,
};
