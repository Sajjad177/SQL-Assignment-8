import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { bikeService } from "./bike.service";

const createBike = catchAsync(async (req, res) => {
  const result = await bikeService.createBikeInDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Bike created successfully",
    data: result,
  });
});

const getAllBikes = catchAsync(async (req, res) => {
  const result = await bikeService.getAllBikesFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Bikes retrieved successfully",
    data: result,
  });
});

const getSingleBike = catchAsync(async (req, res) => {
  const { bikeId } = req.params;
  const result = await bikeService.getSingleBikeFromDB(bikeId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Bike retrieved successfully",
    data: result,
  });
});

export const bikeController = {
  createBike,
  getAllBikes,
  getSingleBike,
};
