import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ServiceService } from "./services.service";

const createService = catchAsync(async (req, res) => {
  const result = await ServiceService.createServiceInDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const getAllServices = catchAsync(async (req, res) => {
  const result = await ServiceService.getAllServicesFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

const getSingleService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const result = await ServiceService.getSingleServiceFromDB(serviceId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});

const getAllOverdueServices = catchAsync(async (req, res) => {
  const result = await ServiceService.getAllOverdueServicesFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Overdue or pending services fetched successfully",
    data: result,
  });
});

const updateService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const result = await ServiceService.updateServiceInDB(serviceId, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Service record updated successfully",
    data: result,
  });
});



export const ServiceController = {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  getAllOverdueServices,
};
