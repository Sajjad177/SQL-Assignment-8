import { StatusCodes } from "http-status-codes";
import AppError from "../../error/AppError";
import { prisma } from "../../shared/prisma";

const createBikeInDB = async (payload: any) => {
  const isExists = await prisma.customer.findUnique({
    where: {
      customerId: payload.customerId,
    },
  });

  if (!isExists) {
    throw new AppError("Customer not found", StatusCodes.NOT_FOUND);
  }

  const result = await prisma.bike.create({
    data: payload,
  });

  return result;
};

export const bikeService = {
  createBikeInDB,
};
