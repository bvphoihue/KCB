const hospitalData = {
    settings: { currentQuarter: "QUÝ I", currentYear: "2026", prevYear: "2025" },
    summary: {
        exams: { current: 1957, prev: 1610 },            
        admissions: { current: 394, prev: 377 },         
        inpatient: { current: 381, prev: 348 },          
        diagnostics: { current: 9530, prev: 5855 },      
        costOut: { current: 406405, prev: 327351 },      
        costIn: { current: 4114368, prev: 3775820 }      
    },
    charts: {
        months: ["Tháng 1", "Tháng 2", "Tháng 3"], 
        exams: { v2025: [390, 605, 615], v2026: [631, 579, 747] },
        admissions: { v2025: [81, 152, 144], v2026: [124, 103, 167] },
        inpatient: { v2025: [103, 108, 137], v2026: [122, 104, 155] },
        diagTypes: {
            labels: ['Sinh hoá', 'Huyết học', 'Vi sinh', 'X-quang', 'Siêu âm', 'Điện tim', 'Đo CNHH', 'Thủ thuật'],
            v2025: [2568, 698, 997, 1101, 77, 299, 115, 492],
            v2026: [5096, 1084, 1335, 1253, 98, 421, 241, 1490]
        },
        ecoOut: { v2025: [322996, 323950, 333332], v2026: [363238, 384626, 471350] },
        ecoIn: { v2025: [3907883, 3461910, 3922665], v2026: [4325579, 4061063, 3956463] }
    },
    performance: [
        { label: "Công suất giường bệnh(%)", prev: "99%", current: "96%", change: "- 3.0%", status: "down" },
        { label: "Luân lưu giường bệnh (Lượt)", prev: "5.35", current: "7.6", change: "+ 42.1%", status: "up" },
        { label: "Ngày điều trị bình quân (Ngày)", prev: "12.84", current: "11.4", change: "- 11.2%", status: "good" }
    ]
};