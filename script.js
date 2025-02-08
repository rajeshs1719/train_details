let Train_Schedules = {
    "Ajmer Express (16210)": {
        "Days": "Tuesday and Thursday",
        "Routes": [
            ["07:10pm", "Mysuru Jn - MYS", "-", "AjmerJn - AII", "02:35pm", "47", "810", "27", "2135", "34", "3120", "2", "5325", "21", "810", "12", "2135", "8", "3120", "-", "5325"],
            ["07:10pm", "Mysuru Jn - MYS", "-", "Sojat Road - SOD", "12:30pm - 12:32pm", "47", "790", "27", "2085", "34", "3035", "2", "5180", "21", "790", "12", "2085", "8", "3035", "-", "5180"],
            ["07:10pm", "Mysuru Jn - MYS", "-", "Pune Jn - PUNE", "06:45pm - 06:50pm", "76", "530", "27", "1425", "38", "2050", "2", "3465","21","530","12","1425","8","2050","-","3465"],
            ["10:10pm - 10:20pm", "KSR Bengaluru - SBC", "-", "Ajmer Jn - AII", "02:35pm", "88", "790", "97", "2085", "16", "3035", "1", "5180","46","790","16","2085","8","3035","-","5180"],
            ["10:10pm - 10:20pm", "KSR Bengaluru - SBC", "-", "Pune Jn - PUNE", "06:45pm - 06:50pm", "88", "495", "101", "1335", "16", "1915", "1", "3240","46","495","16","1335","8","1915","-","3240"],
            ["06:45pm - 06:50pm", "Pune Jn - PUNE", "-", "Sojat Road - SOD", "12:30pm - 12:32pm", "29", "490", "4", "1320", "4", "1890", "1", "3195","21","490","12","1320","8","1890","-","3195"],
            ["06:45pm - 06:50pm", "Pune Jn - PUNE", "-", "Ajmer Jn - AII", "02:35pm", "29", "525", "4", "1405", "4", "2025", "1", "3420","21","525","12","1405","8","2025","-","3420"],
            ["06:45pm - 06:50pm", "Pune Jn - PUNE", "-", "Ajmer Jn - AII", "02:35pm", "29", "525", "4", "1405", "4", "2025", "1", "3420","21","525","12","1405","8","2025","-","3420"],
        ]
    },

    "Mrj Bkn SF Exp (20476)": {
        "Days": "Tuesday",
        "Routes": [
            ["02:40pm", "Miraj Jn - MRJ", "-", "Bikaner Jn - BKN", "08:15pm", "72", "690", "39", "1805", "12", "2595", "-", "-","21","690","20","1805","8","2595","-","-"],
            ["02:40pm", "Miraj Jn - MRJ", "-", "Marwar Jn - MJ", "01:35pm - 01:40pm", "32", "590", "24", "1540", "6", "2200", "-", "-","21","590","20","1540","8","2200","-","-"],
            ["08:10pm", "Pune Jn - PUNE", "-", "Marwar Jn - MJ", "01:35pm - 01:40pm", "136", "510", "102", "1340", "25", "1900", "-", "-","49","510","20","1340","8","1900","-","-"],
            ["08:10pm", "Pune Jn - PUNE", "-", "Bikaner Jn - BKN", "08:15pm", "124", "615", "90", "1610", "21", "2305", "-", "-","49","615","20","610","8","2305","-","-"],
        ]
    },
    "Udyan Exp (11302)": {
        "Days": "Daily",
        "Routes": [
            ["08:40pm", "KSR Bengaluru - SBC", "-", "C Shivaju Mah T - CSMT", "08:15pm", 181, 530, 86, 1425, 29, 2050, 14, 3465,49,530,12,1425,8,2050,"-",2465],
            ["08:40pm", "KSR Bengaluru - SBC", "-", "Pune Jn - Pune", "04:05pm - 04:10pm", 237, 475, 86, 1275,29, 1825, 14, 3080,49,475,12,1275,8,1825,"-",3080],
        ]
    },
    "Jodhpur Exp (16508)": {
        "Days": "Monday and Wednesday",
        "Routes": [
            ["10:20pm", "KSR Bengaluru - SBC", "-", "Jodhpur JN - JU", "02:15pm", 120 , 780 , 120 ,2060  , 53 , 3000 , 2 ,5120  ,494,780, 16, 2060, 8, 3000, , 5120],
            ["10:20pm", "KSR Bengaluru - SBC", "-", "Marwar JN - MJ", "12:05pm - 12:10pm", 120 , 760 , 120 , 2015 ,53 ,2930  , 2 ,5000  ,49 , 760, 16, 2015, 8, 2930,,5000],
            ["10:20pm", "KSR Bengaluru - SBC", "-", "Pune Jn - PUNE", "06:45pm - 06:50pm", 148 ,495 , 126 ,1335, 59,1915  ,2  , 3204 , 49, 495, 16,1335 ,8 ,1915 ,,3240],
            ["10:20pm", "KSR Bengaluru - SBC", "-", "Ahmedabad Jn - ADI", "05:30am - 05:35am", 134 , 665 , 122 , 1775 , 55 , 2575 , 2 , 4380 , 49, 665, 16,1775 ,8 ,2575 ,,4380],
            ["06:45pm - 06:50pm", "Pune Jn - PUNE", "-", "Jodhpur JN - JU", "02:15pm",14  , 510 , 4 , 1370 , 4 , 1970 , "WL 1" , 3330 , 49, 510, 16, 1370, 8, 1970,,3330],
            ["06:45pm - 06:50pm", "Pune Jn - PUNE", "-", "MARWAR JN - MJ", "12:05pm - 12:10pm", 14 , 480 , 4 , 1300 , 4 , 1865 , "WL 1" , 31445 , 49, 480, 16, 1300, 8, 1865,,3145],
            ["05:30am - 05:35am", "Ahmedabad Jn - ADI", "-", "Jodhpur JN - JU", "02:15pm", 14 , 275 , 2 , 745 , 2 ,1050  , "WL 1" ,1765  ,49 , 275, 16, 745, 8,1050 ,,1765],
            ["05:30am - 05:35am", "Ahmedabad Jn - ADI", "-", "MARWAR JN - MJ", "12:05pm - 12:10pm", 14 , 230 , 2 , 620 , 2 , 880 ,  , 1465 ,49 ,230 ,16 ,620 ,8 ,220 ,,1465],
            // ["05:30am - 05:35am", "Ahmedabad Jn - ADI", "-", "MARWAR JN - MJ", "12:05pm - 12:10pm",  ,  ,  ,  ,  ,  ,  ,  , , , , , , ,,],
        ]
    },
    "Ypr Jp Exp (20667)": {
        "Days": "Thursday",
        "Routes": [
            ["11:30am", "Yesvantpur Jn - YRP", "-", "Jaipur - JP", "05:25am",  ,  ,  ,  ,  ,  ,  ,  , , , , , , ,,],
            ["11:30am", "Yesvantpur Jn - YRP", "-", "Ajmer - AII", "02:55am - 03:05am",  ,  ,  ,  ,  ,  ,  ,  , , , , , , ,,],
            ["11:30am", "Yesvantpur Jn - YRP", "-", "Pune Jn - PUNE", "07:50am - 07:55am",  ,  ,  ,  ,  ,  ,  ,  , , , , , , ,,],
            ["07:50am - 07:55am", "Pune Jn - PUNE", "-","Jaipur - JP", "05:25am",  ,  ,  ,  ,  ,  ,  ,  , , , , , , ,,],
            ["07:50am - 07:55am", "Pune Jn - PUNE", "-", "Ajmer - AII", "02:55am - 03:05am",  ,  ,  ,  ,  ,  ,  ,  , , , , , , ,,],
            // ["05:30am - 05:35am", "Ahmedabad Jn - ADI", "-", "MARWAR JN - MJ", "12:05pm - 12:10pm",  ,  ,  ,  ,  ,  ,  ,  , , , , , , ,,],
        ]
    },

};

document.addEventListener("DOMContentLoaded", function () {
    let Train_Details = `<style>
        table { width: 100%; border-collapse: collapse; margin-top: 10px; border: 2px solid black}
        th, td { border: 2px solid black; padding: 8px; text-align: center; }
    </style>`;
    
    for (let Train_name in Train_Schedules) {
        let trainData = Train_Schedules[Train_name];
        Train_Details += `<details>
            <summary class="summary_line"><h2>${Train_name}</h2></summary>
            <p><b>Days</b>: ${trainData.Days} </p>
            <table border="1" border-collapse: collapse;>
                <thead>
                    <tr>
                        <th>Dept Time</th>
                        <th>From Station</th>
                        <th></th>
                        <th>To Station</th>
                        <th>Arrival Time</th>
                        <th>Sleeper Seat</th>
                        <th>Price</th>
                        <th>3A Seat</th>
                        <th>Price</th>
                        <th>2A Seat</th>
                        <th>Price</th>
                        <th>1A Seat</th>
                        <th>Price</th>
                        <th>Sn. Sleeper Seat</th>
                        <th>Price</th>
                        <th>Sn. 3A Seat</th>
                        <th>Price</th>
                        <th>Sn. 2A Seat</th>
                        <th>Price</th>
                        <th>Sn. 1A Seat</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>`;

        for (let route of trainData.Routes) {
            Train_Details += `<tr>
                <td>${route[0] || '-'}</td>
                <td>${route[1] || '-'}</td>
                <td>${route[2] || '-'}</td>
                <td>${route[3] || '-'}</td>
                <td>${route[4] || '-'}</td>
                <td>${route[5] || '-'}</td>
                <td>${route[6] || '-'}</td>
                <td>${route[7] || '-'}</td>
                <td>${route[8] || '-'}</td>
                <td>${route[9] || '-'}</td>
                <td>${route[10] || '-'}</td>
                <td>${route[11] || '-'}</td>
                <td>${route[12] || '-'}</td>
                <td>${route[13] || '-'}</td>
                <td>${route[14] || '-'}</td>
                <td>${route[15] || '-'}</td>
                <td>${route[16] || '-'}</td>
                <td>${route[17] || '-'}</td>
                <td>${route[18] || '-'}</td>
                <td>${route[19] || '-'}</td>
                <td>${route[20] || '-'}</td>
            </tr>`;
        }

        Train_Details += `</tbody></table></details>`;
    }

    document.body.innerHTML = Train_Details;
});
