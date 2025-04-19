import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { customerService } from "./customer.service";

const createNewCustomer = catchAsync(async (req, res) => {
  const result = await customerService.createNewCustomerInDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

const getAllCustomers = catchAsync(async (req, res) => {
  const result = await customerService.getAllCustomersFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

const getSingleCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await customerService.getSingleCustomerFromDB(customerId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

const updateCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await customerService.updateCustomerInDB(customerId, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  await customerService.deleteCustomerFromDB(customerId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Customer deleted successfully",
  });
});

export const customerController = {
  createNewCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};
