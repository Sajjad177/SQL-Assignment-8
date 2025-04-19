import { StatusCodes } from "http-status-codes";
import AppError from "../../error/AppError";
import { prisma } from "../../shared/prisma";
import { Customer } from "../../generated/prisma";

const createNewCustomerInDB = async (payload: any) => {
  const result = await prisma.customer.create({
    data: payload,
  });

  return result;
};

const getAllCustomersFromDB = async () => {
  const result = await prisma.customer.findMany({});
  return result;
};

const getSingleCustomerFromDB = async (customerId: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });

  if (!result) {
    throw new AppError("Customer not found", StatusCodes.NOT_FOUND);
  }
  return result;
};

const updateCustomerInDB = async (
  customerId: string,
  payload: Partial<Customer>
) => {
  const isExists = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });

  if (!isExists) {
    throw new AppError("Customer not found", StatusCodes.NOT_FOUND);
  }

  const result = await prisma.customer.update({
    where: {
      customerId,
    },
    data: payload,
  });

  return result;
};

const deleteCustomerFromDB = async (customerId: string) => {
  const isExists = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });

  if (!isExists) {
    throw new AppError("Customer not found", StatusCodes.NOT_FOUND);
  }

  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.bike.deleteMany({
      where: {
        customerId,
      },
    });
    const deleteCustomer = await transactionClient.customer.delete({
      where: {
        customerId,
      },
    });

    return deleteCustomer;
  });

  return result;
};

export const customerService = {
  createNewCustomerInDB,
  getAllCustomersFromDB,
  getSingleCustomerFromDB,
  updateCustomerInDB,
  deleteCustomerFromDB,
};
