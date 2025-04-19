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

export const bikeController = {
  createBike,
};
