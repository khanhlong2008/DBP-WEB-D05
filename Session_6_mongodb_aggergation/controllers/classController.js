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
/*
*giống hàm fitted là lọc dữ liệu
$match: {
            vd: {
                    teacher_id:"a"
                }
            $in a hoặc b  
            vd: {
                    teacher_id:{
                        $in:['a','b']
                    }
                }
        }

*Thêm các trường mới vào dữ liệu         
$addfieds: {
    $$NOW: NGÀY THÁNG TRONG JAVASCIPT
    now: "$$NOW"
}        

*lấy phần tử đầu tiên của dữ liệu 
$limit:{
    1
}

*nhảy qua một bước nhảy lấy phần tử tiếp theo chạy từ 1 đến n 
$skip:{
    1
}

*Sắp xếp các trường mong muốn 
$sort:{
    teacher_id:'a'
}

*chọn ra các trường dữ liệu được trả ra 
$project:{
    name:1,
    _id:0,
    teacher_id:1,
}

*cho phép chọn ra 4 key 
    from: tên collection mong muốn (bảng),
    localField: trường mà trùng giữ cac bảng ,
    id == localField,
    as: kết quả lấy ra xong rồi thì lưu vào nó và có thể đổi tên 
$lookup:{
    from:
    localField: 
    id:
    as:
}

*giúp chúng ta trả ra các phần tử của trường mà chúng ta điền vào path
$unwind:{
    path:'$taecher$
}
*/