import { z } from "zod";

const MeasurementSchema = z.object({
    Barcode: z.array(z.string()),
    MachineCode: z.string(),
    Weight: z.number(),
    Length: z.number(),
    Width: z.number(),
    Height: z.number(),
    RequestTime: z.string()
})

export default defineEventHandler(async event => {
    const body = await readBody(event)
    // const result = MeasurementSchema.safeParse(body)
    const barcode = result.Barcode[0]
    console.log(body)
    const payload = {
        "Message": "success",
        "Barcode": barcode,
        "ChuteCode": [2]
    }

    return payload
})

// // {
// "Barcode": [
//     "YT2318522147003012"
// ],
//     "MachineCode": "PAXF-01",
//         "Weight": 0.0,
//             "Length": 0.0,
//                 "Width": 0.0,
//                     "Height": 0.0,
//                         "RequestTime": "2023-06-08 15:09:29"
//     }

// //     {
// //           "Message": "success",
// //           "Barcode": "YT2318522147003012",
// //           "ChuteCode": [ 2 ]
// //         }
