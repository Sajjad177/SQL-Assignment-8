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

const getAllBikesFromDB = async () => {
  const result = await prisma.bike.findMany({});

  if (!result) {
    throw new AppError("No bikes found", StatusCodes.NOT_FOUND);
  }

  return result;
};

const getSingleBikeFromDB = async (bikeId: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId,
    },
  });

  if (!result) {
    throw new AppError("Bike not found", StatusCodes.NOT_FOUND);
  }
  return result;
};

export const bikeService = {
  createBikeInDB,
  getAllBikesFromDB,
  getSingleBikeFromDB,
};
