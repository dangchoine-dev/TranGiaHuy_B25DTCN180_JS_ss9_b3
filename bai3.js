let rooms = [
    {
        roomId: "P101",
        roomType: "Standard",
        pricePerNight: 1000000,
        status: "VACANT"
    },
    {
        roomId: "P102",
        roomType: "Deluxe",
        pricePerNight: 1500000,
        status: "VACANT"
    },
    {
        roomId: "P103",
        roomType: "Suite",
        pricePerNight: 2500000,
        status: "VACANT"
    }
];

console.log("DANH SÁCH BAN ĐẦU");
console.log(rooms);

rooms.push({
    roomId: "P104",
    roomType: "VIP Suite",
    pricePerNight: 3500000,
    status: "VACANT"
});

console.log("SAU KHI THÊM P104");
console.log(rooms);

for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId == "P101") {
        rooms[i].status = "OCCUPIED";
    }
}

console.log("SAU KHI CẬP NHẬT P101");
console.log(rooms);

for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId == "P103") {
        rooms.splice(i, 1);
        break;
    }
}

console.log("SAU KHI XÓA P103");
console.log(rooms);