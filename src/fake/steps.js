const steps = [
  { name: 'Thông tin cá nhân', idStep: 1 },
  { name: 'Phiếu đồng ý tiêm', idStep: 2 },
  { name: 'Hoàn thành', idStep: 3 }
];
const priorities = [
  {
    name: 'Người làm việc trong các cơ sở y tế, ngành y tế (công lập và tư nhân)',
    priorityId: 1
  },
  {
    name: 'Người tham gia phòng chống dịch (Thành viên Ban chỉ đạo phòng, chống dịch các cấp, người làm việc ở các khu cách ly, làm nhiệm vụ truy vết, điều tra dịch tễ, tổ Covid dựa vào cộng đồng, tình nguyện viên, phóng viên...)',
    priorityId: 2
  },
  { name: 'Lực lượng Quân đội', priorityId: 3 },
  { name: 'Lực lượng Công an', priorityId: 4 }
];
const expectDateTimes = [
  { name: 'sáng', expectDateTimeId: 1 },
  { name: 'trưa', expectDateTimeId: 2 },
  { name: 'chiều', expectDateTimeId: 3 }
];
export { steps, priorities, expectDateTimes };
