var topic=[
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性"
];
var startDate = new Date();
function setMonthAndDay(startmonth , startday){
    startDate.setMonth(startmonth-1,startday);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}