import { Request, Response } from "express";
import { getTestRecords } from "../services/test.service";

export const getTest = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await getTestRecords();

    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.error("Error fetching test records:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch test records",
    });
  }
};