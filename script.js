document.addEventListener("DOMContentLoaded", function () {
    const calendarGrid = document.getElementById("calendar-grid");
    const monthYear = document.getElementById("month-year");
    const prevMonth = document.getElementById("prev-month");
    const nextMonth = document.getElementById("next-month");
    const dayPopup = document.getElementById("day-popup");
    const timeSlots = document.getElementById("time-slots");
    const closeDayPopup = document.getElementById("close-day-popup");

    const reservations = {
"2024-11-01": { "8:00 AM": "Sophia L", "9:00 AM": "Adeana S", "10:00 AM": "Madeline S", "11:00 AM": "Adeana S", "12:00 PM": "Emily T", "1:00 PM": "Riddhi P", "2:00 PM": "Zoe Q" },
"2024-11-04": { "8:00 AM": "Olivia P", "9:00 AM": "Adeana S", "10:00 AM": "Clara S", "11:00 AM": "Victoria L", "12:00 PM": "Ava T", "1:00 PM": "Riddhi P", "2:00 PM": "Sadie F" },
"2024-11-05": { "8:00 AM": "Adeana S", "9:00 AM": "Clara M", "10:00 AM": "Addison B", "11:00 AM": "Lily Z", "12:00 PM": "Emily G", "1:00 PM": "Riddhi P", "2:00 PM": "Zoey T" },
"2024-11-06": { "8:00 AM": "Sadie A", "9:00 AM": "Mackenzie H", "10:00 AM": "Harper T", "11:00 AM": "Olivia P", "12:00 PM": "Zoe W", "1:00 PM": "Riddhi P", "2:00 PM": "Aubrey L" },
"2024-11-07": { "8:00 AM": "Clara F", "9:00 AM": "Sophie B", "10:00 AM": "Zoe Q", "11:00 AM": "Mackenzie Y", "12:00 PM": "Victoria R", "1:00 PM": "Riddhi P", "2:00 PM": "Emily Y" },
"2024-11-08": { "8:00 AM": "Olivia G", "9:00 AM": "Zoey P", "10:00 AM": "Madeline H", "11:00 AM": "Harper M", "12:00 PM": "Ava S", "1:00 PM": "Riddhi P", "2:00 PM": "Sophia T" },
"2024-11-11": { "8:00 AM": "Victoria M", "9:00 AM": "Lily T", "10:00 AM": "Zoey G", "11:00 AM": "Ava B", "12:00 PM": "Zoe P", "1:00 PM": "Riddhi P", "2:00 PM": "Clara H" },
"2024-11-12": { "8:00 AM": "Sophie Y", "9:00 AM": "Sadie L", "10:00 AM": "Clara W", "11:00 AM": "Harper B", "12:00 PM": "Victoria F", "1:00 PM": "Riddhi P", "2:00 PM": "Lily P" },
"2024-11-13": { "8:00 AM": "Isabella Q", "9:00 AM": "Zoey T", "10:00 AM": "Aubrey Y", "11:00 AM": "Zoe L", "12:00 PM": "Madeline G", "1:00 PM": "Riddhi P", "2:00 PM": "Emily W" },
"2024-11-14": { "8:00 AM": "Zoe F", "9:00 AM": "Sophie P", "10:00 AM": "Harper L", "11:00 AM": "Ava M", "12:00 PM": "Victoria P", "1:00 PM": "Riddhi P", "2:00 PM": "Clara J" },
"2024-11-15": { "8:00 AM": "Adeana S", "9:00 AM": "Zoey W", "10:00 AM": "Sadie P", "11:00 AM": "Olivia T", "12:00 PM": "Aubrey Q", "1:00 PM": "Riddhi P", "2:00 PM": "Sophie Z" },
"2024-11-18": { "8:00 AM": "Victoria S", "9:00 AM": "Isabella F", "10:00 AM": "Zoe T", "11:00 AM": "Harper G", "12:00 PM": "Lily W", "1:00 PM": "Riddhi P", "2:00 PM": "Ava Q" },
"2024-11-19": { "8:00 AM": "Adeana S", "9:00 AM": "Adeana S", "10:00 AM": "Sophia P", "11:00 AM": "Mackenzie Z", "12:00 PM": "Olivia L", "1:00 PM": "Riddhi P", "2:00 PM": "Aubrey F" },
"2024-11-20": { "8:00 AM": "Emily Q", "9:00 AM": "Sadie M", "10:00 AM": "Clara N", "11:00 AM": "Zoe R", "12:00 PM": "Victoria M", "1:00 PM": "Riddhi P", "2:00 PM": "Ava G" },
"2024-11-21": { "8:00 AM": "Adeana S", "9:00 AM": "Sophie R", "10:00 AM": "Adeana S", "11:00 AM": "Adeana S", "12:00 PM": "Zoe Q", "1:00 PM": "Riddhi P", "2:00 PM": "Lily Y" },
"2024-11-22": { "8:00 AM": "Isabella P", "9:00 AM": "Adeana S", "10:00 AM": "Aubrey P", "11:00 AM": "Adeana S", "12:00 PM": "Sophie L", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" },
"2024-11-25": { "8:00 AM": "Adeana S", "9:00 AM": "Sadie W", "10:00 AM": "Emily H", "11:00 AM": "Olivia K", "12:00 PM": "Ava P", "1:00 PM": "Riddhi P", "2:00 PM": "Sophie D" },
"2024-11-26": { "8:00 AM": "Lily Q", "9:00 AM": "Adeana S", "10:00 AM": "Harper F", "11:00 AM": "Sadie G", "12:00 PM": "Zoe M", "1:00 PM": "Riddhi P", "2:00 PM": "Victoria K" },
"2024-11-27": { "8:00 AM": "Aubrey Z", "9:00 AM": "Sophia W", "10:00 AM": "Zoe Y", "11:00 AM": "Olivia F", "12:00 PM": "Adeana S", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" },
"2024-11-28": { "8:00 AM": "Zoey F", "9:00 AM": "Lily Z", "10:00 AM": "Adeana S", "11:00 AM": "Madeline L", "12:00 PM": "Victoria G", "1:00 PM": "Riddhi P", "2:00 PM": "Clara Y" },
"2024-11-29": { "8:00 AM": "Adeana S", "9:00 AM": "Isabella T", "10:00 AM": "Sophie Q", "11:00 AM": "Adeana S", "12:00 PM": "Ava B", "1:00 PM": "Riddhi P", "2:00 PM": "Lily H" },

"2024-12-02": { "8:00 AM": "Madeline J", "9:00 AM": "Adeana S", "10:00 AM": "Sophie M", "11:00 AM": "Adeana S", "12:00 PM": "Aubrey P", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" },
"2024-12-03": { "8:00 AM": "Zoe Q", "9:00 AM": "Adeana S", "10:00 AM": "Olivia Y", "11:00 AM": "Harper S", "12:00 PM": "Adeana S", "1:00 PM": "Riddhi P", "2:00 PM": "Sophie V" },
"2024-12-04": { "8:00 AM": "Isabella S", "9:00 AM": "Madeline Y", "10:00 AM": "Zoe V", "11:00 AM": "Sadie W", "12:00 PM": "Lily M", "1:00 PM": "Riddhi P", "2:00 PM": "Ava Q" },
"2024-12-05": { "8:00 AM": "Zoey H", "9:00 AM": "Adeana S", "10:00 AM": "Clara T", "11:00 AM": "Victoria M", "12:00 PM": "Adeana S", "1:00 PM": "Riddhi P", "2:00 PM": "Harper G" },
"2024-12-06": { "8:00 AM": "Aubrey L", "9:00 AM": "Isabella R", "10:00 AM": "Clara D", "11:00 AM": "Sadie Z", "12:00 PM": "Adeana S", "1:00 PM": "Riddhi P", "2:00 PM": "Zoe J" },
"2024-12-09": { "8:00 AM": "Adeana S", "9:00 AM": "Lily F", "10:00 AM": "Madeline C", "11:00 AM": "Olivia J", "12:00 PM": "Clara Z", "1:00 PM": "Riddhi P", "2:00 PM": "Victoria Y" },
"2024-12-10": { "8:00 AM": "Sadie X", "9:00 AM": "Adeana S", "10:00 AM": "Adeana S", "11:00 AM": "Aubrey R", "12:00 PM": "Zoey J", "1:00 PM": "Riddhi P", "2:00 PM": "Lily P" },
"2024-12-11": { "8:00 AM": "Clara W", "9:00 AM": "Adeana S", "10:00 AM": "Ava H", "11:00 AM": "Victoria R", "12:00 PM": "Madeline D", "1:00 PM": "Riddhi P", "2:00 PM": "Sophie A" },
"2024-12-12": { "8:00 AM": "Zoey B", "9:00 AM": "Olivia S", "10:00 AM": "Sadie T", "11:00 AM": "Zoe W", "12:00 PM": "Sophie G", "1:00 PM": "Riddhi P", "2:00 PM": "Aubrey M" },
"2024-12-13": { "8:00 AM": "Emily H", "9:00 AM": "Lily L", "10:00 AM": "Sophie V", "11:00 AM": "Adeana S", "12:00 PM": "Clara O", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" },
"2024-12-16": { "8:00 AM": "Zoey Q", "9:00 AM": "Sadie Z", "10:00 AM": "Aubrey M", "11:00 AM": "Clara P", "12:00 PM": "Olivia T", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" },
"2024-12-17": { "8:00 AM": "Madeline S", "9:00 AM": "Adeana S", "10:00 AM": "Adeana S", "11:00 AM": "Adeana S", "12:00 PM": "Emily Q", "1:00 PM": "Riddhi P", "2:00 PM": "Olivia R" },
"2024-12-18": { "8:00 AM": "Clara M", "9:00 AM": "Zoey W", "10:00 AM": "Zoe T", "11:00 AM": "Adeana S", "12:00 PM": "Ava P", "1:00 PM": "Riddhi P", "2:00 PM": "Sophie Y" },
"2024-12-19": { "8:00 AM": "Aubrey Y", "9:00 AM": "Olivia D", "10:00 AM": "Lily V", "11:00 AM": "Madeline P", "12:00 PM": "Sophie C", "1:00 PM": "Riddhi P", "2:00 PM": "Zoe K" },
"2024-12-20": { "8:00 AM": "Sadie Q", "9:00 AM": "Emily M", "10:00 AM": "Adeana S", "11:00 AM": "Victoria W", "12:00 PM": "Zoey P", "1:00 PM": "Riddhi P", "2:00 PM": "Lily T" },
"2024-12-23": { "8:00 AM": "Adeana S", "9:00 AM": "Sophie W", "10:00 AM": "Isabella A", "11:00 AM": "Adeana S", "12:00 PM": "Harper E", "1:00 PM": "Riddhi P", "2:00 PM": "Emily F" },
"2024-12-24": { "8:00 AM": "Adeana S", "9:00 AM": "Aubrey H", "10:00 AM": "Olivia Y", "11:00 AM": "Zoe R", "12:00 PM": "Sophie I", "1:00 PM": "Riddhi P", "2:00 PM": "Victoria P" },
"2024-12-25": { "8:00 AM": "Clara A", "9:00 AM": "Sadie Q", "10:00 AM": "Adeana S", "11:00 AM": "Emily L", "12:00 PM": "Madeline G", "1:00 PM": "Riddhi P", "2:00 PM": "Ava T" },
"2024-12-26": { "8:00 AM": "Sophie K", "9:00 AM": "Olivia P", "10:00 AM": "Adeana S", "11:00 AM": "Adeana S", "12:00 PM": "Adeana S", "1:00 PM": "Riddhi P", "2:00 PM": "Emily K" },
"2024-12-27": { "8:00 AM": "Madeline F", "9:00 AM": "Olivia G", "10:00 AM": "Lily N", "11:00 AM": "Adeana S", "12:00 PM": "Victoria T", "1:00 PM": "Riddhi P", "2:00 PM": "Zoe W" },
"2024-12-30": { "8:00 AM": "Adeana S", "9:00 AM": "Sophie D", "10:00 AM": "Emily P", "11:00 AM": "Zoe V", "12:00 PM": "Ava B", "1:00 PM": "Riddhi P", "2:00 PM": "Madeline S" },
"2024-12-31": { "8:00 AM": "Harper X", "9:00 AM": "Adeana S", "10:00 AM": "Adeana S", "11:00 AM": "Lily E", "12:00 PM": "Zoe H", "1:00 PM": "Riddhi P", "2:00 PM": "Olivia J" },

"2025-01-01": { "8:00 AM": "Aubrey J", "9:00 AM": "Lily A", "10:00 AM": "Victoria E", "11:00 AM": "Adeana S", "12:00 PM": "Clara Y", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" },
"2025-01-02": { "8:00 AM": "Olivia Z", "9:00 AM": "Zoe P", "10:00 AM": "Adeana S", "11:00 AM": "Emily R", "12:00 PM": "Victoria A", "1:00 PM": "Riddhi P", "2:00 PM": "Ava H" },
"2025-01-03": { "8:00 AM": "Zoe K", "9:00 AM": "Sophie N", "10:00 AM": "Emily G", "11:00 AM": "Adeana S", "12:00 PM": "Harper V", "1:00 PM": "Riddhi P", "2:00 PM": "Madeline L" },
"2025-01-06": { "8:00 AM": "Clara J", "9:00 AM": "Isabella S", "10:00 AM": "Olivia V", "11:00 AM": "Lily D", "12:00 PM": "Sophie Z", "1:00 PM": "Riddhi P", "2:00 PM": "Ava U" },
"2025-01-07": { "8:00 AM": "Madeline F", "9:00 AM": "Adeana S", "10:00 AM": "Adeana S", "11:00 AM": "Emily X", "12:00 PM": "Victoria L", "1:00 PM": "Riddhi P", "2:00 PM": "Olivia Y" },
"2025-01-08": { "9:00 AM": "Aubrey P", "10:00 AM": "Emily A", "11:00 AM": "Lily Z", "12:00 PM": "Zoe J", "1:00 PM": "Riddhi P", "2:00 PM": "Isabella W" },
"2025-01-09": { "8:00 AM": "Adeana S", "9:00 AM": "Zoe M", "10:00 AM": "Adeana S", "11:00 AM": "Clara G", "12:00 PM": "Victoria I", "1:00 PM": "Riddhi P", "2:00 PM": "Emily F" },
"2025-01-10": { "8:00 AM": "Ava B", "9:00 AM": "Sophie K", "10:00 AM": "Harper S", "11:00 AM": "Madeline T", "12:00 PM": "Adeana S", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" },
"2025-01-13": { "8:00 AM": "Emily S", "9:00 AM": "Isabella X", "10:00 AM": "Olivia M", "11:00 AM": "Adeana S", "1:00 PM": "Riddhi P", "2:00 PM": "Madeline Y" },

"2025-01-14": { "8:00 AM": "Victoria O", "9:00 AM": "Harper C", "10:00 AM": "Adeana S", "11:00 AM": "Zoe T", "12:00 PM": "Adeana S", "1:00 PM": "Riddhi P", "2:00 PM": "Sophie X" },
"2025-01-15": { "8:00 AM": "Ava M", "9:00 AM": "Sophie A", "10:00 AM": "Emily N", "11:00 AM": "Lily O", "12:00 PM": "Harper T", "1:00 PM": "Riddhi P", "2:00 PM": "Zoe P" },
"2025-01-16": { "8:00 AM": "Sophie J", "9:00 AM": "Adeana S", "10:00 AM": "Clara H", "11:00 AM": "Adeana S", "12:00 PM": "Emily L", "1:00 PM": "Riddhi P", "2:00 PM": "Lily W" },
"2025-01-17": { "8:00 AM": "Zoe F", "9:00 AM": "Sadie A", "11:00 AM": "Aubrey L", "12:00 PM": "Madeline W", "1:00 PM": "Riddhi P", "2:00 PM": "Emily V" },
"2025-01-20": { "8:00 AM": "Victoria X", "9:00 AM": "Clara M", "10:00 AM": "Adeana S", "11:00 AM": "Olivia Q", "12:00 PM": "Harper W", "1:00 PM": "Riddhi P", "2:00 PM": "Ava B" },
"2025-01-21": { "8:00 AM": "Zoe Q", "10:00 AM": "Adeana S", "11:00 AM": "Adeana S", "12:00 PM": "Ava T", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" },
"2025-01-22": { "8:00 AM": "Adeana S", "9:00 AM": "Adeana S", "12:00 PM": "Zoe D", "1:00 PM": "Riddhi P", "2:00 PM": "Victoria N" },

	"2025-01-23": { "8:00 AM": "Harper S", "9:00 AM": "Adeana S", "10:00 AM": "Zoe D", "11:00 AM": "Adeana S", "12:00 PM": "Sadie B", "1:00 PM": "Riddhi P", "2:00 PM": "Maya P" },
    "2025-01-24": {"9:00 AM": "Sophie S", "10:00 AM": "Emily J", "11:00 AM": "Adeana S", "12:00 PM": "Zoe D", "1:00 PM": "Riddhi P", "2:00 PM": "Maya P" },
    "2025-01-25": { "8:00 AM": "Lily C", "10:00 AM": "Madison D", "11:00 AM": "Chloe B", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" },
    "2025-01-27": { "8:00 AM": "Aubrey Z", "9:00 AM": "Zoe D", "10:00 AM": "Sadie B", "11:00 AM": "Adeana S", "12:00 PM": "Emily J", "1:00 PM": "Riddhi P", "2:00 PM": "Samantha L" },
    "2025-01-28": { "8:00 AM": "Harper S", "10:00 AM": "Adeana S", "11:00 AM": "Ella T", "12:00 PM": "Lily C", "1:00 PM": "Riddhi P", "2:00 PM": "Clara M" },
    "2025-01-29": { "8:00 AM": "Harper S", "10:00 AM": "Aubrey Z", "11:00 AM": "Ella T", "12:00 PM": "Sadie B", "1:00 PM": "Riddhi P"},
    "2025-01-30": { "8:00 AM": "Maya P", "9:00 AM": "Grace N", "10:00 AM": "Sophia M", "12:00 PM": "Riley X", "1:00 PM": "Riddhi P", "2:00 PM": "Leah J" },
    "2025-01-31": { "8:00 AM": "Ruby F", "9:00 AM": "Caroline E", "10:00 AM": "Sophie T", "11:00 AM": "Ivy K", "12:00 PM": "Peyton T", "1:00 PM": "Riddhi P", "2:00 PM": "Zara D" },
    "2025-02-03": { "9:00 AM": "Lily W", "10:00 AM": "Sophie S", "11:00 AM": "Emma C", "1:00 PM": "Riddhi P", "2:00 PM": "Zoe D" },
    "2025-02-04": { "8:00 AM": "Chloe B", "9:00 AM": "Sadie P", "10:00 AM": "Ruby F", "11:00 AM": "Emily F", "12:00 PM": "Olivia L", "1:00 PM": "Riddhi P", "2:00 PM": "Leah T" },
    "2025-02-05": { "8:00 AM": "Lily C", "9:00 AM": "Maya P", "10:00 AM": "Grace W", "11:00 AM": "Madison L", "12:00 PM": "Clara M", "1:00 PM": "Riddhi P", "2:00 PM": "Sophie L" },
    "2025-02-06": { "8:00 AM": "Olivia W", "9:00 AM": "Sophie T", "10:00 AM": "Leah J", "11:00 AM": "Samantha M", "12:00 PM": "Ava G", "1:00 PM": "Riddhi P", "2:00 PM": "Zoe D" },
    "2025-02-07": { "8:00 AM": "Adeana S", "9:00 AM": "Zara D", "11:00 AM": "Chloe R", "12:00 PM": "Harper M", "1:00 PM": "Riddhi P", "2:00 PM": "Sophie W" },
    "2025-02-10": { "8:00 AM": "Emily J", "9:00 AM": "Adeana S", "10:00 AM": "Olivia L",  "12:00 PM": "Harper M", "1:00 PM": "Riddhi P" },
    "2025-02-11": { "8:00 AM": "Hannah P", "10:00 AM": "Clara B", "11:00 AM": "Samantha L", "12:00 PM": "Maya P", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" },
    "2025-02-12": { "9:00 AM": "Amelia R", "11:00 AM": "Ella T", "12:00 PM": "Adeana S", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" },
    "2025-02-13": { "8:00 AM": "Zoe D", "11:00 AM": "Adeana S", "12:00 PM": "Clara M", "1:00 PM": "Riddhi P", "2:00 PM": "Sophie F" },
    "2025-02-14": { "9:00 AM": "Adeana S", "10:00 AM": "Ella T", "11:00 AM": "Sadie F", "12:00 PM": "Lily W", "1:00 PM": "Riddhi P"},
    "2025-02-17": { "8:00 AM": "Adeana S", "10:00 AM": "Adeana S", "12:00 PM": "Adeana S", "1:00 PM": "Riddhi P", "2:00 PM": "Olivia L" },
    "2025-02-18": { "8:00 AM": "Harper M", "9:00 AM": "Adeana S", "11:00 AM": "Zoe D", "12:00 PM": "Sadie B", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" },
    "2025-02-19": { "8:00 AM": "Adeana S", "9:00 AM": "Zara D", "10:00 AM": "Chloe R", "11:00 AM": "Adeana S", "12:00 PM": "Clara M", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" },
    "2025-02-20": { "8:00 AM": "Sophie W", "9:00 AM": "Leah J", "10:00 AM": "Adeana S", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" },
    "2025-02-21": {  "9:00 AM": "Zoe D", "11:00 AM": "Adeana S","1:00 PM": "Riddhi P", "2:00 PM": "Maya P" },
	"2025-02-22": { "8:00 AM": "Adeana S", "9:00 AM": "Zoe D", "11:00 AM": "Sophie S", "1:00 PM": "Riddhi P", "2:00 PM": "Ella T" },
    "2025-02-23": { "8:00 AM": "Adeana S", "9:00 AM": "Adeana S", "10:00 AM": "Olivia L", "12:00 PM": "Samantha L", "1:00 PM": "Riddhi P", "2:00 PM": "Aubrey Z" },
	"2025-02-24": { "8:00 AM": "Lily C", "10:00 AM": "Adeana S", "1:00 PM": "Riddhi P"},
    "2025-02-25": { "9:00 AM": "Amelia R", "11:00 AM": "Adeana S", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" },
    "2025-02-26": {  "10:00 AM": "Sadie W", "12:00 PM": "Riley X", "1:00 PM": "Riddhi P", "2:00 PM": "Leah J" },
	"2025-02-27": { "8:00 AM": "Olivia W", "9:00 AM": "Adeana S", "12:00 PM": "Zoe D", "1:00 PM": "Riddhi P"},
    "2025-02-28": { "9:00 AM": "Maya P", "1:00 PM": "Riddhi P", "2:00 PM": "Adeana S" }
	




};


    let currentMonth = 10;
    let currentYear = 2024;

    closeDayPopup.addEventListener("click", () => {
        dayPopup.classList.add("hidden");
    });

    function updateCalendar() {
        calendarGrid.innerHTML = "";
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        monthYear.textContent = new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
            year: "numeric",
        });

        for (let i = 0; i < firstDay; i++) {
            const blank = document.createElement("div");
            calendarGrid.appendChild(blank);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const button = document.createElement("div");
            const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            button.textContent = day;
            button.className = "calendar-day";

            if (new Date(currentYear, currentMonth, day).getDay() === 0 || new Date(currentYear, currentMonth, day).getDay() === 6) {
                button.classList.add("unavailable");
            } else {
                const dailyReservations = reservations[dateKey];
                const allSlotsTaken = dailyReservations && Object.keys(dailyReservations).length === 7;

                if (allSlotsTaken) {
                    button.classList.add("reserved");
                }

                button.addEventListener("click", () => {
                    openDayPopup(dateKey);
                });
            }
            calendarGrid.appendChild(button);
        }
    }

    function openDayPopup(date) {
        const dailyReservations = reservations[date] || {};
        timeSlots.innerHTML = "";

        const times = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"];

        times.forEach((time) => {
            const slot = document.createElement("div");
            slot.textContent = time;

            if (dailyReservations[time]) {
                slot.className = "unavailable";
                slot.textContent += ` - ${dailyReservations[time]}`;
            } else {
                slot.className = "available";
            }

            timeSlots.appendChild(slot);
        });

        dayPopup.classList.remove("hidden");
    }

    prevMonth.addEventListener("click", () => {
        if (currentMonth > new Date().getMonth() || currentYear > new Date().getFullYear()) {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            updateCalendar();
        }
    });

    nextMonth.addEventListener("click", () => {
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 3);
        if (currentMonth < maxDate.getMonth() || currentYear < maxDate.getFullYear()) {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            updateCalendar();
        }
    });

    updateCalendar();
});