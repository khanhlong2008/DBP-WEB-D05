const {db} = require("../db");
const getAllclassesWithTeacher = async () => {
  const classes = await db.classes
    .aggregate([
      {
        $match: {
          teacher_id: {
            $in: ["a", "b"],
          },
        },
      },
      {
        $addFields: {
          queriedAt: "$$NOW",
        },
      },
      {
        $sort: {
          teacher_id: 1,
        },
      },
      {
        $lookup: {
          from: "teachers",
          localField: "teacher_id",
          foreignField: "id",
          as: "teacher",
        },
      },
      {
        $unwind: {
          path: "$teacher",
        },
      },
    ])
    .toArray();
  return classes;
};

module.exports = { getAllclassesWithTeacher };
