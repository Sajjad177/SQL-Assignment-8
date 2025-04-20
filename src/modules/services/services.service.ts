import { status } from "../../generated/prisma";
import { prisma } from "../../shared/prisma";

const createServiceInDB = async (payload: any) => {
  const result = await prisma.serviceRecord.create({
    data: payload,
  });

  return result;
};

const getAllServicesFromDB = async () => {
  const result = await prisma.serviceRecord.findMany({});
  return result;
};

const getSingleServiceFromDB = async (serviceId: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId,
    },
  });

  if (!result) {
    throw new Error("Service not found");
  }
  return result;
};

const getAllOverdueServicesFromDB = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const result = await prisma.serviceRecord.findMany({
    where: {
      status: { in: [status.pending, status.in_progress] },
      serviceDate: {
        lt: sevenDaysAgo,
      },
    },
  });

  return result;
};

const updateServiceInDB = async (serviceId: string, payload: any) => {
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId,
    },
    data: payload,
  });
  return result;
};

export const ServiceService = {
  createServiceInDB,
  getAllServicesFromDB,
  getSingleServiceFromDB,
  updateServiceInDB,
  getAllOverdueServicesFromDB,
};
